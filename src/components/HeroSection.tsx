import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import heroTrainer from "@/assets/hero-trainer.jpg";
import FloatingShapes from "./FloatingShapes";
import AnimatedCounter from "./AnimatedCounter";

interface CTAButtonProps {
  variant: "primary" | "outline";
  children: React.ReactNode;
  href?: string;
  dataUtmSource?: string;
  dataUtmMedium?: string;
  dataUtmCampaign?: string;
}

const CTAButton = ({
  variant,
  children,
  href = "#contact",
  dataUtmSource = "website",
  dataUtmMedium = "button",
  dataUtmCampaign = "hero",
}: CTAButtonProps) => {
  const baseClasses =
    "inline-flex items-center gap-3 px-8 py-4 font-display text-lg uppercase tracking-wider transition-all duration-200";

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${
        variant === "primary"
          ? "bg-primary text-primary-foreground btn-brutal"
          : "border-2 border-foreground bg-transparent text-foreground btn-brutal-outline"
      }`}
      data-utm-source={dataUtmSource}
      data-utm-medium={dataUtmMedium}
      data-utm-campaign={dataUtmCampaign}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      animate={
        variant === "primary"
          ? {
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 0 20px hsl(217 91% 50% / 0.3)",
                "0 0 30px hsl(217 91% 50% / 0.5)",
                "0 0 20px hsl(217 91% 50% / 0.3)",
              ],
            }
          : undefined
      }
      transition={
        variant === "primary"
          ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.2 }
      }
      style={{ willChange: "transform" }}
    >
      {children}
      {variant === "primary" && <ArrowRight className="h-5 w-5" />}
    </motion.a>
  );
};

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const titleWords = ["Сертификат", "не делает тебя", "тренером"];

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
        animate={{
          background: prefersReducedMotion
            ? undefined
            : [
                "linear-gradient(135deg, hsl(217 91% 50% / 0.05) 0%, transparent 50%, hsl(217 91% 50% / 0.1) 100%)",
                "linear-gradient(135deg, hsl(217 91% 50% / 0.1) 0%, transparent 50%, hsl(217 91% 50% / 0.05) 100%)",
                "linear-gradient(135deg, hsl(217 91% 50% / 0.05) 0%, transparent 50%, hsl(217 91% 50% / 0.1) 100%)",
              ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: prefersReducedMotion ? 0 : y, opacity }}
      >
        <img
          src={heroTrainer}
          alt="Тренер Лобанов — профессиональный фитнес-тренер и наставник"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Floating geometric shapes */}
      <FloatingShapes />

      {/* Content */}
      <div className="container relative z-10 flex min-h-screen flex-col justify-center py-20">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Pre-heading */}
          <motion.div className="mb-6" variants={itemVariants}>
            <span className="inline-block border-l-4 border-primary pl-4 font-body text-sm uppercase tracking-widest text-muted-foreground">
              Обучение тренеров • Персональные тренировки
            </span>
          </motion.div>

          {/* Main headline with word-by-word animation */}
          <motion.h1
            className="mb-8 font-display text-5xl font-bold uppercase leading-none tracking-tight text-foreground md:text-7xl lg:text-8xl"
            variants={itemVariants}
          >
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Сертификат
              <motion.span
                className="absolute left-0 top-1/2 h-1 bg-primary -translate-y-1/2"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
              />
            </motion.span>{" "}
            <motion.span
              className="block text-electric"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              не делает тебя
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              тренером
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mb-12 max-w-2xl font-body text-lg text-muted-foreground md:text-xl"
            variants={itemVariants}
          >
            Системный подход к развитию в фитнес-индустрии. Наставничество для
            тренеров, которые хотят работать на результат, а не на количество
            клиентов.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:gap-6"
            variants={itemVariants}
          >
            <CTAButton variant="primary" dataUtmCampaign="hero_primary">
              Начать обучение
            </CTAButton>
            <CTAButton variant="outline" dataUtmCampaign="hero_secondary">
              Персональные тренировки
            </CTAButton>
          </motion.div>

          {/* Stats bar with counter animation */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8"
            variants={itemVariants}
          >
            <div>
              <div className="stat-number">
                <AnimatedCounter value="8+" />
              </div>
              <div className="mt-2 font-body text-sm uppercase tracking-wide text-muted-foreground">
                Лет опыта
              </div>
            </div>
            <div>
              <div className="stat-number">
                <AnimatedCounter value="150+" />
              </div>
              <div className="mt-2 font-body text-sm uppercase tracking-wide text-muted-foreground">
                Учеников
              </div>
            </div>
            <div>
              <div className="stat-number">
                <AnimatedCounter value="500+" />
              </div>
              <div className="mt-2 font-body text-sm uppercase tracking-wide text-muted-foreground">
                Клиентов
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-12 w-6 border-2 border-muted-foreground p-1">
          <motion.div
            className="h-3 w-full bg-primary"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

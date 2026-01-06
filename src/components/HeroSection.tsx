import { ArrowRight } from "lucide-react";
import heroTrainer from "@/assets/hero-trainer.jpg";

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

  const variants = {
    primary: `${baseClasses} bg-primary text-primary-foreground btn-brutal animate-pulse-glow`,
    outline: `${baseClasses} border-2 border-foreground bg-transparent text-foreground btn-brutal-outline`,
  };

  return (
    <a
      href={href}
      className={variants[variant]}
      data-utm-source={dataUtmSource}
      data-utm-medium={dataUtmMedium}
      data-utm-campaign={dataUtmCampaign}
    >
      {children}
      {variant === "primary" && <ArrowRight className="h-5 w-5" />}
    </a>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroTrainer}
          alt="Тренер Лобанов — профессиональный фитнес-тренер и наставник"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Content */}
      <div className="container relative z-10 flex min-h-screen flex-col justify-center py-20">
        <div className="max-w-4xl">
          {/* Pre-heading */}
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-block border-l-4 border-primary pl-4 font-body text-sm uppercase tracking-widest text-muted-foreground">
              Обучение тренеров • Персональные тренировки
            </span>
          </div>

          {/* Main headline */}
          <h1 className="mb-8 animate-fade-in-up font-display text-5xl font-bold uppercase leading-none tracking-tight text-foreground md:text-7xl lg:text-8xl animation-delay-100">
            <span className="relative inline-block">
              Сертификат
              <span className="absolute left-0 top-1/2 w-full h-1 bg-primary -translate-y-1/2" />
            </span>{" "}
            <span className="block text-electric">не делает тебя</span>
            <span className="block">тренером</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-12 max-w-2xl animate-fade-in-up font-body text-lg text-muted-foreground md:text-xl animation-delay-200">
            Системный подход к развитию в фитнес-индустрии. Наставничество для
            тренеров, которые хотят работать на результат, а не на количество
            клиентов.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col gap-4 animate-fade-in-up animation-delay-300 sm:flex-row sm:gap-6">
            <CTAButton variant="primary" dataUtmCampaign="hero_primary">
              Начать обучение
            </CTAButton>
            <CTAButton variant="outline" dataUtmCampaign="hero_secondary">
              Персональные тренировки
            </CTAButton>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8 animate-fade-in-up animation-delay-400">
            <div>
              <div className="stat-number">8+</div>
              <div className="mt-2 font-body text-sm uppercase tracking-wide text-muted-foreground">
                Лет опыта
              </div>
            </div>
            <div>
              <div className="stat-number">150+</div>
              <div className="mt-2 font-body text-sm uppercase tracking-wide text-muted-foreground">
                Учеников
              </div>
            </div>
            <div>
              <div className="stat-number">500+</div>
              <div className="mt-2 font-body text-sm uppercase tracking-wide text-muted-foreground">
                Клиентов
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-6 border-2 border-muted-foreground p-1">
          <div className="h-3 w-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

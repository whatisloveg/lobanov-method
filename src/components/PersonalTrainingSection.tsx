import { Monitor, MapPin, Users } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import gymBackground from "@/assets/gym-background.jpg";
import ScrollReveal from "./ScrollReveal";

const onlineFeatures = [
  "Тренировки по видеосвязи",
  "Индивидуальные программы",
  "Контроль питания",
  "Постоянная поддержка",
];

const offlineFeatures = [
  "Тренировки в зале",
  "Разбор техники",
  "Корректировка нагрузки",
  "Методички по питанию",
];

const PersonalTrainingSection = () => {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="training" className="relative bg-secondary py-24 md:py-32 overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: prefersReducedMotion ? 0 : backgroundY }}
      >
        <img
          src={gymBackground}
          alt="Тренажерный зал для персональных тренировок"
          className="h-[120%] w-full object-cover opacity-10"
          loading="lazy"
        />
      </motion.div>

      <div className="container relative z-10">
        {/* Section header */}
        <ScrollReveal className="mb-16 text-center">
          <h2 className="mb-6 font-display text-4xl font-bold uppercase leading-tight text-foreground md:text-5xl lg:text-6xl">
            Персональные тренировки{" "}
            <span className="text-electric">онлайн и офлайн</span>
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
            Индивидуальный подход к каждому клиенту. Работаем на результат, а не
            на отработку часов.
          </p>
        </ScrollReveal>

        {/* Training cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Online card */}
          <ScrollReveal delay={0.1}>
            <motion.article
              className="card-brutal relative overflow-hidden h-full"
              whileHover={{
                y: -8,
                boxShadow: "6px 6px 0 0 hsl(217 91% 50%)",
              }}
              transition={{ duration: 0.2 }}
              style={{ willChange: "transform" }}
            >
              <motion.div
                className="absolute -right-4 -top-4 h-20 w-20 bg-primary opacity-10"
                whileHover={{ scale: 1.5, rotate: 45 }}
                transition={{ duration: 0.3 }}
              />
              <div className="mb-6 flex items-center gap-4">
                <motion.div
                  className="flex h-14 w-14 items-center justify-center border-2 border-primary"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Monitor className="h-7 w-7 text-primary" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold uppercase text-foreground">
                  Онлайн формат
                </h3>
              </div>
              <ul className="mb-6 space-y-3">
                {onlineFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 font-body text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="h-2 w-2 bg-primary"
                      whileHover={{ scale: 1.5 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <p className="font-body text-sm text-muted-foreground">
                Тренируйся из любой точки мира. Полный контроль и поддержка на
                связи.
              </p>
            </motion.article>
          </ScrollReveal>

          {/* Offline card */}
          <ScrollReveal delay={0.2}>
            <motion.article
              className="card-brutal relative overflow-hidden h-full"
              whileHover={{
                y: -8,
                boxShadow: "6px 6px 0 0 hsl(217 91% 50%)",
              }}
              transition={{ duration: 0.2 }}
              style={{ willChange: "transform" }}
            >
              <motion.div
                className="absolute -right-4 -top-4 h-20 w-20 bg-primary opacity-10"
                whileHover={{ scale: 1.5, rotate: 45 }}
                transition={{ duration: 0.3 }}
              />
              <div className="mb-6 flex items-center gap-4">
                <motion.div
                  className="flex h-14 w-14 items-center justify-center border-2 border-primary"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin className="h-7 w-7 text-primary" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold uppercase text-foreground">
                  Офлайн формат
                </h3>
              </div>
              <ul className="mb-6 space-y-3">
                {offlineFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 font-body text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="h-2 w-2 bg-primary"
                      whileHover={{ scale: 1.5 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <p className="font-body text-sm text-muted-foreground">
                Личные тренировки с максимальной отдачей и контролем техники.
              </p>
            </motion.article>
          </ScrollReveal>
        </div>

        {/* Pair training badge */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex justify-center">
            <motion.div
              className="inline-flex items-center gap-3 border-2 border-border bg-card px-6 py-4"
              whileHover={{
                borderColor: "hsl(217 91% 50%)",
                boxShadow: "4px 4px 0 0 hsl(217 91% 50%)",
              }}
              transition={{ duration: 0.2 }}
            >
              <Users className="h-6 w-6 text-primary" />
              <span className="font-display text-lg uppercase text-foreground">
                Доступны парные тренировки
              </span>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-8 flex justify-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-lg uppercase tracking-wide text-primary-foreground btn-brutal"
              data-utm-source="website"
              data-utm-medium="button"
              data-utm-campaign="training_section"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px hsl(217 91% 50% / 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Выбрать формат
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PersonalTrainingSection;

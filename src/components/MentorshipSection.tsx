import { Video, MessageCircle, FileCheck, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Calendar,
    title: "Стартовый созвон",
    description: "Разбор целей и текущего уровня",
  },
  {
    icon: MessageCircle,
    title: "Консультации в переписке",
    description: "Постоянная обратная связь",
  },
  {
    icon: Video,
    title: "Разбор техники по видео",
    description: "Анализ своей и клиентской техники",
  },
  {
    icon: FileCheck,
    title: "Еженедельные отчёты",
    description: "Фотофиксация прогресса",
  },
  {
    icon: Users,
    title: "Индивидуальные разборы",
    description: "Онлайн и офлайн сессии",
  },
];

const MentorshipSection = () => {
  return (
    <section id="mentorship" className="relative bg-background py-24 md:py-32">
      {/* Accent line */}
      <motion.div
        className="absolute left-0 top-0 h-1 bg-primary"
        initial={{ width: 0 }}
        whileInView={{ width: "33.333%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="container">
        {/* Section header */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <ScrollReveal>
            <motion.span
              className="mb-4 inline-block border border-primary px-4 py-2 font-body text-xs uppercase tracking-widest text-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Приоритетное направление
            </motion.span>
            <h2 className="font-display text-4xl font-bold uppercase leading-tight text-foreground md:text-5xl lg:text-6xl">
              Обучение и наставничество для{" "}
              <span className="text-electric">фитнес-тренеров</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex flex-col justify-end">
            <p className="font-body text-lg text-muted-foreground">
              Для тренеров и студентов фитнес-направлений, которые хотят
              системного профессионального развития. Не просто теория — практика
              с обратной связью от действующего специалиста.
            </p>
          </ScrollReveal>
        </div>

        {/* Features grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.article
                className="card-brutal group transition-all duration-300 h-full"
                whileHover={{
                  y: -8,
                  boxShadow: "6px 6px 0 0 hsl(217 91% 50%)",
                }}
                transition={{ duration: 0.2 }}
                style={{ willChange: "transform" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="mb-4 h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="mb-2 font-display text-lg font-bold uppercase text-foreground">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.5}>
          <div className="mt-12 flex justify-center">
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-3 border-b-2 border-primary pb-2 font-display text-xl uppercase tracking-wide text-foreground"
              data-utm-source="website"
              data-utm-medium="button"
              data-utm-campaign="mentorship_section"
              whileHover={{ gap: "1.25rem" }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative">
                Узнать подробнее
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <motion.span
                className="text-primary"
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

export default MentorshipSection;

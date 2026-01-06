import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import trainerLobanov from "@/assets/trainer-lobanov.jpg";
import ScrollReveal from "./ScrollReveal";

const credentials = [
  "8+ лет в фитнес-индустрии",
  "150+ выпускников наставничества",
  "500+ персональных клиентов",
  "Авторская методика обучения",
  "Практикующий тренер",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-secondary py-24 md:py-32">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative group">
              <motion.div
                className="absolute -left-4 -top-4 h-full w-full border-2 border-primary"
                initial={{ opacity: 0, x: -20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="relative z-10 overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={trainerLobanov}
                  alt="Тренер Лобанов — персональный тренер и наставник для фитнес-специалистов"
                  className="relative z-10 h-full w-full object-cover"
                  loading="lazy"
                  style={{
                    filter: "grayscale(30%) brightness(0.9)",
                  }}
                />
                {/* Blue overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary/20 mix-blend-overlay z-20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-primary px-6 py-4 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="font-display text-xl font-bold uppercase text-primary-foreground">
                  8+ лет опыта
                </span>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <ScrollReveal delay={0.1}>
              <h2 className="mb-6 font-display text-4xl font-bold uppercase leading-tight text-foreground md:text-5xl">
                Тренер <span className="text-electric">Лобанов</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mb-6 font-body text-lg text-muted-foreground">
                Не просто тренер — практикующий специалист и методист с опытом
                работы в премиальном сегменте. Обучаю не теории из учебников, а
                реальным навыкам работы с клиентами.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mb-8 font-body text-muted-foreground">
                Моя цель — вырастить поколение тренеров, которые работают на
                результат. Тренеров, к которым возвращаются клиенты и которых
                рекомендуют друзьям. Тренеров, которые не продают абонементы, а
                меняют жизни.
              </p>
            </ScrollReveal>

            {/* Credentials */}
            <ul className="space-y-3">
              {credentials.map((credential, index) => (
                <ScrollReveal key={index} delay={0.4 + index * 0.1}>
                  <motion.li
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="font-body text-foreground">{credential}</span>
                  </motion.li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

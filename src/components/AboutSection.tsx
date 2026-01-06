import { CheckCircle } from "lucide-react";
import heroTrainer from "@/assets/hero-trainer.jpg";

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
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border-2 border-primary" />
            <img
              src={heroTrainer}
              alt="Тренер Лобанов — персональный тренер и наставник для фитнес-тренеров"
              className="relative z-10 h-full w-full object-cover grayscale transition-all hover:grayscale-0"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary px-6 py-4 z-20">
              <span className="font-display text-xl font-bold uppercase text-primary-foreground">
                8+ лет опыта
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 font-display text-4xl font-bold uppercase leading-tight text-foreground md:text-5xl">
              Тренер <span className="text-electric">Лобанов</span>
            </h2>

            <p className="mb-6 font-body text-lg text-muted-foreground">
              Не просто тренер — практикующий специалист и методист с опытом
              работы в премиальном сегменте. Обучаю не теории из учебников, а
              реальным навыкам работы с клиентами.
            </p>

            <p className="mb-8 font-body text-muted-foreground">
              Моя цель — вырастить поколение тренеров, которые работают на
              результат. Тренеров, к которым возвращаются клиенты и которых
              рекомендуют друзьям. Тренеров, которые не продают абонементы, а
              меняют жизни.
            </p>

            {/* Credentials */}
            <ul className="space-y-3">
              {credentials.map((credential, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="font-body text-foreground">{credential}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

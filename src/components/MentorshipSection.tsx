import { Video, MessageCircle, FileCheck, Calendar, Users } from "lucide-react";

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
      <div className="absolute left-0 top-0 h-1 w-1/3 bg-primary" />

      <div className="container">
        {/* Section header */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <span className="mb-4 inline-block border border-primary px-4 py-2 font-body text-xs uppercase tracking-widest text-primary">
              Приоритетное направление
            </span>
            <h2 className="font-display text-4xl font-bold uppercase leading-tight text-foreground md:text-5xl lg:text-6xl">
              Обучение и наставничество для{" "}
              <span className="text-electric">фитнес-тренеров</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="font-body text-lg text-muted-foreground">
              Для тренеров и студентов фитнес-направлений, которые хотят
              системного профессионального развития. Не просто теория — практика
              с обратной связью от действующего специалиста.
            </p>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => (
            <article
              key={index}
              className="card-brutal group transition-all duration-300"
            >
              <feature.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-display text-lg font-bold uppercase text-foreground">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border-b-2 border-primary pb-2 font-display text-xl uppercase tracking-wide text-foreground transition-all hover:gap-5"
            data-utm-source="website"
            data-utm-medium="button"
            data-utm-campaign="mentorship_section"
          >
            Узнать подробнее
            <span className="text-primary">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;

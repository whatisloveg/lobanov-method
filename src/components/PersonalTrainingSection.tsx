import { Monitor, MapPin, Users } from "lucide-react";
import gymBackground from "@/assets/gym-background.jpg";

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
  return (
    <section id="training" className="relative bg-secondary py-24 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={gymBackground}
          alt="Тренажерный зал для персональных тренировок"
          className="h-full w-full object-cover opacity-10"
          loading="lazy"
        />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-display text-4xl font-bold uppercase leading-tight text-foreground md:text-5xl lg:text-6xl">
            Персональные тренировки{" "}
            <span className="text-electric">онлайн и офлайн</span>
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
            Индивидуальный подход к каждому клиенту. Работаем на результат, а не
            на отработку часов.
          </p>
        </div>

        {/* Training cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Online card */}
          <article className="card-brutal relative overflow-hidden">
            <div className="absolute -right-4 -top-4 h-20 w-20 bg-primary opacity-10" />
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center border-2 border-primary">
                <Monitor className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-foreground">
                Онлайн формат
              </h3>
            </div>
            <ul className="mb-6 space-y-3">
              {onlineFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 font-body text-muted-foreground"
                >
                  <span className="h-2 w-2 bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="font-body text-sm text-muted-foreground">
              Тренируйся из любой точки мира. Полный контроль и поддержка на
              связи.
            </p>
          </article>

          {/* Offline card */}
          <article className="card-brutal relative overflow-hidden">
            <div className="absolute -right-4 -top-4 h-20 w-20 bg-primary opacity-10" />
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center border-2 border-primary">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-foreground">
                Офлайн формат
              </h3>
            </div>
            <ul className="mb-6 space-y-3">
              {offlineFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 font-body text-muted-foreground"
                >
                  <span className="h-2 w-2 bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="font-body text-sm text-muted-foreground">
              Личные тренировки с максимальной отдачей и контролем техники.
            </p>
          </article>
        </div>

        {/* Pair training badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 border-2 border-border bg-card px-6 py-4">
            <Users className="h-6 w-6 text-primary" />
            <span className="font-display text-lg uppercase text-foreground">
              Доступны парные тренировки
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-lg uppercase tracking-wide text-primary-foreground btn-brutal"
            data-utm-source="website"
            data-utm-medium="button"
            data-utm-campaign="training_section"
          >
            Выбрать формат
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonalTrainingSection;

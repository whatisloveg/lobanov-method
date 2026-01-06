import { TrendingUp, Award, Target } from "lucide-react";

const trainerResults = [
  {
    name: "Алексей К.",
    role: "Начинающий тренер → Тренер премиум-сегмента",
    metric: "+300%",
    metricLabel: "доход за 6 месяцев",
    description:
      "Выстроил систему работы с клиентами, увеличил средний чек и получил постоянный поток рекомендаций.",
  },
  {
    name: "Мария Д.",
    role: "Студентка ФФК → Востребованный специалист",
    metric: "15",
    metricLabel: "постоянных клиентов",
    description:
      "Ещё до окончания вуза начала работать с клиентами и выстроила полную загрузку.",
  },
  {
    name: "Дмитрий Р.",
    role: "Тренер с опытом → Онлайн-эксперт",
    metric: "50+",
    metricLabel: "онлайн-клиентов",
    description:
      "Перешёл из офлайна в онлайн, масштабировал доход без привязки к залу.",
  },
];

const clientResults = [
  {
    metric: "-18 кг",
    period: "за 4 месяца",
    type: "Снижение веса",
  },
  {
    metric: "+12 кг",
    period: "за 6 месяцев",
    type: "Набор мышечной массы",
  },
  {
    metric: "100%",
    period: "выполнение плана",
    type: "Первый марафон",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="relative bg-background py-24 md:py-32">
      <div className="container">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-border" />
            <Award className="h-8 w-8 text-primary" />
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-center font-display text-4xl font-bold uppercase leading-tight text-foreground md:text-5xl lg:text-6xl">
            Результаты учеников{" "}
            <span className="text-electric">и клиентов</span>
          </h2>
        </div>

        {/* Trainer success stories */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h3 className="font-display text-2xl font-bold uppercase text-foreground">
              Успехи тренеров после наставничества
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {trainerResults.map((result, index) => (
              <article key={index} className="card-brutal">
                <div className="mb-4">
                  <div className="stat-number">{result.metric}</div>
                  <div className="font-body text-sm uppercase tracking-wide text-muted-foreground">
                    {result.metricLabel}
                  </div>
                </div>
                <div className="mb-3 border-t border-border pt-4">
                  <div className="font-display text-lg font-bold text-foreground">
                    {result.name}
                  </div>
                  <div className="font-body text-sm text-primary">
                    {result.role}
                  </div>
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  {result.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Client transformations */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <Target className="h-6 w-6 text-primary" />
            <h3 className="font-display text-2xl font-bold uppercase text-foreground">
              Результаты клиентов
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {clientResults.map((result, index) => (
              <div
                key={index}
                className="border-2 border-border bg-card p-6 text-center transition-all hover:border-primary"
              >
                <div className="stat-number">{result.metric}</div>
                <div className="mt-2 font-body text-sm text-muted-foreground">
                  {result.period}
                </div>
                <div className="mt-4 border-t border-border pt-4 font-display text-sm uppercase tracking-wide text-foreground">
                  {result.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

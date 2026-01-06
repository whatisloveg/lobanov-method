import { useState } from "react";
import { Send, GraduationCap, Dumbbell } from "lucide-react";

type GoalType = "" | "training" | "mentorship" | "pair" | "other";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "" as GoalType,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-background py-24 md:py-32">
      {/* Accent line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

      <div className="container">
        {/* Two paths */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {/* Trainer path - Primary */}
          <a
            href="#contact-form"
            className="card-brutal group relative overflow-hidden border-primary p-8"
            data-utm-source="website"
            data-utm-medium="button"
            data-utm-campaign="cta_trainer"
          >
            <div className="absolute inset-0 bg-primary opacity-0 transition-opacity group-hover:opacity-5" />
            <GraduationCap className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-3 font-display text-3xl font-bold uppercase text-foreground">
              Хочу учиться
            </h3>
            <p className="mb-6 font-body text-muted-foreground">
              Наставничество для тренеров и студентов. Системное развитие в
              фитнес-индустрии.
            </p>
            <span className="inline-flex items-center gap-2 font-display text-lg uppercase text-primary">
              Начать обучение <span className="transition-transform group-hover:translate-x-2">→</span>
            </span>
          </a>

          {/* Client path - Secondary */}
          <a
            href="#contact-form"
            className="card-brutal group relative overflow-hidden p-8"
            data-utm-source="website"
            data-utm-medium="button"
            data-utm-campaign="cta_client"
          >
            <div className="absolute inset-0 bg-primary opacity-0 transition-opacity group-hover:opacity-5" />
            <Dumbbell className="mb-4 h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors" />
            <h3 className="mb-3 font-display text-2xl font-bold uppercase text-foreground">
              Хочу тренироваться
            </h3>
            <p className="mb-6 font-body text-muted-foreground">
              Персональные тренировки онлайн или в зале. Индивидуальный подход.
            </p>
            <span className="inline-flex items-center gap-2 font-display uppercase text-muted-foreground group-hover:text-primary transition-colors">
              Выбрать формат <span className="transition-transform group-hover:translate-x-2">→</span>
            </span>
          </a>
        </div>

        {/* Contact form */}
        <div id="contact-form" className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold uppercase text-foreground md:text-4xl">
              Оставить заявку
            </h2>
            <p className="font-body text-muted-foreground">
              Заполните форму и я свяжусь с вами в течение 24 часов
            </p>
          </div>

          {isSubmitted ? (
            <div className="border-2 border-primary bg-card p-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center bg-primary">
                <Send className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-display text-2xl font-bold uppercase text-foreground">
                Заявка отправлена
              </h3>
              <p className="font-body text-muted-foreground">
                Я свяжусь с вами в ближайшее время
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden UTM fields */}
              <input type="hidden" name="utm_source" value="" />
              <input type="hidden" name="utm_medium" value="" />
              <input type="hidden" name="utm_campaign" value="" />

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-display text-sm uppercase tracking-wide text-foreground"
                >
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border-2 border-border bg-card px-4 py-3 font-body text-foreground transition-colors focus:border-primary focus:outline-none"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block font-display text-sm uppercase tracking-wide text-foreground"
                >
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border-2 border-border bg-card px-4 py-3 font-body text-foreground transition-colors focus:border-primary focus:outline-none"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label
                  htmlFor="goal"
                  className="mb-2 block font-display text-sm uppercase tracking-wide text-foreground"
                >
                  Цель
                </label>
                <select
                  id="goal"
                  name="goal"
                  required
                  value={formData.goal}
                  onChange={(e) =>
                    setFormData({ ...formData, goal: e.target.value as GoalType })
                  }
                  className="w-full border-2 border-border bg-card px-4 py-3 font-body text-foreground transition-colors focus:border-primary focus:outline-none"
                >
                  <option value="">Выберите цель</option>
                  <option value="mentorship">Наставничество для тренеров</option>
                  <option value="training">Персональные тренировки</option>
                  <option value="pair">Парные тренировки</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary px-8 py-4 font-display text-lg uppercase tracking-wide text-primary-foreground btn-brutal disabled:opacity-50"
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </button>

              <p className="text-center font-body text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;

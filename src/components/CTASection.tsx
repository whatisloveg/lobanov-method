import { useState } from "react";
import { Send, GraduationCap, Dumbbell, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

type GoalType = "" | "training" | "mentorship" | "pair" | "other";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "" as GoalType,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
      <motion.div
        className="absolute left-0 top-0 w-1 bg-primary"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div className="container">
        {/* Two paths */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {/* Trainer path - Primary */}
          <ScrollReveal delay={0.1}>
            <motion.a
              href="#contact-form"
              className="card-brutal group relative overflow-hidden border-primary p-8 block h-full"
              data-utm-source="website"
              data-utm-medium="button"
              data-utm-campaign="cta_trainer"
              whileHover={{
                y: -8,
                boxShadow: "6px 6px 0 0 hsl(217 91% 50%)",
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.2 }}
              >
                <GraduationCap className="mb-4 h-12 w-12 text-primary" />
              </motion.div>
              <h3 className="mb-3 font-display text-3xl font-bold uppercase text-foreground">
                Хочу учиться
              </h3>
              <p className="mb-6 font-body text-muted-foreground">
                Наставничество для тренеров и студентов. Системное развитие в
                фитнес-индустрии.
              </p>
              <span className="inline-flex items-center gap-2 font-display text-lg uppercase text-primary">
                Начать обучение{" "}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
          </ScrollReveal>

          {/* Client path - Secondary */}
          <ScrollReveal delay={0.2}>
            <motion.a
              href="#contact-form"
              className="card-brutal group relative overflow-hidden p-8 block h-full"
              data-utm-source="website"
              data-utm-medium="button"
              data-utm-campaign="cta_client"
              whileHover={{
                y: -8,
                boxShadow: "6px 6px 0 0 hsl(217 91% 50%)",
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Dumbbell className="mb-4 h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
              <h3 className="mb-3 font-display text-2xl font-bold uppercase text-foreground">
                Хочу тренироваться
              </h3>
              <p className="mb-6 font-body text-muted-foreground">
                Персональные тренировки онлайн или в зале. Индивидуальный подход.
              </p>
              <span className="inline-flex items-center gap-2 font-display uppercase text-muted-foreground group-hover:text-primary transition-colors">
                Выбрать формат{" "}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
          </ScrollReveal>
        </div>

        {/* Contact form */}
        <ScrollReveal delay={0.3}>
          <div id="contact-form" className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 font-display text-3xl font-bold uppercase text-foreground md:text-4xl">
                Оставить заявку
              </h2>
              <p className="font-body text-muted-foreground">
                Заполните форму и я свяжусь с вами в течение 24 часов
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  className="border-2 border-primary bg-card p-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mb-4 inline-flex h-16 w-16 items-center justify-center bg-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 360] }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <CheckCircle className="h-8 w-8 text-primary-foreground" />
                  </motion.div>
                  <motion.h3
                    className="mb-2 font-display text-2xl font-bold uppercase text-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Заявка отправлена
                  </motion.h3>
                  <motion.p
                    className="font-body text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Я свяжусь с вами в ближайшее время
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
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
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full border-2 border-border bg-card px-4 py-3 font-body text-foreground transition-all focus:border-primary focus:outline-none"
                      placeholder="Ваше имя"
                      style={{
                        boxShadow:
                          focusedField === "name"
                            ? "0 0 20px hsl(217 91% 50% / 0.3)"
                            : "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block font-display text-sm uppercase tracking-wide text-foreground"
                    >
                      Телефон
                    </label>
                    <motion.input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full border-2 border-border bg-card px-4 py-3 font-body text-foreground transition-all focus:border-primary focus:outline-none"
                      placeholder="+7 (___) ___-__-__"
                      style={{
                        boxShadow:
                          focusedField === "phone"
                            ? "0 0 20px hsl(217 91% 50% / 0.3)"
                            : "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="goal"
                      className="mb-2 block font-display text-sm uppercase tracking-wide text-foreground"
                    >
                      Цель
                    </label>
                    <motion.select
                      id="goal"
                      name="goal"
                      required
                      value={formData.goal}
                      onChange={(e) =>
                        setFormData({ ...formData, goal: e.target.value as GoalType })
                      }
                      onFocus={() => setFocusedField("goal")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full border-2 border-border bg-card px-4 py-3 font-body text-foreground transition-all focus:border-primary focus:outline-none"
                      style={{
                        boxShadow:
                          focusedField === "goal"
                            ? "0 0 20px hsl(217 91% 50% / 0.3)"
                            : "none",
                      }}
                    >
                      <option value="">Выберите цель</option>
                      <option value="mentorship">Наставничество для тренеров</option>
                      <option value="training">Персональные тренировки</option>
                      <option value="pair">Парные тренировки</option>
                      <option value="other">Другое</option>
                    </motion.select>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary px-8 py-4 font-display text-lg uppercase tracking-wide text-primary-foreground btn-brutal disabled:opacity-50"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px hsl(217 91% 50% / 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        Отправка...
                      </motion.span>
                    ) : (
                      "Отправить заявку"
                    )}
                  </motion.button>

                  <p className="text-center font-body text-xs text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;

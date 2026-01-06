const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="font-display text-xl font-bold uppercase text-foreground">
            Тренер <span className="text-electric">Лобанов</span>
          </div>
          <nav aria-label="Основная навигация" className="flex gap-6 font-body text-sm text-muted-foreground">
            <a href="#mentorship" className="hover-underline hover:text-foreground transition-colors" aria-label="Перейти к разделу наставничество для тренеров">
              Наставничество
            </a>
            <a href="#training" className="hover-underline hover:text-foreground transition-colors" aria-label="Перейти к разделу персональные тренировки">
              Тренировки
            </a>
            <a href="#results" className="hover-underline hover:text-foreground transition-colors" aria-label="Перейти к разделу результаты учеников и клиентов">
              Результаты
            </a>
            <a href="#about" className="hover-underline hover:text-foreground transition-colors" aria-label="Перейти к разделу о тренере Лобанове">
              О тренере
            </a>
          </nav>
          <div className="font-body text-sm text-muted-foreground">
            © 2024 Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

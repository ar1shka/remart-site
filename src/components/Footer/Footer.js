import './Footer.css'

export function Footer() {
  return `
    <footer class="footer">
      <div class="footer__container">

        <div class="footer__main">

          <div class="footer__brand">
            <a href="/" class="footer__logo" aria-label="РемАрт">
              РЕМАРТ
            </a>

            <p class="footer__tagline">
              Ремонт, в котором продумана<br>
              каждая деталь
            </p>
          </div>

          <div class="footer__navigation">
            <span class="footer__contacts-title">
              НАВИГАЦИЯ
            </span>

            <nav class="footer__nav">
              <a href="#projects">Наши работы</a>
              <a href="#services">Наши услуги</a>
              <a href="#advantages">Преимущества</a>
              <a href="#about">О компании</a>
              <a href="#faq">Частые вопросы</a>
            </nav>
          </div>

          <div class="footer__contacts">
            <span class="footer__contacts-title">
              КОНТАКТЫ
            </span>

            <a href="tel:+79200502323">
              +7 (920) 050-23-23
            </a>

            <a href="mailto:info@remart-nn.ru">
              info@remart-nn.ru
            </a>
          </div>

        </div>

        <div class="footer__bottom">
          <span>© 2026 РЕМАРТ</span>

          <a href="#">
            Политика конфиденциальности
          </a>
        </div>

      </div>
    </footer>
  `
}
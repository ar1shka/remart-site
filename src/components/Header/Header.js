import './Header.css'

export function Header() {
  return `
    <header class="header">
      <div class="header__container">

      <a href="/" class="header__logo" aria-label="РемАрт">
        <img
            class="header__logo-image-square"
            src="/src/assets/logo1.png"
            alt=""
        >

        <img
            class="header__logo-image-wide"
            src="/src/assets/logo2.png"
            alt=""
        >
        </a>

        <nav class="header__nav">
          <a href="#services" class="header__link">Услуги</a>
          <a href="#projects" class="header__link">Проекты</a>
          <a href="#about" class="header__link">О компании</a>
          <a href="#process" class="header__link">Как мы работаем</a>
        </nav>

        <a href="#contact" class="header__button">
          Обсудить проект
        </a>

      </div>
    </header>
  `
}
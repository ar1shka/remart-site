import './Hero.css'

export function Hero() {
  return `
    <section class="hero" id="hero">
      <div class="hero__container">

        <div class="hero__image"></div>

        <div class="hero__content">

          <p class="hero__eyebrow">
            РЕМОНТ · ДИЗАЙН · РЕАЛИЗАЦИЯ
          </p>

          <h1 class="hero__title">
            ИСКУССТВО РЕМОНТА —<br>
            ОТ ИДЕИ ДО<br>
            РЕАЛИЗАЦИИ
          </h1>

          <p class="hero__description">
            Создаём интерьеры и реализуем их<br>
            под ключ — от первого чертежа до<br>
            финальной уборки
          </p>

          <a href="#contact" class="hero__button">
            Обсудить проект
          </a>

        </div>

      </div>
    </section>
  `
}
import './Advantages.css'

export function Advantages() {
  return `
    <section class="advantages" id="advantages">
      <div class="advantages__container">

        <div class="advantages__intro">
          <span class="advantages__line"></span>

          <h2 class="advantages__title">
            Наши <span>преимущества</span>
          </h2>

          <p class="advantages__description">
            Берём на себя весь ремонт от подготовки помещения до
            финальной уборки. Вы всегда понимаете, что происходит
            на объекте и за что платите
          </p>
        </div>

        <div class="advantages__list">

          <article class="advantage">
            <span class="advantage__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v18M3 12h18"/>
              </svg>
            </span>

            <h3>Контроль на каждом этапе</h3>

            <p>
              Следим за ходом работ и качеством выполнения,
              чтобы вам не приходилось постоянно контролировать
              объект самостоятельно
            </p>
          </article>

          <article class="advantage">
            <span class="advantage__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h10"/>
              </svg>
            </span>

            <h3>Прозрачная смета</h3>

            <p>
              Фиксируем состав работ и стоимость до начала ремонта.
              Все изменения согласовываем заранее
            </p>
          </article>

          <article class="advantage">
            <span class="advantage__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 19h16M6 19V9h12v10M9 9V5h6v4"/>
              </svg>
            </span>

            <h3>Один подрядчик</h3>

            <p>
              Берём на себя организацию основных работ от сантехники
              и электрики до чистовой отделки
            </p>
          </article>

          <article class="advantage">
            <span class="advantage__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 8h14v12H5zM8 8V5h8v3M9 12h6M9 16h4"/>
              </svg>
            </span>

            <h3>Порядок после ремонта</h3>

            <p>
              Организуем вывоз строительного мусора и приводим
              помещение в порядок после завершения работ
            </p>
          </article>

        </div>

      </div>
    </section>
  `
}
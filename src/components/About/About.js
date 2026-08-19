import './About.css'

export function About() {
  return `
    <section class="about" id="about">
      <div class="about__container">

        <div class="about__content">
          <p class="about__eyebrow">
            О РЕМАРТ
          </p>

          <h2 class="about__title">
            РЕМОНТ — ЭТО
            <span>НЕ</span> НАБОР<br>
            ОТДЕЛЬНЫХ РАБОТ
          </h2>

          <p class="about__description">
            Мы объединяем дизайн, строительные работы<br>
            и контроль реализации в единый процесс —<br>
            от первого решения до готового интерьера
          </p>
        </div>

        <div class="about__steps">

          <div class="about__step">
            <div class="about__step-title">
              <span>01</span>
              <strong>Дизайн</strong>
            </div>

            <p>
              Пространство продумывается до начала работ
            </p>
          </div>

          <div class="about__step">
            <div class="about__step-title">
              <span>02</span>
              <strong>Реализация</strong>
            </div>

            <p>
              Выполняем работы в единой системе
            </p>
          </div>

          <div class="about__step">
            <div class="about__step-title">
              <span>03</span>
              <strong>Контроль</strong>
            </div>

            <p>
              Следим за качеством на каждом этапе
            </p>
          </div>

          <div class="about__step">
            <div class="about__step-title">
              <span>04</span>
              <strong>Результат</strong>
            </div>

            <p>
              Передаём готовое пространство
            </p>
          </div>

        </div>

      </div>
    </section>
  `
}
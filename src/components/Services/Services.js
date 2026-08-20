import './Services.css'

export function Services() {
  return `
    <section class="services" id="services">
      <div class="services__container">

        <div class="services__header">
          <p class="services__eyebrow">
            Наши услуги
          </p>

          <h2 class="services__title">
            Всё необходимое для
            <span>полноценного ремонта</span>
          </h2>
        </div>

        <div class="services__grid">

          <article class="service">
            <div class="service__number">01</div>
            <div class="service__content">
              <h3>Дизайн проект</h3>
              <p>
                Продумываем планировку, материалы и будущий интерьер до начала ремонта
              </p>
            </div>
          </article>

          <article class="service">
            <div class="service__number">02</div>
            <div class="service__content">
              <h3>Подготовительные работы</h3>
              <p>
                Делаем демонтаж, защищаем поверхности и подготавливаем помещение к основным работам
              </p>
            </div>
          </article>

          <article class="service">
            <div class="service__number">03</div>
            <div class="service__content">
              <h3>Сантехнические работы</h3>
              <p>
                Прокладываем трубы, устанавливаем сантехнику и подключаем необходимое оборудование
              </p>
            </div>
          </article>

          <article class="service">
            <div class="service__number">04</div>
            <div class="service__content">
              <h3>Электромонтажные работы</h3>
              <p>
                Разводим электрику, устанавливаем розетки и выключатели, подготавливаем освещение
              </p>
            </div>
          </article>

          <article class="service">
            <div class="service__number">05</div>
            <div class="service__content">
              <h3>Отделочные работы</h3>
              <p>
                Выравниваем стены и потолки, работаем с полами и выполняем основные отделочные работы
              </p>
            </div>
          </article>

          <article class="service">
            <div class="service__number">06</div>
            <div class="service__content">
              <h3>Малярные работы</h3>
              <p>
                Шпаклюем, грунтуем и окрашиваем поверхности, чтобы стены и потолки выглядели идеально
              </p>
            </div>
          </article>

          <article class="service">
            <div class="service__number">07</div>
            <div class="service__content">
              <h3>Облицовочные работы</h3>
              <p>
                Укладываем плитку, керамогранит и другие материалы на любые поверхности
              </p>
            </div>
          </article>

          <article class="service">
            <div class="service__number">08</div>
            <div class="service__content">
              <h3>Финишные работы</h3>
              <p>
                Устанавливаем чистовые элементы, вывозим строительный мусор и приводим помещение в порядок
              </p>
            </div>
          </article>

        </div>

      </div>
    </section>
  `
}
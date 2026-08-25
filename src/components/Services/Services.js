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
            <div class="service__number">1</div>
            <div class="service__content">
              <h3>Дизайн проект</h3>
              <p>
                Продумываем планировку, материалы и будущий интерьер до начала ремонта
              </p>
            </div>
          </article>

          <article class="service">
            <div class="service__number">2</div>
            <div class="service__content">
              <h3>Подготовительные работы</h3>
              <p>
                Производим демонтаж, возводим перегородки, осуществляем устройство стяжки пола
              </p>
            </div>
          </article>

          <article class="service">
            <div class="service__number">3</div>
            <div class="service__content">
              <h3>Сантехнические работы</h3>
              <p>
                Прокладываем трубы, устанавливаем сантехнику и подключаем необходимое оборудование
              </p>
            </div>
          </article>

          <article class="service">
            <div class="service__number">4</div>
            <div class="service__content">
              <h3>Электромонтажные работы</h3>
              <p>
                Производим монтаж электрического кабеля и электроточек, устанавливаем розетки и выключатели
            </div>
          </article>

          <article class="service">
            <div class="service__number">5</div>
            <div class="service__content">
              <h3>Штукатурные работы</h3>
              <p>
                Подготавливаем плоскости и поверхности, выравниваем стены и потолки
              </p>
            </div>
          </article>

          <article class="service">
            <div class="service__number">6</div>
            <div class="service__content">
              <h3>Малярные работы</h3>
              <p>
                Шпаклюем, грунтуем и окрашиваем поверхности, наносим декоративное покрытие
              </p>
            </div>
          </article>

          <article class="service">
            <div class="service__number">7</div>
            <div class="service__content">
              <h3>Облицовочные работы</h3>
              <p>
                Укладываем плитку, паркет, ламинат, панели в соответствии с дизайн-проектом
              </p>
            </div>
          </article>

          <article class="service">
            <div class="service__number">8</div>
            <div class="service__content">
              <h3>Финишные работы</h3>
              <p>
                Устанавливаем чистовые элементы, мебель, декор, и приводим помещение в порядок
              </p>
            </div>
          </article>

        </div>

      </div>
    </section>
  `
}
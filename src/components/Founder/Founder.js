import './Founder.css'

export function Founder() {
  return `
    <section class="founder" id="founder">
      <div class="founder__container">

        <div class="founder__photo">
          <img
            src="src/assets/founder.jpg"
            alt="Алексей Лазарев"
          />
        </div>

        <div class="founder__content">

          <div class="founder__top">
            <span class="founder__line"></span>

            <h2 class="founder__title">
              Основатель <span>компании</span>
            </h2>

            <div class="founder__person">
              <h3>Алексей Лазарев</h3>
              <p>Основатель и руководитель</p>
            </div>
          </div>

          <div class="founder__quote">
            <p>
              «Для меня хороший ремонт — это прежде всего порядок в
              процессе. Клиент должен понимать, что происходит на объекте,
              какие работы выполняются сейчас и каким будет следующий этап»
            </p>
          </div>

          <p class="founder__description">
            Мы заранее обсуждаем объём работ, составляем понятную смету и остаёмся
            на связи на протяжении всего ремонта
          </p>

          <div class="founder__stats">

            <div class="founder__stat">
              <strong>XX</strong>
              <span>
                лет<br>
                в строительстве
              </span>
            </div>

            <div class="founder__divider"></div>

            <div class="founder__stat founder__stat--objects">
              <strong>XXX</strong>
              <span>
                реализованных<br>
                объектов
              </span>
            </div>

            <div class="founder__divider"></div>

            <div class="founder__stat founder__stat--city">
              <strong>
                Нижний<br>
                Новгород
              </strong>

              <span>
                работаем в регионе
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
}
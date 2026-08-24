import './Contacts.css'

export function Contacts() {
  return `
    <section class="contacts" id="contacts">
      <div class="contacts__container">

        <div class="contacts__info">

          <span class="contacts__red-line"></span>

          <h2 class="contacts__title">
            Контакты
          </h2>

          <div class="contacts__details">

            <div class="contacts__item">
              <span class="contacts__label">
                Адрес
              </span>

              <p class="contacts__value">
                Казанское шоссе, 4
                <br>
                Нижний Новгород
              </p>

              <a
                href="https://yandex.ru/maps/-/CTwwmXmt"
                target="_blank"
                rel="noopener noreferrer"
                class="contacts__map-button"
              >
                Открыть в Яндекс Картах
              </a>
            </div>

            <div class="contacts__item">
              <span class="contacts__label">
                Телефон
              </span>

              <a
                href="tel:+70000000000"
                class="contacts__value contacts__link"
              >
                +7 (000) 000-00-00
              </a>
            </div>

            <div class="contacts__item">
              <span class="contacts__label">
                Почта
              </span>

              <a
                href="mailto:info@remart.ru"
                class="contacts__value contacts__link"
              >
                info@remart.ru
              </a>
            </div>

            <div class="contacts__socials">
  <a
    href="https://www.instagram.com/remart_nn/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>

  <span>·</span>

  <a
    href="https://vk.ru/remart_nn"
    target="_blank"
    rel="noopener noreferrer"
  >
    Вконтакте
  </a>
</div>

          </div>

        </div>

        <div class="contacts__map">

          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=44.077708%2C56.295695&z=17&l=map&pt=44.077708%2C56.295695,pm2rdm"
            title="РемАрт — Казанское шоссе, 4"
            frameborder="0"
            allowfullscreen
          ></iframe>

        </div>

      </div>
    </section>
  `
}
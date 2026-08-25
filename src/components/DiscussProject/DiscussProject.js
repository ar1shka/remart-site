import './DiscussProject.css'

export function DiscussProject() {
  return `
    <section class="discuss-project" id="discuss-project">
      <div class="discuss-project__container">

        <div class="discuss-project__info">

          <span class="discuss-project__line"></span>

          <h2 class="discuss-project__title">
            Обсудим ваш проект
          </h2>

          <p class="discuss-project__description">
            Расскажите, что планируете изменить. Ответим на
            вопросы, обсудим задачи и подготовим
            предварительный расчёт
          </p>

          <div class="discuss-project__phone">
            <a href="tel:+7XXXXXXXXXX">
              +7 (920) 050-23-23
            </a>

            <span>
              Ежедневно с 9:00 до 20:00
            </span>
          </div>

        </div>

        <div class="discuss-project__form-wrapper">

          <form class="discuss-project__form">

            <label class="discuss-project__field">
              <span>Ваше имя</span>

              <input
                type="text"
                name="name"
                autocomplete="name"
              />
            </label>

            <label class="discuss-project__field">
              <span>Телефон</span>

              <input
                class="discuss-project__phone-input"
                type="tel"
                name="phone"
                inputmode="numeric"
                autocomplete="tel"
                maxlength="18"
                placeholder="+7"
              />
            </label>

            <label class="discuss-project__field">
              <span>Что нужно сделать?</span>

              <input
                type="text"
                name="message"
              />
            </label>

            <button
              class="discuss-project__button"
              type="submit"
            >
              Отправить
            </button>

            <p class="discuss-project__agreement">
              Нажимая кнопку, вы соглашаетесь на обработку
              персональных данных
            </p>

          </form>

        </div>

      </div>
    </section>
  `
}

export function initDiscussProject() {
  const phoneInput = document.querySelector(
    '.discuss-project__phone-input'
  )

  const form = document.querySelector(
    '.discuss-project__form'
  )

  /*
   * Не даём браузеру отправлять форму через GET
   * и менять адрес страницы.
   */
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
    })
  }

  if (!phoneInput) return

  phoneInput.addEventListener('input', () => {
    let value = phoneInput.value.replace(/\D/g, '')

    if (value.startsWith('8')) {
      value = '7' + value.slice(1)
    }

    if (!value.startsWith('7')) {
      value = '7' + value
    }

    value = value.slice(0, 11)

    let formatted = '+7'

    if (value.length > 1) {
      formatted += ' ' + value.slice(1, 4)
    }

    if (value.length >= 5) {
      formatted += ' ' + value.slice(4, 7)
    }

    if (value.length >= 8) {
      formatted += ' ' + value.slice(7, 9)
    }

    if (value.length >= 10) {
      formatted += ' ' + value.slice(9, 11)
    }

    phoneInput.value = formatted
  })

  phoneInput.addEventListener('keydown', (event) => {
    const allowedKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab'
    ]

    if (
      allowedKeys.includes(event.key) ||
      event.ctrlKey ||
      event.metaKey
    ) {
      return
    }

    if (!/^\d$/.test(event.key)) {
      event.preventDefault()
    }
  })
}
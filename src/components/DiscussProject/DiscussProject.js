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
            <a href="tel:+79200502323">
              +7 (920) 050-23-23
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

              <small class="discuss-project__error"></small>
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

              <small class="discuss-project__error"></small>
            </label>

            <label class="discuss-project__field">
              <span>Что нужно сделать?</span>

              <input
                type="text"
                name="message"
              />

              <small class="discuss-project__error"></small>
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

            <div
              class="discuss-project__success"
              aria-live="polite"
            ></div>

            <div
              class="discuss-project__server-error"
              aria-live="polite"
            ></div>

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

  if (!form) return

  const button = form.querySelector(
    '.discuss-project__button'
  )

  const successMessage = form.querySelector(
    '.discuss-project__success'
  )

  const serverError = form.querySelector(
    '.discuss-project__server-error'
  )


  // ================================
  // ОШИБКИ ПОЛЕЙ
  // ================================

  function showError(field, message) {
    field.classList.add('has-error')

    const error = field.querySelector(
      '.discuss-project__error'
    )

    if (error) {
      error.textContent = message
    }
  }


  function clearError(field) {
    field.classList.remove('has-error')

    const error = field.querySelector(
      '.discuss-project__error'
    )

    if (error) {
      error.textContent = ''
    }
  }


  // ================================
  // ВАЛИДАЦИЯ
  // ================================

  function validateForm() {
    let isValid = true

    const nameInput = form.querySelector(
      'input[name="name"]'
    )

    const phoneInput = form.querySelector(
      'input[name="phone"]'
    )

    const messageInput = form.querySelector(
      'input[name="message"]'
    )

    const nameField = nameInput.closest(
      '.discuss-project__field'
    )

    const phoneField = phoneInput.closest(
      '.discuss-project__field'
    )

    const messageField = messageInput.closest(
      '.discuss-project__field'
    )


    // Имя

    const name = nameInput.value.trim()

    clearError(nameField)

    if (!name) {
      showError(
        nameField,
        'Введите ваше имя'
      )

      isValid = false

    } else if (name.length < 2) {
      showError(
        nameField,
        'Введите имя корректно'
      )

      isValid = false
    }


    // Телефон

    const phone = phoneInput.value.trim()

    clearError(phoneField)

    const digits = phone.replace(/\D/g, '')

    if (!phone) {
      showError(
        phoneField,
        'Введите номер телефона'
      )

      isValid = false

    } else if (digits.length !== 11) {
      showError(
        phoneField,
        'Введите полный номер телефона'
      )

      isValid = false
    }


    // Сообщение необязательное

    clearError(messageField)

    return isValid
  }


  // ================================
  // ОТПРАВКА ФОРМЫ
  // ================================

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    // Убираем старые сообщения

    successMessage.textContent = ''
    successMessage.classList.remove('visible')

    serverError.textContent = ''
    serverError.classList.remove('visible')


    // Проверяем форму

    if (!validateForm()) {
      return
    }


    const formData = new FormData(form)

    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      message: formData.get('message')
    }


    console.log('Отправляем данные:', data)


    // Блокируем кнопку

    button.disabled = true
    button.textContent = 'Отправляем...'
    button.classList.add('is-loading')


    try {

      const response = await fetch(
        'http://localhost:3000/api/applications',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(data)
        }
      )


      const result = await response.json()

      console.log('Ответ сервера:', result)


      if (!response.ok) {
        throw new Error(
          result.message ||
          'Ошибка отправки формы'
        )
      }


      // Успешная отправка

      form.reset()

      button.textContent = 'Отправлено'
      button.classList.remove('is-loading')
      button.classList.add('is-success')


      successMessage.textContent =
        '✓ Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.'

      successMessage.classList.add('visible')


      // Через несколько секунд возвращаем кнопку

      setTimeout(() => {

        button.disabled = false
        button.textContent = 'Отправить'
        button.classList.remove('is-success')

      }, 5000)


    } catch (error) {

      console.error('Ошибка:', error)


      button.disabled = false
      button.textContent = 'Отправить'
      button.classList.remove('is-loading')


      serverError.textContent =
        'Не удалось отправить заявку. Попробуйте ещё раз.'

      serverError.classList.add('visible')
    }
  })


  // ================================
  // УБИРАЕМ ОШИБКУ ПРИ ВВОДЕ
  // ================================

  form.querySelectorAll(
    '.discuss-project__field input'
  ).forEach((input) => {

    input.addEventListener('input', () => {

      const field = input.closest(
        '.discuss-project__field'
      )

      clearError(field)

      serverError.textContent = ''
      serverError.classList.remove('visible')
    })
  })


  // ================================
  // МАСКА ТЕЛЕФОНА
  // ================================

  if (phoneInput) {

    phoneInput.addEventListener('input', () => {

      let value = phoneInput.value.replace(
        /\D/g,
        ''
      )


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
}
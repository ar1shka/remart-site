const form = document.querySelector(
  '.login__form'
)

const errorElement = document.querySelector(
  '#login-error'
)

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  errorElement.textContent = ''

  const formData = new FormData(form)

  const login = formData.get('login')
  const password = formData.get('password')

  try {
    const response = await fetch(
      'http://127.0.0.1:3000/api/login',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        credentials: 'include',

        body: JSON.stringify({
          login,
          password
        })
      }
    )

    const result = await response.json()

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || 'Ошибка входа'
      )
    }

    window.location.href = '/admin.html'

  } catch (error) {
    console.error(
      'Ошибка авторизации:',
      error
    )

    errorElement.textContent =
      error.message ||
      'Не удалось выполнить вход'
  }
})
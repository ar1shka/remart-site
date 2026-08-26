const applicationsList = document.querySelector(
  '#applications-list'
)

const applicationsCount = document.querySelector(
  '#applications-count'
)

const newApplicationsCount =
  document.querySelector(
    '#new-applications-count'
  )

const applicationsEmpty = document.querySelector(
  '#applications-empty'
)

const applicationsResult = document.querySelector(
  '#applications-result'
)

const refreshButton = document.querySelector(
  '#refresh-applications'
)

const logoutButton = document.querySelector(
  '#logout-button'
)

const searchInput = document.querySelector(
  '#applications-search'
)

const statusFilter = document.querySelector(
  '#status-filter'
)

const dateSort = document.querySelector(
  '#date-sort'
)

const resetFilters = document.querySelector(
  '#reset-filters'
)


let applications = []


// ======================================
// ПРОВЕРКА АВТОРИЗАЦИИ
// ======================================

async function checkAuth() {

  try {

    const response = await fetch(
      'http://127.0.0.1:3000/api/auth',
      {
        credentials: 'include'
      }
    )

    if (!response.ok) {
      window.location.href = '/login.html'

      return false
    }

    const result = await response.json()

    if (!result.authenticated) {
      window.location.href = '/login.html'

      return false
    }

    return true

  } catch (error) {

    console.error(
      'Ошибка проверки авторизации:',
      error
    )

    window.location.href = '/login.html'

    return false
  }
}


// ======================================
// ФОРМАТИРОВАНИЕ ДАТЫ
// ======================================

function formatDate(dateString) {

  const date = new Date(
    dateString.replace(' ', 'T') + 'Z'
  )

  return new Intl.DateTimeFormat(
    'ru-RU',
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
  ).format(date)
}


// ======================================
// СОЗДАНИЕ СТРОКИ
// ======================================

function createApplicationRow(application) {

  const row = document.createElement('tr')

  if (application.status === 'Новая') {
    row.classList.add('is-new')
  }


  // Дата

  const dateCell =
    document.createElement('td')

  dateCell.textContent =
    formatDate(application.created_at)


  // Имя

  const nameCell =
    document.createElement('td')

  nameCell.textContent =
    application.name || '—'


  // Телефон

  const phoneCell =
    document.createElement('td')

  const phoneLink =
    document.createElement('a')

  phoneLink.href =
    `tel:${application.phone}`

  phoneLink.textContent =
    application.phone || '—'

  phoneCell.appendChild(phoneLink)


  // Сообщение

  const messageCell =
    document.createElement('td')

  messageCell.textContent =
    application.message || '—'


  // Статус

  const statusCell =
    document.createElement('td')

  const statusSelect =
    document.createElement('select')

  statusSelect.className =
    'status-select'


  const statuses = [
    'Новая',
    'В работе',
    'Завершена'
  ]


  statuses.forEach((status) => {

    const option =
      document.createElement('option')

    option.value = status

    option.textContent = status

    option.selected =
      application.status === status

    statusSelect.appendChild(option)
  })


  statusSelect.addEventListener(
    'change',
    async () => {

      const newStatus =
        statusSelect.value

      try {

        const response = await fetch(
          `http://127.0.0.1:3000/api/applications/${application.id}`,
          {
            method: 'PATCH',

            headers: {
              'Content-Type':
                'application/json'
            },

            credentials: 'include',

            body: JSON.stringify({
              status: newStatus
            })
          }
        )


        if (response.status === 401) {

          window.location.href =
            '/login.html'

          return
        }


        const result =
          await response.json()


        if (
          !response.ok ||
          !result.success
        ) {

          throw new Error(
            result.message ||
            'Не удалось изменить статус'
          )
        }


        application.status =
          newStatus


        if (newStatus === 'Новая') {

          row.classList.add(
            'is-new'
          )

        } else {

          row.classList.remove(
            'is-new'
          )
        }


        updateStatistics()

        console.log(
          `Статус заявки №${application.id} изменён на "${newStatus}"`
        )

      } catch (error) {

        console.error(
          'Ошибка изменения статуса:',
          error
        )

        alert(
          'Не удалось изменить статус заявки'
        )

        statusSelect.value =
          application.status
      }
    }
  )


  statusCell.appendChild(
    statusSelect
  )


  row.appendChild(dateCell)
  row.appendChild(nameCell)
  row.appendChild(phoneCell)
  row.appendChild(messageCell)
  row.appendChild(statusCell)


  return row
}


// ======================================
// СТАТИСТИКА
// ======================================

function updateStatistics() {

  const newCount =
    applications.filter(
      (application) =>
        application.status === 'Новая'
    ).length


  applicationsCount.textContent =
    applications.length

  newApplicationsCount.textContent =
    newCount
}


// ======================================
// ОТОБРАЖЕНИЕ ЗАЯВОК
// ======================================

function renderApplications() {

  const searchValue =
    searchInput.value
      .trim()
      .toLowerCase()


  const selectedStatus =
    statusFilter.value


  const selectedSort =
    dateSort.value


  let filteredApplications =
    [...applications]


  // ПОИСК

  if (searchValue) {

    filteredApplications =
      filteredApplications.filter(
        (application) => {

          const name =
            String(
              application.name || ''
            ).toLowerCase()

          const phone =
            String(
              application.phone || ''
            ).toLowerCase()

          const message =
            String(
              application.message || ''
            ).toLowerCase()


          return (
            name.includes(searchValue) ||
            phone.includes(searchValue) ||
            message.includes(searchValue)
          )
        }
      )
  }


  // ФИЛЬТР ПО СТАТУСУ

  if (selectedStatus !== 'all') {

    filteredApplications =
      filteredApplications.filter(
        (application) =>
          application.status ===
          selectedStatus
      )
  }


  // СОРТИРОВКА

  filteredApplications.sort(
    (a, b) => {

      const dateA =
        new Date(
          a.created_at.replace(
            ' ',
            'T'
          ) + 'Z'
        )

      const dateB =
        new Date(
          b.created_at.replace(
            ' ',
            'T'
          ) + 'Z'
        )


      if (
        selectedSort === 'oldest'
      ) {

        return dateA - dateB

      }

      return dateB - dateA
    }
  )


  // ОЧИЩАЕМ ТАБЛИЦУ

  applicationsList.innerHTML = ''


  // НЕТ РЕЗУЛЬТАТОВ

  if (
    filteredApplications.length === 0
  ) {

    applicationsEmpty.textContent =
      applications.length === 0
        ? 'Заявок пока нет'
        : 'По заданным условиям заявки не найдены'


    applicationsEmpty.style.display =
      'block'


    applicationsResult.textContent =
      'Показано 0 заявок'


    return
  }


  applicationsEmpty.style.display =
    'none'


  // СОЗДАЁМ СТРОКИ

  filteredApplications.forEach(
    (application) => {

      const row =
        createApplicationRow(
          application
        )

      applicationsList.appendChild(row)
    }
  )


  applicationsResult.textContent =
    `Показано ${filteredApplications.length} из ${applications.length} заявок`
}


// ======================================
// ЗАГРУЗКА ЗАЯВОК
// ======================================

async function loadApplications() {

  try {

    const response = await fetch(
      'http://127.0.0.1:3000/api/applications',
      {
        credentials: 'include'
      }
    )


    if (response.status === 401) {

      window.location.href =
        '/login.html'

      return
    }


    const result =
      await response.json()


    if (
      !response.ok ||
      !result.success
    ) {

      throw new Error(
        result.message ||
        'Не удалось загрузить заявки'
      )
    }


    applications =
      result.applications


    updateStatistics()

    renderApplications()

  } catch (error) {

    console.error(
      'Ошибка загрузки заявок:',
      error
    )


    applicationsEmpty.textContent =
      'Не удалось загрузить заявки'


    applicationsEmpty.style.display =
      'block'
  }
}


// ======================================
// ПОИСК
// ======================================

searchInput.addEventListener(
  'input',
  () => {
    renderApplications()
  }
)


// ======================================
// ФИЛЬТР СТАТУСА
// ======================================

statusFilter.addEventListener(
  'change',
  () => {
    renderApplications()
  }
)


// ======================================
// СОРТИРОВКА
// ======================================

dateSort.addEventListener(
  'change',
  () => {
    renderApplications()
  }
)


// ======================================
// СБРОС ФИЛЬТРОВ
// ======================================

resetFilters.addEventListener(
  'click',
  () => {

    searchInput.value = ''

    statusFilter.value =
      'all'

    dateSort.value =
      'newest'

    renderApplications()
  }
)


// ======================================
// ОБНОВИТЬ
// ======================================

refreshButton.addEventListener(
  'click',
  () => {
    loadApplications()
  }
)


// ======================================
// ВЫХОД
// ======================================

logoutButton.addEventListener(
  'click',
  async () => {

    try {

      const response = await fetch(
        'http://127.0.0.1:3000/api/logout',
        {
          method: 'POST',

          credentials: 'include'
        }
      )


      const result =
        await response.json()


      if (
        !response.ok ||
        !result.success
      ) {

        throw new Error(
          result.message ||
          'Не удалось выйти'
        )
      }


      window.location.href =
        '/login.html'

    } catch (error) {

      console.error(
        'Ошибка выхода:',
        error
      )


      alert(
        'Не удалось выйти из аккаунта'
      )
    }
  }
)


// ======================================
// ЗАПУСК
// ======================================

async function initAdmin() {

  const authenticated =
    await checkAuth()


  if (!authenticated) {
    return
  }


  await loadApplications()
}


initAdmin()
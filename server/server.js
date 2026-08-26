import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import session from 'express-session'
import db from './database.js'

const app = express()

const PORT = 3000

// Данные администратора
const ADMIN_LOGIN = process.env.ADMIN_LOGIN
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD


// ================================
// CORS
// ================================

app.use(
  cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true
  })
)


// Ограничиваем размер входящего JSON
app.use(
  express.json({
    limit: '10kb'
  })
)


// ================================
// СЕССИИ АДМИНИСТРАТОРА
// ================================

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 8
    }
  })
)


// ================================
// ПРОВЕРКА СЕРВЕРА
// ================================

app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Сервер RemArt работает'
  })
})


// ================================
// ВХОД АДМИНИСТРАТОРА
// ================================

app.post('/api/login', (req, res) => {

  const { login, password } = req.body

  if (
    login !== ADMIN_LOGIN ||
    password !== ADMIN_PASSWORD
  ) {
    return res.status(401).json({
      success: false,
      message: 'Неверный логин или пароль'
    })
  }

  req.session.isAdmin = true

  res.json({
    success: true,
    message: 'Вход выполнен'
  })
})


// ================================
// ПРОВЕРКА АВТОРИЗАЦИИ
// ================================

app.get('/api/auth', (req, res) => {

  if (req.session.isAdmin) {
    return res.json({
      success: true,
      authenticated: true
    })
  }

  res.status(401).json({
    success: false,
    authenticated: false
  })
})


// ================================
// ВЫХОД
// ================================

app.post('/api/logout', (req, res) => {

  req.session.destroy(() => {

    res.json({
      success: true,
      message: 'Вы вышли из системы'
    })

  })
})


// ================================
// ПРОВЕРКА ПРАВ АДМИНИСТРАТОРА
// ================================

function requireAdmin(req, res, next) {

  if (!req.session.isAdmin) {

    return res.status(401).json({
      success: false,
      message: 'Требуется авторизация'
    })

  }

  next()
}


// ================================
// ПОЛУЧИТЬ ЗАЯВКИ
// ================================

app.get(
  '/api/applications',
  requireAdmin,
  (req, res) => {

    try {

      const applications = db
        .prepare(`
          SELECT
            id,
            name,
            phone,
            message,
            status,
            created_at
          FROM applications
          ORDER BY id DESC
        `)
        .all()

      res.json({
        success: true,
        applications
      })

    } catch (error) {

      console.error(
        'Ошибка получения заявок:',
        error
      )

      res.status(500).json({
        success: false,
        message: 'Не удалось получить заявки'
      })

    }

  }
)


// ================================
// СОЗДАТЬ ЗАЯВКУ
// ================================

app.post('/api/applications', (req, res) => {

  try {

    const {
      name,
      phone,
      message
    } = req.body


    // ================================
    // ПРОВЕРКА ИМЕНИ
    // ================================

    if (typeof name !== 'string') {

      return res.status(400).json({
        success: false,
        message: 'Введите имя'
      })

    }

    const cleanName = name.trim()


    if (!cleanName) {

      return res.status(400).json({
        success: false,
        message: 'Введите имя'
      })

    }


    if (cleanName.length < 2) {

      return res.status(400).json({
        success: false,
        message: 'Имя должно содержать минимум 2 символа'
      })

    }


    if (cleanName.length > 100) {

      return res.status(400).json({
        success: false,
        message: 'Имя слишком длинное'
      })

    }


    // ================================
    // ПРОВЕРКА ТЕЛЕФОНА
    // ================================

    if (typeof phone !== 'string') {

      return res.status(400).json({
        success: false,
        message: 'Введите номер телефона'
      })

    }

    const cleanPhone = phone.trim()

    const phoneDigits =
      cleanPhone.replace(/\D/g, '')


    if (phoneDigits.length !== 11) {

      return res.status(400).json({
        success: false,
        message: 'Введите полный номер телефона'
      })

    }


    if (!phoneDigits.startsWith('7')) {

      return res.status(400).json({
        success: false,
        message: 'Неверный номер телефона'
      })

    }


    // ================================
    // ПРОВЕРКА СООБЩЕНИЯ
    // ================================

    let cleanMessage = ''

    if (
      message !== undefined &&
      message !== null
    ) {

      if (typeof message !== 'string') {

        return res.status(400).json({
          success: false,
          message: 'Некорректное описание заявки'
        })

      }


      cleanMessage = message.trim()


      if (cleanMessage.length > 1000) {

        return res.status(400).json({
          success: false,
          message: 'Описание заявки слишком длинное'
        })

      }

    }


    // ================================
    // СОХРАНЕНИЕ В БД
    // ================================

    console.log('Новая заявка:')

    console.log({
      name: cleanName,
      phone: cleanPhone,
      message: cleanMessage
    })


    const statement = db.prepare(`
      INSERT INTO applications (
        name,
        phone,
        message
      )
      VALUES (?, ?, ?)
    `)


    const result = statement.run(
      cleanName,
      cleanPhone,
      cleanMessage
    )


    res.json({
      success: true,
      message: 'Заявка успешно получена',
      id: result.lastInsertRowid
    })


  } catch (error) {

    console.error(
      'Ошибка сохранения заявки:',
      error
    )


    res.status(500).json({
      success: false,
      message: 'Не удалось сохранить заявку'
    })

  }

})


// ================================
// ИЗМЕНИТЬ СТАТУС
// ================================

app.patch(
  '/api/applications/:id',
  requireAdmin,
  (req, res) => {

    try {

      const { id } = req.params
      const { status } = req.body

      const allowedStatuses = [
        'Новая',
        'В работе',
        'Завершена'
      ]


      if (!allowedStatuses.includes(status)) {

        return res.status(400).json({
          success: false,
          message: 'Недопустимый статус'
        })

      }


      const statement = db.prepare(`
        UPDATE applications
        SET status = ?
        WHERE id = ?
      `)


      const result = statement.run(
        status,
        id
      )


      if (result.changes === 0) {

        return res.status(404).json({
          success: false,
          message: 'Заявка не найдена'
        })

      }


      res.json({
        success: true,
        message: 'Статус успешно изменён'
      })


    } catch (error) {

      console.error(
        'Ошибка изменения статуса:',
        error
      )


      res.status(500).json({
        success: false,
        message: 'Не удалось изменить статус'
      })

    }

  }
)


// ================================
// ОБРАБОТКА ОШИБОК РАЗМЕРА JSON
// ================================

app.use(
  (error, req, res, next) => {

    if (error.type === 'entity.too.large') {

      return res.status(413).json({
        success: false,
        message: 'Запрос слишком большой'
      })

    }

    next(error)
  }
)


// ================================
// ЗАПУСК СЕРВЕРА
// ================================

app.listen(PORT, () => {

  console.log(
    `Server started: http://localhost:${PORT}`
  )

})
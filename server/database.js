import Database from 'better-sqlite3'

const db = new Database('server/remart.db')

db.exec(`
  CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'Новая',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`)

const columns = db
  .prepare('PRAGMA table_info(applications)')
  .all()

const hasStatus = columns.some(
  column => column.name === 'status'
)

if (!hasStatus) {
  db.exec(`
    ALTER TABLE applications
    ADD COLUMN status TEXT NOT NULL DEFAULT 'Новая'
  `)
}

export default db
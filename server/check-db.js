import db from './database.js'

const applications = db
  .prepare('SELECT * FROM applications')
  .all()

console.log(applications)

db.close()
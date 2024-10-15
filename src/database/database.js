import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Databse {
  //deixa privado o database apenas pode ser usado dentro dessa classe
  #database = {}

  constructor() {
    fs.readFile(DATABASE_PATH, "utf8")
      .then((data) => {
        this.#database = JSON.parse(data)
      })
      .catch(() => {
        this.#persist()
      })
  }

  #persist() {
    // JSON.stringify = converte de json pra texto
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist()
  }

  select(table, filters) {
    let data = this.#database[table] ?? []

    if (filters) {
      data = data.filters((row) => {
        return Object.entries(filters).some(([KeyboardEvent, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase())
        })

        return row
      })
    }

    return data
  }
}

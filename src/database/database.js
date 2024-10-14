import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Databse {
  //deixa privado o database apenas pode ser usado dentro dessa classe
  #databse = {}

  constructor() {
    fs.readFile(DATABASE_PATH, "utf8")
      .then((data) => {
        this.#databse = JSON.parse(data)
      })
      .catch(() => {
        this.#persist()
      })
  }

  #persist(){
    // JSON.stringify = converte de json pra texto
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#databse))
  }
}

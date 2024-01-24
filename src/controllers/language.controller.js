import { getConnection } from "../database/database"

const getLanguages = async (req, res) => {
  try {
    const connection = await getConnection()
    const result = await connection.query(
      "select id,name,programmers from language"
    )
    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
}

const getLanguage = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query(
      "select id,name,programmers from language where id = ?",
      id
    )
    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
}

const addLanguage = async (req, res) => {
  try {
    const { name, programmers } = req.body
    const language = {
      name,
      programmers,
    }
    if (name === undefined || programmers === undefined) {
      res.status(400).json({
        message: "Ocurrio un problema, por favor complete toods los campos",
      })
    }
    const connection = await getConnection()
    const result = await connection.query(
      "INSERT INTO language SET ?",
      language
    )
    res.json({ message: "Lenguaje añadido" })
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
}

const deleteLanguage = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query(
      "delete from language where id = ?",
      id
    )
    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
}

const updateLanguage = async (req, res) => {
  try {
    const { id } = req.params
    const { name, programmers } = req.body
    if (id === undefined || name === undefined || programmers === undefined) {
      res.status(400).json({
        message: "Ocurrio un problema, por favor complete toods los campos",
      })
    }
    const language = {
      name,
      programmers,
    }
    const connection = await getConnection()
    const result = await connection.query("UPDATE language SET ? where id= ?", [
      language,
      id,
    ])
    res.json({
      message: "Se actualizo correctamente.",
    })
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
}

export const methods = {
  getLanguages,
  getLanguage,
  addLanguage,
  deleteLanguage,
  updateLanguage,
}

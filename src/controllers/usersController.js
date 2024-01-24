import { getConnection } from "../database/database"

const bcrypt = require("bcrypt")
const fs = require("node:fs")
const table = "usuarios_sistema"

const getUsers = async (req, res) => {
  try {
    const connection = await getConnection()
    const result = await connection.query("select * from " + table)
    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
}

const addUser = async (req, res) => {
  try {
    const user = req.body
    const fechaCreacion = new Date()
    const connection = await getConnection()
    const hashedPassword = await bcrypt.hash("1234", 10) // Hash de la contraseña
    const urlImage = "uploads/" + req.file.originalname
    const result = await connection.query(
      `INSERT INTO ${table}
    (firstName, lastName, email, password, is_active, is_admin, fecha_creacion, id_barbero, url_image)
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstName,
        user.lastName,
        user.email,
        hashedPassword,
        user.is_active,
        user.is_admin,
        fechaCreacion,
        1,
        urlImage,
      ]
    )
    if (result.affectedRows > 0) {
      saveImage(req.file)
      res.json({ rta: 1, message: "Usuario agregado exitosamente." })
    } else {
      res.json({ rta: -1, message: "Ocurrio un errorr." })
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error." + err })
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const url_image = "uploads/" + req.file.originalname
    console.log("url", url_image)

    const { firstName, lastName, email, is_active, is_admin } = req.body
    if (
      id === undefined ||
      firstName === undefined ||
      lastName === undefined ||
      email === undefined
    ) {
      res.json({
        rta: -1,
        message: "Ocurrio un problema, por favor complete todos los campos",
      })
    }
    const user = {
      firstName,
      lastName,
      email,
      is_active,
      is_admin,
      url_image,
    }
    const connection = await getConnection()
    const result = await connection.query(
      `UPDATE ${table}  SET ? where id= ?`,
      [user, id]
    )
    console.log("result", result)
    if (result.affectedRows > 0) {
      saveImage(req.file)
      res.json({ rta: 1, message: "Se actualizo correctamente." })
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." })
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error, catch." })
    res.send(err.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query(
      `delete from ${table}  where id = ?`,
      id
    )
    console.log("result", result)
    if (result.affectedRows > 0) {
      res.json({
        rta: 1,
        message: "Usuario eliminado correctamente.",
      })
    } else {
      res.json({
        rta: -1,
        message: "Ocurrio un error.",
      })
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error." })
    res.send(err.message)
  }
}

function saveImage(file) {
  const newPath = `./uploads/${file.originalname}`
  fs.renameSync(file.path, newPath)
  return newPath
}

export const usersController = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
}

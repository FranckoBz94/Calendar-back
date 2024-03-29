import { getConnection } from "../database/database"
const fs = require("node:fs")
const table = "barberos"

const getBarbers = async (req, res) => {
  try {
    const connection = await getConnection()
    const result = await connection.query("select * from " + table)
    res.json(result)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
}

const addBarber = async (req, res) => {
  try {
    const barber = req.body
    const fechaCreacion = new Date()
    const connection = await getConnection()
    const urlImage = "uploads/imageBarbers/" + req.file.originalname
    const result = await connection.query(
      `INSERT INTO ${table}
    (firstName, lastName, email, telefono, imagen, is_active, is_admin, fecha_creacion)
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        barber.firstName,
        barber.lastName,
        barber.email,
        barber.telefono,
        urlImage,
        barber.is_active,
        barber.is_admin,
        fechaCreacion,
      ]
    )
    console.log(result)
    if (result.affectedRows > 0) {
      saveImage(req.file)
      res.json({ rta: 1, message: "Barbero agregado exitosamente." })
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." })
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error." + err })
    res.send(err.message)
  }
}

const updateBarber = async (req, res) => {
  try {
    const { id } = req.params
    const imagen = "uploads/imageBarbers/" + req.file.originalname
    const {
      firstName,
      lastName,
      email,
      telefono,
      is_active,
      is_admin,
    } = req.body
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
    const barber = {
      firstName,
      lastName,
      email,
      telefono,
      imagen,
      is_active,
      is_admin,
    }
    const connection = await getConnection()
    const result = await connection.query(
      `UPDATE ${table}  SET ? where id= ?`,
      [barber, id]
    )
    console.log("result", result.affectedRows)
    if (result.affectedRows > 0) {
      saveImage(req.file)
      res.json({ rta: 1, message: "Barbero actualizado correctamente." })
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." })
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error." })
    res.send(err.message)
  }
}

const deleteBarber = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query(
      `delete from ${table}  where id = ?`,
      id
    )
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
  const newPath = `./uploads/imageBarbers/${file.originalname}`
  fs.renameSync(file.path, newPath)
  return newPath
}


export const barbersController = {
  getBarbers,
  addBarber,
  updateBarber,
  deleteBarber,
}

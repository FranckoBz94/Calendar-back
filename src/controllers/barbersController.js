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
    const urlImage = req.file ? "uploads/imageBarbers/" + req.file.originalname : req.body.imageProfile
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
      if (req.file) {
        saveImage(req.file)
      }
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
    let imagen = ""
    if (req.file) {
      imagen = "uploads/imageBarbers/" + req.file.originalname
    } else {
      imagen = req.body.imageProfile;
    }
    const {
      firstName,
      lastName,
      email,
      telefono,
      is_active,
      is_admin,
    } = req.body
    const isActiveInt = is_active === 'true' ? 1 : 0;
    const isAdminInt = is_admin === 'true' ? 1 : 0;
    const barber = {
      firstName,
      lastName,
      email,
      telefono,
      ...(req.file && { imagen }),
      is_active: isActiveInt,
      is_admin: isAdminInt,
    }
    console.log("barber", barber)
    const connection = await getConnection()
    const result = await connection.query(
      `UPDATE ${table}  SET ? where id= ?`,
      [barber, id]
    )
    if (result.affectedRows > 0) {
      if (req.file) {
        saveImage(req.file);
      } res.json({ rta: 1, message: "Barbero actualizado correctamente." })
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." })
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error. catch" + err })
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

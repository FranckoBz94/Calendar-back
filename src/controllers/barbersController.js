import { getConnection } from "../database/database"
const fs = require("node:fs")
const table = "barberos"

const getBarbers = async (req, res) => {
  try {
    const connection = await getConnection()
    const result = await connection.query("SELECT b.*,u.firstName as nameBarber, u.lastName as lastNameBarber, u.email as emailUser FROM "+table+" as b LEFT JOIN usuarios_sistema as u ON b.id_user = u.id")                        
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
    const urlImage =req.file ? "uploads/imageBarbers/" + req.file.originalname :"uploads/imageBarbers/profile.png"
    const isActiveInt = barber.is_active === 'true' ? 1 : 0;
    const isAdminInt = barber.is_admin === 'true' ? 1 : 0;
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
        isActiveInt,
        isAdminInt,
        fechaCreacion,
      ]
    )
    console.log(result)
    if (result.affectedRows > 0) {
      const insertedId = result.insertId; // Obtener el ID insertado
      if (req.file) {
        saveImage(req.file)
      }
      res.json({ rta: 1, message: "Barbero agregado exitosamente.", barberId: insertedId  })
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
      id_user,
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
      id_user
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
      } 
      res.json({ rta: 1, message: "Barbero actualizado correctamente." })
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

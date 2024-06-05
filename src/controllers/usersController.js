import { getConnection } from "../database/database"

const bcrypt = require("bcrypt")
const fs = require("node:fs")
const table = "usuarios_sistema"
const jwt = require("jsonwebtoken")

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

const getUserLogged = async (req, res) => {
  try {
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query("select * from " + table + " where id=" + id)
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
    const urlImage = req.file ? "uploads/" + req.file.originalname : "uploads/profile.png"
    const isBarberInt = user.is_barber === 'true' ? 1 : 0;
    const isAdminInt = user.is_admin === 'true' ? 1 : 0;
    const result = await connection.query(
      `INSERT INTO ${table}
    (firstName, lastName, email, password, is_barber, is_admin, fecha_creacion, id_barbero, url_image)
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstName,
        user.lastName,
        user.email,
        hashedPassword,
        isBarberInt,
        isAdminInt,
        fechaCreacion,
        user.id_barbero,
        urlImage,
      ]
    )
    console.log(result)
    if (result.affectedRows > 0) {
      if (req.file) {
        saveImage(req.file)
      }
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
    let url_image = ""
    if (req.file) {
      url_image = "uploads/imageBarbers/" + req.file.originalname
    } else {
      url_image = req.body.imageProfile;
    }
    const { firstName, lastName, email, is_barber, is_admin } = req.body
    const isBarberInt = is_barber === 'true' ? 1 : 0;
    const isAdminInt = is_admin === 'true' ? 1 : 0;
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
      is_barber: isBarberInt,
      is_admin: isAdminInt,
      ...(req.file && { url_image }),
    }
    const connection = await getConnection()
    const result = await connection.query(
      `UPDATE ${table}  SET ? where id= ?`,
      [user, id]
    )
    console.log("result", result)
    if (result.affectedRows > 0) {
      if (req.file) {
        saveImage(req.file);
      }
      res.json({ rta: 1, message: "Se actualizo correctamente." })
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." })
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error, catch." + err })
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

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const connection = await getConnection()
    const result = await connection.query(`select * from ${table} where email='${email}'`)
    console.log("result", `select * from ${table} where email='${email}'`)
    if (result.length > 0) {
      const hashedPasswordFromDB = result[0].password;
      console.log("hashedPasswordFromDB", hashedPasswordFromDB)
      console.log("password", password)
      const isPasswordCorrect = await bcrypt.compare(password, hashedPasswordFromDB);
      if (isPasswordCorrect) {
        const { firstName } = result[0]
        const token = jwt.sign({ firstName }, "Stack", {
          expiresIn: "1d"
        })
        res.json({ rta: 1, message: result[0], token })
      } else {
        res.json({ rta: -1, message: "Usuario y/o contraseña incorrecta." });
      }
    } else {
      res.json({ rta: -1, message: "Usuario y/o contraseña incorrectaa." })
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error." + err })
  }
}

export const usersController = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  login,
  getUserLogged,
}

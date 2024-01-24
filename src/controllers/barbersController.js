import { getConnection } from "../database/database"

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
    console.log(req)
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
        barber.imagen,
        barber.is_active,
        barber.is_admin,
        fechaCreacion,
      ]
    )
    if (result.affectedRows > 0) {
      res.json({ rta: 1, message: "Barbero agregado exitosamente." })
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." })
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error." })
    res.send(err.message)
  }
}

const updateBarber = async (req, res) => {
  try {
    const { id } = req.params
    const {
      firstName,
      lastName,
      email,
      telefono,
      imagen,
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
    const user = {
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
      [user, id]
    )
    console.log("result", result.affectedRows)
    if (result.affectedRows > 0) {
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

export const barbersController = {
  getBarbers,
  addBarber,
  updateBarber,
  deleteBarber,
}

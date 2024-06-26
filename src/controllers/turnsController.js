import moment from "moment/moment"
import { getConnection } from "../database/database"

const table = "turnos"

const getTurns = async (req, res) => {
  try {
    const { id: idBarber } = req.params
    const connection = await getConnection()
    const result = await connection.query(
      "select t.*, c.firstName AS nameClient,c.lastName AS lastNameClient,s.event_color AS colorEvent, s.name_service as nameService, s.minutes_service as minutes from " +
      table +
      " t JOIN clientes c ON t.cliente_id = c.id LEFT JOIN servicios s ON t.service_id = s.id where t.barber_id = " +
      idBarber.toString()
    )
    res.json(result)
  } catch (err) {
    res.status(500)
    res.json({ rta: -1, message: "Ocurrio un error." })
  }
}

const addTurn = async (req, res) => {
  try {
    const turn = req.body
    const fechaCreacion = new Date()
    const connection = await getConnection()
    const result = await connection.query(
      `INSERT INTO ${table}
    (fecha_reserva, fecha_reserva_creada, start_date, end_date, cliente_id, barber_id, service_id,price_service)
    VALUES
    (?, ?, ?, ?, ?, ?, ?,?)`,
      [
        turn.dateBooking,
        fechaCreacion,
        new Date(turn.start),
        new Date(turn.end),
        turn.idClient,
        turn.idBarber,
        turn.idService,
        turn.price
      ]
    )
    if (result.affectedRows > 0) {
      res.json({ rta: 1, message: "Turno registrado exitosamente." })
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." })
    }
  } catch (err) {
    console.error(err)
    res.json({ rta: -1, message: "Ocurrio un errorrrr." })
  }
}

const updateTurn = async (req, res) => {
  try {
    const { id } = req.params
    const { dateBooking, start, end, idClient, idService, idBarber } = req.body
    if (
      dateBooking === undefined ||
      start === undefined ||
      end === undefined ||
      idClient === undefined ||
      idService === undefined ||
      idBarber === undefined
    ) {
      res.json({
        rta: -1,
        message: "Ocurrio un problema, por favor complete todos los campos",
      })
    }
    const turn = {
      fecha_reserva: dateBooking,
      start_date: new Date(start),
      end_date: new Date(end),
      cliente_id: idClient,
      service_id: idService,
      barber_id: idBarber,
    }
    const connection = await getConnection()
    const result = await connection.query(
      `UPDATE ${table}  SET ? where id= ?`,
      [turn, id]
    )
    if (result.affectedRows > 0) {
      res.json({ rta: 1, message: "Se actualizo correctamente." })
    } else {
      res.json({ rta: -1, message: "OOcurrio un error." })
    }
  } catch (err) {
    res.json({ rta: -1, message: "Odddcurrio un error." })
    res.send(err.message)
  }
}

const deleteTurn = async (req, res) => {
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
        message: "Turno eliminado correctamente.",
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

const availableNextTurn = async (req, res) => {
  try {
    const { dateBooking, start_date, idBarber, endTimeCalendar } = req.body
    const connection = await getConnection()
    const result = await connection.query(
      `SELECT * from ${table} WHERE start_date>"${start_date}" and barber_id=${idBarber} and DATE_FORMAT(fecha_reserva, '%Y-%m-%d')="${dateBooking}" ORDER BY start_date ASC LIMIT 1`
    )
    res.json({ rta: 1, message: result })
  } catch (err) {
    res.status(500)
    res.json({ rta: -1, message: "Ocurrio un error." })
  }
}

const availableHoursOnSave = async (req, res) => {
  try {
    const {  start_date, end_date, idBarber } = req.body
    const connection = await getConnection()
    const result = await connection.query(
      `SELECT * from ${table} WHERE (start_date<"${end_date}" and end_date>"${start_date}") and barber_id=${idBarber}  ORDER BY start_date ASC LIMIT 1`
    )
    res.json({ rta: 1, message: result })
  } catch (err) {
    res.status(500)
    res.json({ rta: -1, message: "Ocurrio un error." })
  }
}

const availableDate = async (req, res) => {
  try {
    const { start_date, end_date, idBarber } = req.body
    const connection = await getConnection()
    const result = await connection.query(
      `SELECT COUNT(*) AS count_turns FROM turnos WHERE start_date>="${start_date}" AND end_date <="${end_date}" and barber_id=${idBarber}`
    )
    res.json({ rta: 1, message: result })
  } catch (err) {
    res.status(500)
    res.json({ rta: -1, message: "Ocurrio un error." })
  }
}

const searchTurnsProfits = async (req, res) => {
  try {
    const { start_date, end_date, idBarber } = req.body
    const connection = await getConnection()
    const result = await connection.query(
      `SELECT T.fecha_reserva,T.start_date,T.end_date,T.price_service,C.firstName,C.lastName,B.firstName as nameBarber,B.lastName as lastNameBarber,S.name_service FROM turnos T INNER JOIN clientes C ON T.cliente_id = C.id INNER JOIN barberos B ON T.barber_id=B.id INNER JOIN servicios S ON T.service_id=S.id WHERE T.barber_id="${idBarber}" and T.start_date>="${start_date}" and T.end_date<="${end_date}"`
    )
    res.json({ rta: 1, dataProfit: result })
  } catch (err) {
    res.status(500)
    res.json({ rta: -1, message: "Ocurrio un error." + err })
  }
}



export const turnsController = {
  getTurns,
  addTurn,
  updateTurn,
  deleteTurn,
  availableNextTurn,
  availableDate,
  searchTurnsProfits,
  availableHoursOnSave,
}

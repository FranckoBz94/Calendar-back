import { getConnection } from "../database/database";

const table = "clientes";

const getClients = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("select * from " + table);
    res.json(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

const addClient = async (req, res) => {
  try {
    const client = req.body;
    const connection = await getConnection();

    const [rows] = await connection.query(
      `SELECT * FROM ${table} WHERE dni = ?`,
      [client.dni]
    );
    if (rows !== undefined) {
      return res.json({
        rta: -1,
        message: "Ya existe un cliente con este DNI.",
      });
    }

    const result = await connection.query(
      `INSERT INTO ${table}
    (firstName, lastName, telefono, dni, email)
    VALUES
    (?, ?, ?, ?, ?)`,
      [
        client.firstName,
        client.lastName,
        client.telefono,
        client.dni,
        client.email,
      ]
    );
    if (result.affectedRows > 0) {
      res.json({ rta: 1, message: "Cliente agregado exitosamente." });
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." });
    }
  } catch (err) {
    res.json({ rta: -1, message: "Error en la conexión con el servidor." });
    res.send(err.message);
  }
};

const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, telefono, dni } = req.body;
    if (
      id === undefined ||
      firstName === undefined ||
      lastName === undefined ||
      email === undefined ||
      telefono === undefined
    ) {
      res.status(400).json({
        message: "Ocurrio un problema, por favor complete toods los campos",
      });
    }
    const client = {
      firstName,
      lastName,
      email,
      telefono,
      dni,
    };
    const connection = await getConnection();
    const result = await connection.query(
      `UPDATE ${table}  SET ? where id= ?`,
      [client, id]
    );
    console.log("result", result.affectedRows);
    if (result.affectedRows > 0) {
      res.json({ rta: 1, message: "Se actualizo correctamente." });
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." });
    }
  } catch (err) {
    res.json({ rta: -1, message: "Error en la conexión con el servidor." });
    res.send(err.message);
  }
};

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      `delete from ${table}  where id = ?`,
      id
    );
    if (result.affectedRows > 0) {
      res.json({
        rta: 1,
        message: "Usuario eliminado correctamente.",
      });
    } else {
      res.json({
        rta: -1,
        message: "Ocurrio un error.",
      });
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error." });
    res.send(err.message);
  }
};

const fetchClientData = async (req, res) => {
  try {
    const { dni } = req.body;
    console.log("dni", dni);
    const connection = await getConnection();
    const result = await connection.query(
      `select * from ${table} where dni=${dni}`
    );
    console.log(result);
    res.json(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

export const clientsController = {
  getClients,
  addClient,
  updateClient,
  deleteClient,
  fetchClientData,
};

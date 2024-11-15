import { getConnection } from "../database/database.js";

const table = "servicios";

const getServices = async (req, res) => {
  try {
    const connection = await getConnection();
    const [result] = await connection.query("select * from " + table);
    res.json(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

const addService = async (req, res) => {
  try {
    const service = req.body;
    const connection = await getConnection();

    const [result] = await connection.query(
      `INSERT INTO ${table}
    (name_service, price_service, minutes_service, event_color)
    VALUES
    (?, ?, ?, ?)`,
      [
        service.name_service,
        service.price_service,
        service.minutes_service,
        service.event_color,
      ]
    );
    if (result.affectedRows > 0) {
      res.json({ rta: 1, message: "Servicio agregado exitosamente." });
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." });
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error." });
    res.send(err.message);
  }
};

const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_service, price_service, minutes_service, event_color } =
      req.body;
    if (
      id === undefined ||
      name_service === undefined ||
      price_service === undefined ||
      minutes_service === undefined ||
      event_color === undefined
    ) {
      res.json({
        rta: -1,
        message: "Ocurrio un problema, por favor complete todos los campos",
      });
    }
    const service = {
      name_service,
      price_service,
      minutes_service,
      event_color,
    };
    const connection = await getConnection();
    const [result] = await connection.query(
      `UPDATE ${table}  SET ? where id= ?`,
      [service, id]
    );
    if (result.affectedRows > 0) {
      res.json({ rta: 1, message: "Se actualizo correctamente." });
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." });
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error." });
    res.send(err.message);
  }
};

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const [result] = await connection.query(
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

export const servicesController = {
  getServices,
  addService,
  updateService,
  deleteService,
};

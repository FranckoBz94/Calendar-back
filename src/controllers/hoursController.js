import { getConnection } from "../database/database";

const table = "hours_calendar";

const getHours = async (req, res) => {
  try {
    const connection = await getConnection();
    const [result] = await connection.query("select * from " + table);
    res.json(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

const updateHours = async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  try {
    const id = parseInt(req.params.id); // Convierte req.params.id a un entero

    const { min_hour_calendar, max_hour_calendar } = req.body;
    if (
      id === undefined ||
      min_hour_calendar === undefined ||
      max_hour_calendar === undefined
    ) {
      res.json({
        rta: -1,
        message: "Ocurrio un problema, por favor complete todos los campos",
      });
    }
    // openingTime = new Date(`1970-01-01T${openingTime}`)
    // closingTime = new Date(`1970-01-01T${closingTime}`)
    const hours = {
      min_hour_calendar,
      max_hour_calendar,
    };
    console.log("RTAAA", `UPDATE ${table}  SET ? where id= ?`, [hours, id]);
    const connection = await getConnection();
    const [result] = await connection.query(
      `UPDATE ${table}  SET ? where id= ?`,
      [hours, id]
    );
    console.log("result", result.affectedRows);
    if (result.affectedRows > 0) {
      res.json({ rta: 1, message: "Se actualizo correctamente." });
    } else {
      res.json({ rta: -1, message: "Ocurrio un error1." });
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error2." });
    res.send(err.message);
  }
};

export const hoursController = {
  getHours,
  updateHours,
};

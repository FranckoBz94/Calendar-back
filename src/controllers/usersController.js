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

    const [existingUser] = await connection.query(
      `SELECT * FROM ${table} WHERE email = ?`,
      [user.email]
    );

    if (existingUser !== undefined) {
      res.json({ rta: -2, message: "El correo electrónico ya está registrado." });
      return;
    }

    const result = await connection.query(
      `INSERT INTO ${table}
    (firstName, lastName, email, password, is_barber, is_admin, fecha_creacion, url_image)
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstName,
        user.lastName,
        user.email,
        hashedPassword,
        isBarberInt,
        isAdminInt,
        fechaCreacion,
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

const updateStateUser = async (req,res)=>{
  try{
    const { isBarber } = req.body
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query(
      `UPDATE ${table} SET is_barber = ? WHERE id = ?`,
      [isBarber, id]
    )
    if (result.affectedRows > 0) {
      res.json({ rta: 1, message: "Se actualizo correctamente." })
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." })
    }
  } catch(err){
    res.json({ rta: -1, message: "Ocurrio un error, catch." + err })
    res.send(err.message)
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
    const { firstName, lastName, email, is_admin } = req.body
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
    if (result.length > 0) {
      const hashedPasswordFromDB = result[0].password;
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

const getDataGraphicsUser = async (req, res) => {
  try {
    const { id,formattedStartDate,formattedEndDate } = req.body;

    const barberId = id !== 0 ? id : null;

    const connection = await getConnection();
    
    let query = `
      SELECT 
        T.service_id, 
        COUNT(*) AS cantidad_turnos, 
        S.name_service 
      FROM 
        turnos T 
      INNER JOIN 
        servicios S 
      ON 
        T.service_id = S.id 
      WHERE 
        1=1`; // Incluir `1=1` para simplificar la lógica de concatenación
    
    // Si id no es 'all', agregar el filtro para barber_id
    if (barberId !== null) {
      query += ` AND t.barber_id = ?`;
    }
    query += ` AND T.fecha_reserva BETWEEN ? AND ?`;

    query += `
      GROUP BY 
        T.service_id, 
        S.name_service
    `;
    
    const result = await connection.query(query, 
      barberId !== null 
        ? [barberId, formattedStartDate, formattedEndDate] 
        : [formattedStartDate, formattedEndDate]
    );
    res.json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};



const getDataTurnsGraphics = async (req, res) => {
  try {
    console.log(req.body);
    const connection = await getConnection();
    const { id, formattedStartDate, formattedEndDate } = req.body;
    console.log("formattedStartDate", formattedStartDate);
    console.log("formattedEndDate", formattedEndDate);
    // Construcción de la consulta SQL
    let query = `
      SELECT 
        t.barber_id, 
        b.firstName AS nameBarber, 
        b.lastName AS lastNameBarber, 
        YEAR(t.fecha_reserva) AS year, 
        MONTH(t.fecha_reserva) AS month, 
        COUNT(*) AS total_turnos 
      FROM 
        turnos t 
      INNER JOIN 
        barberos b ON t.barber_id = b.id 
      WHERE 
        t.fecha_reserva BETWEEN ? AND ?`;

    const queryParams = [formattedStartDate, formattedEndDate];
    
    if (id !== 0) {
      query += ` AND t.barber_id = ?`;
      queryParams.push(id);
    }

    // Continuar construyendo la consulta
    query += `
      GROUP BY 
        t.barber_id, 
        b.firstName, 
        b.lastName, 
        YEAR(t.fecha_reserva), 
        MONTH(t.fecha_reserva) 
      ORDER BY 
        YEAR(t.fecha_reserva), 
        MONTH(t.fecha_reserva);
    `;

    const result = await connection.query(query, queryParams);
    res.json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


const getTurnsDayWeek = async (req, res) => {
  try {
    const connection = await getConnection();
    const { id, formattedStartDate, formattedEndDate } = req.body;

    let query = `
      WITH dias_semana AS (
        SELECT 1 AS dia_num, 'Domingo' AS nombre_dia
        UNION ALL SELECT 2, 'Lunes'
        UNION ALL SELECT 3, 'Martes'
        UNION ALL SELECT 4, 'Miércoles'
        UNION ALL SELECT 5, 'Jueves'
        UNION ALL SELECT 6, 'Viernes'
        UNION ALL SELECT 7, 'Sábado'
      )
      SELECT 
        ds.nombre_dia,
        COALESCE(COUNT(t.fecha_reserva), 0) AS cantidad_cortes
      FROM 
        dias_semana ds
      LEFT JOIN 
        turnos t 
      ON 
        DAYOFWEEK(t.fecha_reserva) = ds.dia_num
      WHERE
        t.fecha_reserva BETWEEN ? AND ?`;

    const queryParams = [formattedStartDate, formattedEndDate];

    // Agregar condición para filtrar por barber_id si es necesario
    if (id !== 0) {
      query += ` AND t.barber_id = ?`;
      queryParams.push(id);
    }

    // Continuar construyendo la consulta
    query += `
      GROUP BY 
        ds.nombre_dia
      ORDER BY 
        FIELD(ds.nombre_dia, 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo');
    `;

    // Ejecutar la consulta con parámetros
    const result = await connection.query(query, queryParams);
    console.log("result", result); // Verificar el resultado completo

    res.json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};







export const usersController = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  login,
  getUserLogged,
  updateStateUser,
  getDataGraphicsUser,
  getDataTurnsGraphics,
  getTurnsDayWeek,
}

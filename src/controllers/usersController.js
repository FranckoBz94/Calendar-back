import { getConnection } from "../database/database.js";

import bcrypt from "bcrypt";
import fs from "node:fs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import crypto from "crypto";
import moment from "moment-timezone";

const table = "usuarios_sistema";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.ETHEREAL_USER,
    pass: process.env.ETHEREAL_PASS,
  },
});

const getUsers = async (req, res) => {
  try {
    const connection = await getConnection();
    const [result] = await connection.query("select * from " + table);
    res.json(result);
  } catch (err) {
    res.status(500 + "error aca");
    res.send(err.message);
  }
};

const getUserLogged = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const [result] = await connection.query(
      "select * from " + table + " where id=" + id
    );
    res.json(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

const addUser = async (req, res) => {
  try {
    const user = req.body;
    const fechaCreacion = new Date();
    const connection = await getConnection();
    const hashedPassword = await bcrypt.hash("1234", 10); // Hash de la contraseña
    const timestamp = Date.now();
    let urlImage = "";

    if (req.file) {
      const maxLength = 50;
      const originalName = req.file.originalname;

      // Sanitizar el nombre del archivo, reemplazando caracteres especiales con guiones bajos
      const sanitizedOriginalName = originalName.replace(/[^a-zA-Z0-9.]/g, "_");

      // Extraer la extensión del archivo
      const fileExtension = sanitizedOriginalName.split(".").pop();

      // Acortar el nombre del archivo si es necesario
      const baseName = sanitizedOriginalName.substring(
        0,
        sanitizedOriginalName.lastIndexOf(".")
      );
      const shortenedName =
        baseName.length > maxLength
          ? baseName.substring(0, maxLength)
          : baseName;

      // Generar el nombre final del archivo que se guardará
      urlImage = `uploads/imageBarbers/${timestamp}_${shortenedName}.${fileExtension}`;
    } else {
      urlImage = "uploads/imageBarbers/profile.png"; // Imagen predeterminada si no se sube una imagen
    }

    const isBarberInt = user.is_barber === "true" ? 1 : 0;
    const isAdminInt = user.is_admin === "true" ? 1 : 0;

    // Verificar si el correo electrónico ya existe en la base de datos
    const [existingUser] = await connection.query(
      `SELECT * FROM ${table} WHERE email = ?`,
      [user.email]
    );

    if (existingUser.length > 0) {
      return res.json({
        rta: -2,
        message: "El correo electrónico ya está registrado.",
      });
    }

    // Insertar nuevo usuario en la base de datos
    const [result] = await connection.query(
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
    );

    if (result.affectedRows > 0) {
      if (req.file) {
        saveImage(urlImage, req.file);
      }
      res.json({ rta: 1, message: "Usuario agregado exitosamente." });
    } else {
      res.json({ rta: -1, message: "Ocurrió un error." });
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrió un error: " + err });
  }
};

const updateStateUser = async (req, res) => {
  try {
    const { isBarber } = req.body;
    const { id } = req.params;
    console.log("id llega", id);
    console.log("isBarber", isBarber);
    const connection = await getConnection();
    console.log(`UPDATE ${table} SET is_barber = ? WHERE id = ?`, [
      isBarber,
      id,
    ]);
    const [result] = await connection.query(
      `UPDATE ${table} SET is_barber = ? WHERE id = ?`,
      [isBarber, id]
    );
    if (result.affectedRows > 0) {
      res.json({ rta: 1, message: "Se actualizo correctamente." });
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." });
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error, catch." + err });
    res.send(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const timestamp = Date.now();
    let url_image = "";
    if (req.file) {
      const maxLength = 50;
      const originalName = req.file.originalname;
      // Sanitizar el nombre del archivo
      const sanitizedOriginalName = originalName.replace(/[^a-zA-Z0-9.]/g, "_");
      // Extraer la extensión del archivo
      const fileExtension = sanitizedOriginalName.split(".").pop();
      // Acortar el nombre del archivo si es necesario
      const baseName = sanitizedOriginalName.substring(
        0,
        sanitizedOriginalName.lastIndexOf(".")
      );
      const shortenedName =
        baseName.length > maxLength
          ? baseName.substring(0, maxLength)
          : baseName;

      // Generar el nombre final del archivo que se guardará
      url_image = `uploads/${timestamp}_${shortenedName}.${fileExtension}`;
    } else {
      url_image = req.body.imageProfile;
    }
    console.log("update image", url_image);
    const { firstName, lastName, email, is_admin } = req.body;
    const isAdminInt = is_admin === "true" ? 1 : 0;
    if (
      id === undefined ||
      firstName === undefined ||
      lastName === undefined ||
      email === undefined
    ) {
      res.json({
        rta: -1,
        message: "Ocurrio un problema, por favor complete todos los campos",
      });
    }
    const user = {
      firstName,
      lastName,
      email,
      is_admin: isAdminInt,
      ...(req.file && { url_image }),
    };
    const connection = await getConnection();
    const [result] = await connection.query(
      `UPDATE ${table}  SET ? where id= ?`,
      [user, id]
    );
    console.log("result", result);
    if (result.affectedRows > 0) {
      if (req.file) {
        saveImage(url_image, req.file);
      }
      res.json({ rta: 1, message: "Se actualizo correctamente." });
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." });
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error, catch." + err });
    res.send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const [result] = await connection.query(
      `delete from ${table}  where id = ?`,
      id
    );
    console.log("result", result);
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

function saveImage(filePath, file) {
  const newPath = `./${filePath}`;
  fs.renameSync(file.path, newPath);
  return newPath;
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const connection = await getConnection();
    // const result = await connection.query(`select * from ${table} where email='${email}'`)
    const [result] = await connection.query(
      `SELECT * FROM ${table} WHERE email = ?`,
      [email]
    );

    if (result.length > 0) {
      const hashedPasswordFromDB = result[0].password;
      const isPasswordCorrect = await bcrypt.compare(
        password,
        hashedPasswordFromDB
      );
      if (isPasswordCorrect) {
        const { firstName } = result[0];
        const token = jwt.sign({ firstName }, "Stack", {
          expiresIn: "1d",
        });
        res.json({ rta: 1, message: result[0], token });
      } else {
        res.json({ rta: -1, message: "Usuario y/o contraseña incorrecta." });
      }
    } else {
      res.json({ rta: -1, message: "Usuario y/o contraseña incorrectaa." });
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error." + err });
  }
};

const getDataGraphicsUser = async (req, res) => {
  try {
    const { id, formattedStartDate, formattedEndDate } = req.body;

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
      query += ` AND T.barber_id = ?`;
    }
    query += ` AND T.fecha_reserva BETWEEN ? AND ?`;

    query += `
      GROUP BY 
        T.service_id, 
        S.name_service
    `;

    const [result] = await connection.query(
      query,
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

    const [result] = await connection.query(query, queryParams);
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
    const [result] = await connection.query(query, queryParams);
    console.log("result", result); // Verificar el resultado completo

    res.json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const connection = await getConnection();
    const [existingUser] = await connection.query(
      `SELECT * FROM ${table} WHERE email = ?`,
      [email]
    );
    console.log("existe", existingUser);
    if (existingUser.length > 0) {
      const resetToken = crypto.randomBytes(20).toString("hex");
      const resetPasswordExpire = new Date(Date.now() + 3600000); // 1 hora en milisegundos
      await connection.query(
        `UPDATE ${table} SET resetPasswordToken = ?, resetPasswordExpire = ? WHERE email = ?`,
        [resetToken, resetPasswordExpire, email]
      );
      // URL para restablecer la contraseña (ajusta según tu aplicación)
      const resetUrl = `${process.env.URL_FRONT}/reset-password?token=${resetToken}`;

      const mailOptions = {
        from: process.env.ETHEREAL_USER,
        to: email,
        subject: "Restablece tu contraseña",
        html: `<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #4CAF50;">Solicitud de restablecimiento de contraseña</h2>
          <p>Hola,</p>
          <p>Has solicitado restablecer tu contraseña. Haz clic en el botón de abajo para continuar con el proceso:</p>
          <a target="_blank" rel="noopener noreferrer" href="${resetUrl}" 
            style="display: inline-block; background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
            Restablecer Contraseña
          </a>
          <p>Si no solicitaste este cambio, puedes ignorar este correo.</p>
          <p>Gracias,</p>
          <p><strong>Equipo de soporte de Tu Empresa</strong></p>
          <hr />
          <small style="color: #999;">Este enlace es válido por 1 hora.</small>
        </div>`,
      };

      // Enviar el correo
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error al enviar el correo:", error);
          return res.status(500).json({
            success: false,
            message: "Error al enviar el correo: " + error.message,
          });
        }
        return res.status(200).json({
          success: true,
          message: "Correo de restablecimiento enviado.",
        });
      });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Usuario no encontrado." });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Error en el servidor." });
  }
};

const resetPassword = async (req, res) => {
  console.log("req.bod", req.body);
  const { token, password } = req.body;
  const connection = await getConnection();
  const now = new Date();
  const localDateInBuenosAires = moment(now)
    .tz("America/Argentina/Buenos_Aires")
    .format("YYYY-MM-DD HH:mm:ss");
  const [user] = await connection.query(
    `SELECT * FROM ${table} WHERE resetPasswordToken = ? AND resetPasswordExpire > ?`,
    [token, localDateInBuenosAires]
  );
  if (!user || user.length === 0) {
    return res
      .status(200)
      .json({ success: false, message: "Token inválido o expirado." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await connection.query(
    `UPDATE ${table} SET password = ?, resetPasswordToken = NULL, resetPasswordExpire = NULL WHERE id = ?`,
    [hashedPassword, user[0].id]
  );

  return res
    .status(200)
    .json({ success: true, message: "Contraseña actualizada correctamente." });
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
  forgotPassword,
  resetPassword,
};

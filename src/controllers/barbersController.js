import { getConnection } from "../database/database";
const fs = require("node:fs");
const table = "barberos";

const getBarbers = async (req, res) => {
  try {
    const connection = await getConnection();
    const [result] = await connection.query(
      "SELECT b.*,u.firstName as nameBarber, u.lastName as lastNameBarber, u.email as emailUser FROM " +
        table +
        " as b LEFT JOIN usuarios_sistema as u ON b.id_user = u.id"
    );
    res.json(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

const addBarber = async (req, res) => {
  try {
    const barber = req.body;
    const fechaCreacion = new Date();
    const connection = await getConnection();
    let urlImage = "";
    const timestamp = Date.now(); // Agregar un timestamp para diferenciar los archivos
    if (req.file) {
      const maxLength = 50;
      const originalName = req.file.originalname;

      // Sanitizar el nombre del archivo, reemplazando caracteres especiales con guiones bajos
      const sanitizedOriginalName = originalName.replace(/[^a-zA-Z0-9.]/g, "_");

      // Extraer la extensión del archivo
      const fileExtension = sanitizedOriginalName.split(".").pop();

      // Acortar el nombre del archivo si es necesario (sin incluir la extensión)
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
      urlImage = "uploads/imageBarbers/profile.png";
    }
    console.log("url", urlImage);
    const isActiveInt = barber.is_active === "true" ? 1 : 0;
    const isAdminInt = barber.is_admin === "true" ? 1 : 0;
    const [result] = await connection.query(
      `INSERT INTO ${table}
    (firstName, lastName, email, telefono, imagen, is_active, is_admin, fecha_creacion,id_user)
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        barber.firstName,
        barber.lastName,
        barber.email,
        barber.telefono,
        urlImage,
        isActiveInt,
        isAdminInt,
        fechaCreacion,
        barber.id_user,
      ]
    );
    console.log(result);
    if (result.affectedRows > 0) {
      const insertedId = result.insertId; // Obtener el ID insertado
      if (req.file) {
        saveImage(urlImage, req.file); // Guardar la imagen con el nombre sanitizado
      }
      res.json({
        rta: 1,
        message: "Barbero agregado exitosamente.",
        barberId: insertedId,
      });
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." });
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error." + err });
    res.send(err.message);
  }
};

const updateBarber = async (req, res) => {
  try {
    const { id } = req.params;
    let imagen = "";
    const timestamp = Date.now(); // Agregar un timestamp para diferenciar los archivos
    if (req.file) {
      const maxLength = 50;
      const originalName = req.file.originalname;

      // Sanitizar el nombre del archivo, reemplazando caracteres especiales con guiones bajos
      const sanitizedOriginalName = originalName.replace(/[^a-zA-Z0-9.]/g, "_");

      // Extraer la extensión del archivo
      const fileExtension = sanitizedOriginalName.split(".").pop();

      // Acortar el nombre del archivo si es necesario (sin incluir la extensión)
      const baseName = sanitizedOriginalName.substring(
        0,
        sanitizedOriginalName.lastIndexOf(".")
      );
      const shortenedName =
        baseName.length > maxLength
          ? baseName.substring(0, maxLength)
          : baseName;

      // Generar el nombre final del archivo que se guardará
      imagen = `uploads/imageBarbers/${timestamp}_${shortenedName}.${fileExtension}`;
    } else {
      imagen = req.body.imageProfile;
    }
    console.log("imagen", imagen);

    const {
      firstName,
      lastName,
      email,
      telefono,
      is_active,
      is_admin,
      id_user,
    } = req.body;
    const isActiveInt = is_active === "true" ? 1 : 0;
    const isAdminInt = is_admin === "true" ? 1 : 0;
    const barber = {
      firstName,
      lastName,
      email,
      telefono,
      ...(req.file && { imagen }),
      is_active: isActiveInt,
      is_admin: isAdminInt,
      id_user,
    };
    console.log("barber", barber);
    const connection = await getConnection();
    const [result] = await connection.query(
      `UPDATE ${table}  SET ? where id= ?`,
      [barber, id]
    );
    if (result.affectedRows > 0) {
      if (req.file) {
        saveImage(imagen, req.file); // Guardar la imagen con el nombre sanitizado
      }
      res.json({ rta: 1, message: "Barbero actualizado correctamente." });
    } else {
      res.json({ rta: -1, message: "Ocurrio un error." });
    }
  } catch (err) {
    res.json({ rta: -1, message: "Ocurrio un error. catch" + err });
    res.send(err.message);
  }
};

const deleteBarber = async (req, res) => {
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

function saveImage(filePath, file) {
  const newPath = `./${filePath}`; // Usamos directamente la ruta generada
  console.log("newPath", newPath);
  fs.renameSync(file.path, newPath);
  return newPath;
}

export const barbersController = {
  getBarbers,
  addBarber,
  updateBarber,
  deleteBarber,
};

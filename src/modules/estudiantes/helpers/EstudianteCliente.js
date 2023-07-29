import axios from "axios";

export const obtenerEstudianteFachada = async (cedula) => {
  return await obtenerEstudianteAPI(cedula);
};

export const ingresarEstudianteFachada = (bodyEstudiante) => {};

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {};

export const eliminarEstudianteFachada = (id) => {};

const obtenerEstudianteAPI = async (cedula) => {
  const data = await fetch(
    `http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`
  ).then((r) => r.json());
  console.log(data);
};

const obtenerEstudianteAPIAxios = (cedula) => {};
import axios from "axios"

export const obtenerEstudianteFachada = async (cedula)=>{
    console.log('AXIOS')
    return await obtenerEstudianteAPIAxios(cedula);
}
export const ingresarEstudianteFachada = (bodyEstudiante) =>{
    ingresarEstudiante(bodyEstudiante);
}
export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
    actualizarEstudiante(bodyEstudiante, id);
}

export const eliminarEstudianteFachada = async (id) =>{
    return await eliminarEstudiante(id);
}

const obtenerEstudianteAPI = async (cedula)=>{
    //En el config vamos enviar todas los datos de cabecera

    const data = await fetch(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);
    return data;
}
const obtenerEstudianteAPIAxios = async (cedula)=>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZXMiLCJpYXQiOjE2OTI4MjM3NTYsImV4cCI6MTY5MjgzMzc1Nn0.JrARBfS02ULc762gm60QhJuTxr8a1_CO1uanBM21gCwdE3c1ep-8AqTQeyyZtxTwCntaCtcP90l4wR043hXW5Q",
        "Mensaje": "Valor1"
    }
    console.log('AXIOS 2')
    const data = axios.get(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}`, {headers: headers}).then(r=>r.data);
    return data;
}
const ingresarEstudiante = (bodyEstudiante) =>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZXMiLCJpYXQiOjE2OTI4MjM3NTYsImV4cCI6MTY5MjgzMzc1Nn0.JrARBfS02ULc762gm60QhJuTxr8a1_CO1uanBM21gCwdE3c1ep-8AqTQeyyZtxTwCntaCtcP90l4wR043hXW5Q",
        "Mensaje": "Valor1"
    }


    axios.post(`http://localhost:8082/API/v1.0/Matricula/estudiantes`,bodyEstudiante, {headers: headers}).then(r=>r.data);
}
const actualizarEstudiante = (bodyEstudiante, id) => {
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZXMiLCJpYXQiOjE2OTI4MjM3NTYsImV4cCI6MTY5MjgzMzc1Nn0.JrARBfS02ULc762gm60QhJuTxr8a1_CO1uanBM21gCwdE3c1ep-8AqTQeyyZtxTwCntaCtcP90l4wR043hXW5Q",
        "Mensaje": "Valor1"
    }

    axios.put(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${id}`, bodyEstudiante, {headers: headers}).then(r=>r.data);
}

const eliminarEstudiante = async (id) =>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZXMiLCJpYXQiOjE2OTI4MjM3NTYsImV4cCI6MTY5MjgzMzc1Nn0.JrARBfS02ULc762gm60QhJuTxr8a1_CO1uanBM21gCwdE3c1ep-8AqTQeyyZtxTwCntaCtcP90l4wR043hXW5Q",
        "Mensaje": "Valor1"
    }
    const data = axios.delete(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${id}`,{headers: headers}).then(r=>r.data);
    return data
}
import React from "react";
import profile from "./profile.png";
import "./App.css";

function DocumentacionParcial2() {
    const datos = {
        nombre: "Guerrero Simental José Manuel",
        carrera: "Ingeniería en Tecnologías de la Información",
        matricula: "3041240412",
        correo: "joseguerrerosimental@gmail.com",
        telefono: "+52 618 332 1927",
    };

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <img src={profile} width="80%" height="80%" alt="Alumno" />
                </div>
                <h1>Documentación Parcial 2</h1>
                <h2>Alumno(a): {datos.nombre}</h2>

                <p><strong>Carrera:</strong> {datos.carrera}</p>
                <p><strong>Matrícula:</strong> {datos.matricula}</p>
                <p><strong>Correo:</strong> {datos.correo}</p>
                <p><strong>Teléfono:</strong> {datos.telefono}</p>

                <br />
                <a className="App-link" href="/">VOLVER AL INICIO</a>
            </header>
        </div>
    );
}

export default DocumentacionParcial2;

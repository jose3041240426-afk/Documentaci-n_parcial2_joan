import React from "react";
import profile from "./profile.png";
import "./App.css";

function DocumentacionParcial() {
  const datos = {
    nombre: "Hernández Tavizón Josué Joán",
    carrera: "TSU en Tecnologias de la Información Area: Desarrollo de Software Multiplataforma",
    matricula: "3041240412",
    correo: "josuejoanh.t.z@gmail.com",
    telefono: "+52 618 222 4020 o +52 618 329 9798",
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={profile} width="80%" height="80%" alt="Alumno con laptop" />
        </div>
        <h1>Documentación Parcial 1</h1>
        <h2>Alumno(a): {datos.nombre}</h2>

        <p><strong>Carrera:</strong> {datos.carrera}</p>
        <p><strong>Matrícula:</strong> {datos.matricula}</p>
        <p><strong>Correo:</strong> {datos.correo}</p>
        <p><strong>Teléfono:</strong> {datos.telefono}</p>
      </header>
    </div>
  );
}

export default DocumentacionParcial;

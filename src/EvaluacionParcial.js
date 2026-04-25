import React from "react";
import "./App.css"; // puedes usar tus estilos aquí

function EvaluacionParcial() {
  return (
    <div className="slide">
      <img 
        src="perfil.jpg" 
        alt="Alumno con laptop" 
        className="slide-img"
      />
      <h1>Evaluación parcial 1</h1>
      <h2>Alumno(a): Manuel Alejandro Mathey Ortiz</h2>
      <div className="links">
        <a href="https://www.linkedin.com/in/manuel-alejandro-mathey-ortiz-8307443a5/" target="_blank" rel="noopener noreferrer">
          LINKEDIN DE MI PROFILE
        </a>
        <a href="/documentacion-parcial-1.pdf" target="_blank" rel="noopener noreferrer">
          DOCUMENTACION PARCIAL 1
        </a>
      </div>
    </div>
  );
}

export default EvaluacionParcial;
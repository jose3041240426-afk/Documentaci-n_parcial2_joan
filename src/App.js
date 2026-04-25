import React, { useEffect, useState } from "react";
import perfil from "./profile.png";
import "./App.css";
import DocumentacionParcial from "./DocumentacionParcial";
import DocumentacionParcial2 from "./DocumentacionParcial2";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const CLIENT_ID = "559179658963-l3cp0r08rog95o55tuanojl520qmiccv.apps.googleusercontent.com";
  const navigate = useNavigate();

  // Estado para guardar datos del alumno
  const [userData] = useState({
    nombre: "Hernández Tavizón Josué Joán",
    foto: perfil
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(
          document.getElementById('googleButton'),
          { theme: 'outline', size: 'large' }
        );
      }
    };
  }, []);

  const handleCredentialResponse = (response) => {
    console.log("Token:", response.credential);
    alert("¡Login exitoso con Google!");
    navigate("/evaluacion3");
  };

  return (
    <Routes>
      {/* Pantalla inicial */}
      <Route path="/" element={
        <div className="App">
          <header className="App-header">
            <div>
              <img src={userData.foto} width="400px" height="400px" alt="Alumno" />
            </div>
            <h1>Evaluación parcial 1</h1>
            <h2>Alumno(a): {userData.nombre}</h2>

            <a className="App-link" href="https://www.linkedin.com/in/josu%C3%A9-jo%C3%A1n-hern%C3%A1ndez-taviz%C3%B3n-1949173a4/" target="_blank" rel="noopener noreferrer">
              LINKEDIN DE MI PROFILE
            </a><br />

            <a className="App-link" href="/documentacion-parcial1.html">DOCUMENTACION PARCIAL 1</a><br />
            <a className="App-link" href="/documentacion-parcial2.html">DOCUMENTACION PARCIAL 2</a><br /><br />

            <div id="googleButton"></div>
          </header>
        </div>
      } />

      <Route path="/documentacion" element={<DocumentacionParcial />} />
      <Route path="/documentacion2" element={<DocumentacionParcial2 />} />

      {/* Pantalla de Evaluación Parcial 3 */}
      <Route path="/evaluacion3" element={
        <div className="App">
          <header className="App-header">
            <div>
              <img src={userData.foto} width="200px" alt="Alumno" />
            </div>
            <h1>Bienvenido(a), {userData.nombre}</h1>
            <h2>EVALUACIÓN PARCIAL 3</h2>

            {/* Botón que abre un PDF */}
            <button onClick={() => window.open("/ERS.pdf", "_blank")}>
              DESCARGAR DOCUMENTO ERS DEL PROYECTO
            </button><br />

            {/* Botón que abre Jira */}
            <button onClick={() => window.open("https://utd-team-oy4k7bqb.atlassian.net/jira/software/projects/SEC/boards/2?atlOrigin=eyJpIjoiNWFkODE3NWQzZGFlNGM1N2FhYjBmMzEzZTI5MzY2NWYiLCJwIjoiaiJ9", "_blank")}>
              TABLERO JIRA PROYECTO SIBA
            </button><br />

            {/* Botón de cerrar sesión */}
            <button onClick={() => navigate("/")}>
              CERRRAR SESIÓN PARCIAL 3
            </button>
          </header>
        </div>
      } />
    </Routes>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

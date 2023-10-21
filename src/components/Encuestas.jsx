import React, { useState } from 'react';;

function Encuestas({ encuestas }) {
  const [encuestaSeleccionada, setEncuestaSeleccionada] = useState(null);

  const seleccionarEncuesta = (encuesta) => {
    if (encuestaSeleccionada === encuesta) {
      setEncuestaSeleccionada(null);
    } else {
      setEncuestaSeleccionada(encuesta);
    }
  };

  return (
    <div>
      <h2>Encuestas Disponibles</h2>
      <ul>
        {encuestas.map((encuesta) => (
          <li key={encuesta.id}>
            {encuesta.pregunta}
            <button onClick={() => seleccionarEncuesta(encuesta)}>
              Opciones
            </button>
            {encuestaSeleccionada === encuesta && (
              <ul>
                {encuesta.opciones.map((opcion) => (
                  <li key={opcion}>{opcion}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Encuestas;

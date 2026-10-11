import "./SlideEstudiante.css";

/**
 * Envuelve cualquier slide y muestra el nombre del estudiante
 * cuando se pasa el mouse por encima.
 *
 * Uso:
 *   <SlideEstudiante nombre="Ana Pérez">
 *     <Slide1 />
 *   </SlideEstudiante>
 */
export default function SlideEstudiante({ nombre, children }) {
  return (
    <div className="estudiante">
      {children}
      <div className="estudiante__nombre">{nombre}</div>
    </div>
  );
}

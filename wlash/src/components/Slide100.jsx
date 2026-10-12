import "./Slide100.css";

export default function Slide100() {
  return (
    <div className="slide100">
      <div className="slide100__card">
        <h2 className="slide100__titulo">La Rejilla de Hermann</h2>

        <div className="slide100__rejilla">
          {Array.from({ length: 36 }).map((_, n) => (
            <div className="slide100__caja" key={n} />
          ))}
        </div>

        <p>
          Mirá fijamente las intersecciones blancas de la cuadrícula. ¿Ves
          puntos grises que aparecen y desaparecen?
        </p>
        <p>
          <strong>Explicación:</strong> Esos puntos grises no existen en la
          pantalla. Tu cerebro los inventa debido a un fenómeno llamado
          "inhibición lateral" en la retina. Tu sistema visual distorsiona
          la realidad para tratar de entender los contrastes.
        </p>
      </div>
    </div>
  );
}

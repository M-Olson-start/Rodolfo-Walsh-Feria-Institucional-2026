import "./Slide2.css";

export default function Slide2() {
  return (
    <div className="slide2">
      <h1 className="slide2__titulo">Ilusión Óptica</h1>

      <div className="slide2__ilusion">
        <div className="slide2__circulo"></div>
        <div className="slide2__circulo"></div>
        <div className="slide2__circulo"></div>
        <div className="slide2__circulo"></div>
        <div className="slide2__centro"></div>
      </div>

      <p className="slide2__texto">
        ¡Mirá el centro y observá el efecto de movimiento!
        
      </p>
    </div>
  );
}

import { Children, useCallback, useEffect, useState } from "react";
import "./Carousel.css";

/**
 * Carousel genérico: recibe cualquier componente como children.
 *
 * Props:
 *  - autoPlay  (boolean)  avanza solo. Por defecto false
 *  - interval  (number)   milisegundos entre slides. Por defecto 4000
 *  - loop      (boolean)  vuelve al inicio/final. Por defecto true
 */
export default function Carousel({ children, autoPlay = false, interval = 4000, loop = true }) {
  const slides = Children.toArray(children);
  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (loop) setCurrent((index + total) % total);
      else setCurrent(Math.min(Math.max(index, 0), total - 1));
    },
    [loop, total]
  );

  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);

  // Autoplay
  useEffect(() => {
    if (!autoPlay || paused || total < 2) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, interval, next, total]);

  // Navegación con teclado (flechas)
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  if (total === 0) return null;

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carrusel"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel__viewport">
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              className="carousel__slide"
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${total}`}
              aria-hidden={i !== current}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            className="carousel__btn carousel__btn--prev"
            onClick={prev}
            disabled={!loop && current === 0}
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel__btn carousel__btn--next"
            onClick={next}
            disabled={!loop && current === total - 1}
            aria-label="Siguiente"
          >
            ›
          </button>

          <div className="carousel__dots">
            {slides.map((_, i) => (
              <button
                type="button"
                key={i}
                className={`carousel__dot ${i === current ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Ir al slide ${i + 1}`}
                aria-current={i === current}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

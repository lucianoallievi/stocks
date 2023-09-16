import { useState } from "react";

export const GraphForm = ({ setSearchOptions }) => {
  const [values, setValues] = useState({
    interval: null,
    tipoFecha: null,
    start_date: null,
    end_date: null,
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setSearchOptions(values);
  };
  /*let historico = document.querySelector("#historico");
  let tiempoReal = document.querySelector("#tiempoReal");
  historico.addEventListener("click", () => {
    if (historico.checked == true) {
      document.querySelector(".fecha_contenedor").style.display = "flex";
    }
  });
  tiempoReal.addEventListener("click", () => {
    if (tiempoReal.checked == true) {
      document.querySelector(".fecha_contenedor").style.display = "none";
    }
  });*/
  return (
    <div id="GraphForm">
      <form onSubmit={handleSubmit}>
        <div className="radio_contenedor">
          <div>
            <input
              type="radio"
              name="tipoFecha"
              id="tiempoReal"
              value="tiempoReal"
              onChange={() => {
                handleInputChange;
                document.querySelector(".fecha_contenedor").style.display =
                  "none";
              }}
            />
            <label htmlFor="tiempoReal">Tiempo Real</label>
          </div>
          <select
            name="interval"
            id="interval"
            required
            onChange={handleInputChange}
          >
            <option> Seleccionar intervalo</option>
            <option value="1min">1 minuto</option>
            <option value="5min">5 minutos</option>
            <option value="15min">15 minutos</option>
          </select>
          <div>
            <input
              type="radio"
              name="tipoFecha"
              id="historico"
              value="historico"
              onChange={() => {
                handleInputChange;
                document.querySelector(".fecha_contenedor").style.display =
                  "flex";
              }}
            />
            <label htmlFor="historico">Historico</label>
          </div>
        </div>
        <hr />
        <div className="fecha_contenedor">
          <div className="fecha_grupo">
            <input
              type="date"
              name="desde_fecha"
              onChange={handleInputChange}
            />
            <input type="time" name="desde_hora" onChange={handleInputChange} />
          </div>

          <div className="fecha_grupo">
            <input
              type="date"
              name="hasta_fecha"
              onChange={handleInputChange}
            />
            <input type="time" name="hasta_hora" onChange={handleInputChange} />
          </div>
        </div>
        <div></div>
        <button type="submit">Graficar</button>
      </form>
    </div>
  );
};

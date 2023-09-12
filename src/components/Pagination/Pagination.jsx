import { Link } from "react-router-dom";

export const Pagination = ({ paginaActual, totalPaginas, setPaginaActual }) => {
  let paginaInicial;
  let link_paginacion = "";
  paginaActual = Number.parseInt(paginaActual);
  if (paginaActual <= 5) {
    paginaInicial = 1;
  } else {
    paginaInicial = paginaActual - 5;
  }
  console.log(paginaActual);
  //let primerLink = 10 - paginaActual < 0 ? 1 : limite - paginaActual;

  //for (let index = primerLink; index < limite + primerLink; index++) {
  //retorno  =+ `<button onClick={setPaginaActual(index)}>Pagina: {index}</button>;

  return (
    <div>
      {(() => {
        let vista = [];
        if (paginaActual - 1 == -1)
          vista.push(
            <button className="me-2" class="disabled">
              Anterior
            </button>
          );
        else
          vista.push(
            <Link className="me-2" to={`/stocks/${paginaActual - 1}`}>
              Anterior
            </Link>
          );
        for (let index = paginaInicial; index < paginaInicial + 11; index++) {
          let numero_pagina = index;
          if (paginaActual == index)
            vista.push(
              <button className="me-2" class="disabled">
                {numero_pagina}
              </button>
            );
          else
            vista.push(
              <Link className="me-2" to={`/stocks/${index}`}>
                {numero_pagina}
              </Link>
            );
        }
        if (paginaActual + 1 > totalPaginas)
          vista.push(
            <button className="me-2" class="disabled">
              Siguiente
            </button>
          );
        else
          vista.push(
            <Link className="me-2" to={`/stocks/${paginaActual + 1}`}>
              Siguiente
            </Link>
          );
        return vista;
      })()}
    </div>
  );
};

import { Link } from "react-router-dom";

export const Pagination = ({ paginaActual, totalPaginas, url }) => {
  let paginaInicial;
  let link_paginacion = "";
  let cantLinks = 1;

  totalPaginas > 10 ? (cantLinks = 10) : (cantLinks = totalPaginas);

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
    <div id="pagination">
      {(() => {
        let vista = [];
        if (paginaActual - 1 == 0)
          vista.push(
            <button className="me-2 diabled disabled">Anterior</button>
          );
        else
          vista.push(
            <Link className="me-2" to={`/${url}/${paginaActual - 1}`}>
              Anterior
            </Link>
          );
        for (
          let index = paginaInicial;
          index < paginaInicial + cantLinks;
          index++
        ) {
          let numero_pagina = index;
          if (paginaActual == index)
            vista.push(
              <button className="me-2 disabled">{numero_pagina}</button>
            );
          else
            vista.push(
              <Link className="me-2" to={`/${url}/${index}`}>
                {numero_pagina}
              </Link>
            );
        }
        if (paginaActual + 1 > totalPaginas)
          vista.push(<button className="me-2 disabled">Siguiente</button>);
        else
          vista.push(
            <Link className="me-2" to={`/${url}/${paginaActual + 1}`}>
              Siguiente
            </Link>
          );
        return vista;
      })()}
    </div>
  );
};

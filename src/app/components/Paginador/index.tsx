"use client";

import "./styles.css";

type Props = {
    page: number;
    totalPages: number;
    next: boolean;
    prev: boolean;
    setPage: (page: number) => void;
};

const Paginador = ({ page, totalPages, next, prev, setPage }: Props) => {

    const paginas = [1, 2, 3, page, totalPages - 2, totalPages - 1, totalPages]
        .filter((e) => e >= 1 && e <= totalPages)
        .filter((e, index, array) => array.indexOf(e) === index);

    return (
        <div className="ContainerPaginador">
            <button disabled={!prev} onClick={() => setPage(page - 1)}>
                Anterior
            </button>

            {paginas.map((e) => (
                <button
                    key={e}
                    className={e === page ? "PaginaActual" : ""}
                    onClick={() => setPage(e)}
                >
                    {e}
                </button>
            ))}

            <button disabled={!next} onClick={() => setPage(page + 1)}>
                Siguiente
            </button>
        </div>
    );
};

export default Paginador;
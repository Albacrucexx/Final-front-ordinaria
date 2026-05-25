"use client";

import { useEffect, useState } from "react";
import api from "@/api/api";
import { ResultCharactersT } from "../types/RicardoYMortirio";
import CharacterChulongo from "../components/CharacterChulongo";
import Paginador from "../components/Paginador";
import FiltrosChulongos from "../components/FiltrosChulongos";
import "./styles.css";

const CharacterPage = () => {

    const [resultCharacters, setResultCharacters] = useState<ResultCharactersT | null>(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const [status, setStatus] = useState("Dead");
    const [gender, setGender] = useState("Female");
    const [name, setName] = useState("");
    const [nameBuscado, setNameBuscado] = useState("");

    const fetchCharacters = () => {
        setLoading(true);

        api.get(`/character?page=${page}&status=${status}&gender=${gender}&name=${nameBuscado}`)
            .then((e) => {
                const { data }: { data: ResultCharactersT } = e;
                setResultCharacters(data);
            })
            .catch(() => {
                setResultCharacters(null);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const buscar = () => {
        setPage(1);
        setNameBuscado(name);
    };

    useEffect(() => {
        fetchCharacters();
    }, [page, status, gender, nameBuscado]);

    return (
        <div className="ContainerCharacters">
            <h1>Ricardo y Mortirio</h1>

            <FiltrosChulongos
                status={status}
                gender={gender}
                name={name}
                setStatus={(e) => {
                    setPage(1);
                    setStatus(e);
                }}
                setGender={(e) => {
                    setPage(1);
                    setGender(e);
                }}
                setName={setName}
                buscar={buscar}
            />

            {loading && <h2>Cargando...</h2>}

            {!loading && !resultCharacters && (
                <h2>No hay resultados</h2>
            )}

            {!loading && resultCharacters && (
                <>
                    <div className="ListaCharacters">
                        {resultCharacters.results.slice(0, 20).map((e) => (
                            <CharacterChulongo
                                key={e.id}
                                personaje={e}
                            />
                        ))}
                    </div>

                    <Paginador
                        page={page}
                        totalPages={resultCharacters.info.pages}
                        next={!!resultCharacters.info.next}
                        prev={!!resultCharacters.info.prev}
                        setPage={(e) => {
                            setPage(e);
                        }}
                    />
                </>
            )}
        </div>
    );
};

export default CharacterPage;


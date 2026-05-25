"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/api/api";
import { CharacterT } from "@/app/types/RicardoYMortirio";
import "./styles.css";

const CharacterDetailPage = () => {

    const params = useParams();
    const router = useRouter();
    const id = params.id;

    const [personaje, setPersonaje] = useState<CharacterT | null>(null);

    useEffect(() => {
        api.get(`/character/${id}`).then((e) => {
            setPersonaje(e.data);
        });
    }, []);

    if (!personaje) {
        return <h1>Cargando...</h1>;
    }

    return (
        <div className="ContainerCharacterDetail">
            <div className="CardCharacterDetail">
                <img src={personaje.image} />

                <h1>{personaje.name}</h1>

                <p>ID: {personaje.id}</p>
                <p>Género: {personaje.gender}</p>
                <p>Estado: {personaje.status}</p>
                <p>Especie: {personaje.species}</p>
                <p>Origen: {personaje.origin.name}</p>
                <p>Location: {personaje.location.name}</p>

                <button onClick={() => router.push("/characters")}>
                    Volver
                </button>
            </div>
        </div>
    );
};

export default CharacterDetailPage;





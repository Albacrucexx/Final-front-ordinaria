"use client";

import { useRouter } from "next/navigation";
import { CharacterT } from "../../types/RicardoYMortirio";
import "./styles.css";

type Props = {
    personaje: CharacterT;
};

const CharacterChulongo = ({ personaje }: Props) => {
    const router = useRouter();

    return (
        <div
            className="ContainerCharacterChulongo"
            onClick={() => router.push(`/character/${personaje.id}`)}
        >
            <img src={personaje.image} />

            <div>
                <h2>{personaje.name}</h2>
                <p>Estado: {personaje.status}</p>
                <p>Género: {personaje.gender}</p>
            </div>
        </div>
    );
};

export default CharacterChulongo;


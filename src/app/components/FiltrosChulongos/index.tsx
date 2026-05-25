"use client";

import "./styles.css";

type Props = {
    status: string;
    gender: string;
    name: string;
    setStatus: (status: string) => void;
    setGender: (gender: string) => void;
    setName: (name: string) => void;
    buscar: () => void;
};

const FiltrosChulongos = ({
    status,
    gender,
    name,
    setStatus,
    setGender,
    setName,
    buscar
}: Props) => {

    const cambiarStatus = () => {
        if (status === "Dead") {
            setStatus("Alive");
        } else if (status === "Alive") {
            setStatus("unknown");
        } else {
            setStatus("Dead");
        }
    };

    const cambiarGender = () => {
        if (gender === "Female") {
            setGender("Male");
        } else if (gender === "Male") {
            setGender("Genderless");
        } else if (gender === "Genderless") {
            setGender("unknown");
        } else {
            setGender("Female");
        }
    };

    return (
        <div className="ContainerFiltrosChulongos">
            <button onClick={cambiarStatus}>
                Estado: {status}
            </button>

            <button onClick={cambiarGender}>
                Género: {gender}
            </button>

            <input
                placeholder="Buscar nombre"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        buscar();
                    }
                }}
            />

            <button onClick={buscar}>
                Buscar
            </button>
        </div>
    );
};

export default FiltrosChulongos;
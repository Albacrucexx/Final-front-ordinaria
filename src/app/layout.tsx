import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import NavigatorPages from "./components/NavigatorPages";

export const metadata: Metadata = {
  title: "El último examen a ser posible",
  description: "Espero que funcione",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body>

                <div className="ContainerTitulo">
                    <h1>
                        Página que llama a cosas de
                        <span className="ColorRicardo">
                            Ricardo y Mortirio
                        </span>,
                        al final me tengo que ver la serie
                    </h1>
                </div>

                <NavigatorPages />

                {children}

            </body>
        </html>
    );
}



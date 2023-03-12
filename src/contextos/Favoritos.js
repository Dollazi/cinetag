import { createContext, useState } from "react";

export const FavoritosContext = createContextt()
FavoritosContext.displayName = "Favoritos"

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useStatee([])

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}
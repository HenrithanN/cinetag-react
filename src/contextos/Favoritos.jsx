const { createContext, useState } = require("react");

const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos';

const FavoritosProvider = ({ children }) => {
    const [ favorito, setFavorito ] = useState([]);

    return (
        <FavoritosContext.Provider
        value={{ favorito, setFavorito }}>
            { children }
        </FavoritosContext.Provider>
    )
}

export default FavoritosProvider;
const { createContext, useState, useContext } = require("react");

export const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos';

export default function FavoritosProvider({ children }){
    const [ favorito, setFavorito ] = useState([]);

    return (
        <FavoritosContext.Provider
        value={{ favorito, setFavorito }}>
            { children }
        </FavoritosContext.Provider>
    )
}

export const useFavoritoContext = () => {
    const { favorito, setFavorito } = useContext(FavoritosContext);
    
    let novaListaFavoritos = [...favorito];
    
    const adicionarFavorito = (novoFavorito) => {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

        if(!favoritoRepetido){
            novaListaFavoritos.push(novoFavorito);
            return setFavorito(novaListaFavoritos);
        }

        novaListaFavoritos.splice(novaListaFavoritos.indexOf(novoFavorito), 1);
        return setFavorito(novaListaFavoritos);
        
    }

    return {
        favorito,
        adicionarFavorito
    }
}

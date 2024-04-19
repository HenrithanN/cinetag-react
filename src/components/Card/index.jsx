import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';

const Card = ({ id, titulo, capa }) => {

    const { favorito, adicionarFavorito } = useFavoritoContext();
    const estaFavoritado = favorito.some((item) => item.id === id);
    const icone = !estaFavoritado? iconeFavoritar: iconeDesfavoritar;
    
    return (
        <div className={styles.container} id={id}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{ titulo }</h2>
            <img src={icone} alt='Icone favoritar filme' className={styles.favoritar} onClick={() => adicionarFavorito({ id, titulo, capa })} />
        </div>
    )
}

export default Card;
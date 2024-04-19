import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

const Card = ({ id, titulo, capa }) => {

    const { favorito, adicionarFavorito } = useFavoritoContext();
    const estaFavoritado = favorito.some((item) => item.id === id);
    const icone = !estaFavoritado? iconeFavoritar: iconeDesfavoritar;
    
    return (
        <div className={styles.container} id={id}>
            <Link to={`/Player/${id}`} className={styles.link}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{ titulo }</h2>
            </Link>
            <img src={icone} alt='Icone favoritar filme' className={styles.favoritar} onClick={() => adicionarFavorito({ id, titulo, capa })} />
        </div>
    )
}

export default Card;
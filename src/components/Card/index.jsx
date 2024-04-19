import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';

const Card = ({ id, titulo, capa }) => {
    return (
        <div className={styles.container} id={id}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{ titulo }</h2>
            <img src={iconeFavoritar} alt='Icone favoritar filme' className={styles.favoritar} />
        </div>
    )
}

export default Card;
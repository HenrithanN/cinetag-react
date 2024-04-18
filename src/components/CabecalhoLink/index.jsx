import { Link } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

const Cabecalho = ({url, children}) => {
    return (
        <Link to={url} className={styles.link}>
            { children }
        </Link>
    )
}

export default Cabecalho;
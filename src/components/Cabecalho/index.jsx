import { Link } from 'react-router-dom';
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from '../CabecalhoLink';

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <Link>
                <img src={logo} alt="Logo do Cinetag" />
            </Link>
            <nav>
                <CabecalhoLink to="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink to="">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;
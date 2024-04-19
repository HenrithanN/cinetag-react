import styles from './Favoritos.module.css';
import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import { useFavoritoContext } from 'contextos/Favoritos';

const Favoritos = () => {

    const { favorito } = useFavoritoContext();

    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {
                    favorito.map((item) => {
                        return <Card {...item} id={item.id}/>
                    })
                }
            </section>
        </>
    )
}

export default Favoritos;
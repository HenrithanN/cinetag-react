import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import styles from './Inicio.module.css';
import listaFilmes from 'json/db.json'
const Inicio = () => {
    return (
        <>
            <Banner imagem='home' />
            <Titulo>
                <h1>Um Lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {
                    listaFilmes.map((filme) => {
                        return <Card {...filme} key={filme.id} />
                    })
                }
            </section>
        </>
    )
}

export default Inicio;
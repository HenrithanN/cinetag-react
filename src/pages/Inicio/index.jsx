import Banner from 'components/Banner';
import Cabecalho from 'components/Cabecalho';
import Card from 'components/Card';
import Rodape from 'components/Rodape';
import Titulo from 'components/Titulo';
import styles from './Inicio.module.css';
import listaFilmes from 'json/db.json'
const Inicio = () => {
    return (
        <>
            <Cabecalho />
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
            <Rodape />
        </>
    )
}

export default Inicio;
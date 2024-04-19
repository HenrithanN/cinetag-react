import Titulo from 'components/Titulo';
import styles from './Player.module.css';
import Banner from 'components/Banner';
import { useParams } from 'react-router-dom';
import listaFilmes from 'json/db.json'

const Player = () => {

    const params = useParams();
    const filmeSelecionado = listaFilmes.find((filme) => filme.id === Number(params.id));


    if (!filmeSelecionado) {
        return <h1>Nao encontrado</h1>
    }

    return (
        <>
            <Banner imagem='player' />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={filmeSelecionado.link}
                    title={filmeSelecionado.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;
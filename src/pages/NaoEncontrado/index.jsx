import styles from './NaoEncontrado.module.css';

const NaoEncontrada = () => {
    return (
        <section className={styles.container}>
            <h1>Ops</h1>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;
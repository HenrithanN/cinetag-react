import styles from './Rodape.module.css';

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <h2>Desenvolvido por: 
                <a href="https://github.com/henrithanN" rel='noreferrer' target='_blank'>
                    @HenrithanN
                </a>    
            </h2>
        </footer>
    )
}

export default Rodape;
import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

const Inicio = () => {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um Lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Card id={1} titulo='Teste' capa='https://github.com/henrithanN.png'></Card>
            <Rodape />
        </>
    )
}

export default Inicio;
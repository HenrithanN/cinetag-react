import Favoritos from 'pages/Favoritos';
import Inicio from 'pages/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Container from 'components/Container';

const AppRoutes = () => {
    return(
        <>
        <BrowserRouter>
            <Cabecalho />
                <Container>
                    <Routes>
                        <Route path="/" element={<Inicio />} ></Route>
                        <Route path="/Favoritos" element={<Favoritos />} ></Route>
                    </Routes>
                </Container>
            <Rodape />
        </BrowserRouter>
        </>
    )
}

export default AppRoutes;
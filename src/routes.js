import Favoritos from 'pages/Favoritos';
import Inicio from 'pages/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Container from 'components/Container';
import FavoritosProvider from 'contextos/Favoritos';
import Player from 'pages/Player';

const AppRoutes = () => {
    return(
        <>
        <BrowserRouter>
            <Cabecalho />
                <Container>
                    <FavoritosProvider>
                        <Routes>
                            <Route path="/" element={<Inicio />} ></Route>
                            <Route path="/Favoritos" element={<Favoritos />} ></Route>
                            <Route path="/Player/:id" element={<Player />} ></Route>
                        </Routes>
                    </FavoritosProvider>
                </Container>
            <Rodape />
        </BrowserRouter>
        </>
    )
}

export default AppRoutes;
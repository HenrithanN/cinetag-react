import Favoritos from 'pages/Favoritos';
import Inicio from 'pages/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Player from 'pages/Player';
import NaoEncontrada from 'pages/NaoEncontrado';
import PaginaBase from 'pages/PaginaBase';

const AppRoutes = () => {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />} >
                    <Route index element={<Inicio />} ></Route>
                    <Route path="Favoritos" element={<Favoritos />} ></Route>
                    <Route path="Player/:id" element={<Player />} ></Route>
                    <Route path="*" element={<NaoEncontrada />} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default AppRoutes;
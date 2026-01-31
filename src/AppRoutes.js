import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from 'paginas/Inicio/Inicio'
import Sobre from 'paginas/Sobre/Sobre';
import PaginaNaoEncontrada from './paginas/PaginaNaoEncontrada/PaginaNaoEncontrada';
import Menu from 'paginas/Menu/Menu';

function AppRoutes() {
  return (
    <BrowserRouter   >
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;

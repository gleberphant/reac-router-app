import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from 'paginas/Inicio/Inicio'
import Sobre from 'paginas/Sobre/Sobre';
import PaginaNaoEncontrada from './paginas/PaginaNaoEncontrada/PaginaNaoEncontrada';
import Menu from 'componentes/Menu/Menu';
import Rodape from 'componentes/Rodape/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao/PaginaPadrao';


export default function AppRoutes() {
  return (
    <BrowserRouter   >
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<PaginaPadrao></PaginaPadrao>}>
          <Route path="/" element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Route>

      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}


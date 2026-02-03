import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutPadrao from 'componentes/LayoutPadrao/LayoutPadrao';
import Inicio from 'paginas/Inicio/Inicio'
import Sobre from 'paginas/Sobre/Sobre';
import Post from 'paginas/Post/Post';
import PaginaNaoEncontrada from './paginas/PaginaNaoEncontrada/PaginaNaoEncontrada';


export default function Rotas() {
  return (
    <BrowserRouter   >

      <Routes>
        <Route path='/' element={<LayoutPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="post/:id" element={<Post />}/>
          <Route path="sobre" element={<Sobre />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}


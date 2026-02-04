import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutPadrao from 'componentes/LayoutPadrao/LayoutPadrao';
import Inicio from 'paginas/Inicio/Inicio'
import Sobre from 'paginas/Sobre/Sobre';
import Post from 'paginas/Post/Post';
import PaginaNaoEncontrada from './paginas/PaginaNaoEncontrada/PaginaNaoEncontrada';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function Rotas() {
  return (
    <BrowserRouter   >
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<LayoutPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="post"  >
            <Route path=':id' element={<Post />} ></Route>
          </Route>

        </Route>



        <Route path="*" element={<PaginaNaoEncontrada />} ></Route>

      </Routes>

    </BrowserRouter>
  )
}


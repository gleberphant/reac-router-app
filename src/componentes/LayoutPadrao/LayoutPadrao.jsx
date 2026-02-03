import { Outlet } from 'react-router-dom'
import Rodape from 'componentes/Rodape/Rodape'
import Menu from 'componentes/Menu/Menu'

export default function LayoutPadrao() {
    return (<>
        <header>
            <Menu></Menu>
        </header>
        <main>
            <Outlet />
        </main>
        <footer >
            <Rodape />
        </footer>
    </>
    )
}
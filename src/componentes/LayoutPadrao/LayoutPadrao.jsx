import { Outlet } from 'react-router-dom'
import Rodape from 'componentes/Rodape/Rodape'
import Menu from 'componentes/Menu/Menu'
import Banner from 'componentes/Banner/Banner'




export default function LayoutPadrao() {
    return (<>
    
        <header>
            <Menu></Menu>
            <Banner></Banner>
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
import { Outlet } from 'react-router-dom'
import Banner from 'componentes/Banner/Banner'

export default function PaginaPadrao(){
    return(
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}
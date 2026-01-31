import MenuLink from "../MenuLink/MenuLink";
import styles from './Menu.module.css'

export default function Menu() {

 

    return (
        <>
            <header>
                <nav className={styles.navegacao}>
                    <MenuLink to='/'> Inicio </MenuLink>

                    <MenuLink to='/sobre'> Sobre </MenuLink>
                </nav>
            </header>
        </>
    )

}
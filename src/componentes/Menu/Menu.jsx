import MenuLink from "../MenuLink/MenuLink";
import styles from './Menu.module.css'

export default function Menu() {
    return (
        <nav className={styles.navegacao}>
            <MenuLink to='/'> Inicio </MenuLink>

            <MenuLink to='/sobre'> Sobre </MenuLink>
            <a href='api/'>API</a>
        </nav>
    )

}
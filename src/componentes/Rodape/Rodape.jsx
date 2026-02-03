import styles from "./Rodape.module.css"
import { ReactComponent as GravatinhaSVG } from 'assets/gravatinha_marca.svg'
export default function Rodape() {

    return (
        <div className={styles.rodape} >
        <GravatinhaSVG />
            Desenvolvido por Gravatinha
        </div>
    )
}
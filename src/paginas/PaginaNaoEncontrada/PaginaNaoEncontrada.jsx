import BotaoPrincipal from "componentes/BotaoPrincipal/BotaoPrincipal"
import styles from "./PaginaNaoEncontrada.module.css"
import erro404 from "assets/erro_404.png"
import Menu from "componentes/Menu/Menu"
import { useNavigate } from "react-router-dom"
import Rodape from "componentes/Rodape/Rodape"

export default function PaginaNaoEncontrada() {
    const navegar = useNavigate()
    return (
        <>
                <header>
                    <Menu></Menu>
                    
                </header>
            <div className={styles.conteudoContainer}>
                <span>
                    404
                </span>
                <h1 className={styles.titulo}>
                    Ops..... Página não encontrata
                </h1>
                <p className={styles.paragrafo}>
                    Tem certeza que era isso que procurava?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde um momento e recarregue página ou procure outro endereço
                </p>
                <div className={styles.botaoContainer}
                    onClick={() => navegar(-1)}>
                    <BotaoPrincipal tamanho='lg'> Voltar </BotaoPrincipal>
                </div>

                <img
                    className={styles.imagem404}
                    src={erro404}
                    alt=''></img>
            </div>
            <div className={styles.espacoEmBranco}></div>
            <header>
                    <Rodape />
                    
                </header>
        </>
    )
}
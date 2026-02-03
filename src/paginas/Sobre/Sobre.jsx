
import styles from "./Sobre.module.css"

import PostModelo from "componentes/PostModelo/PostModelo";

import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.jpg"

export default function Sobre() {

    return (
        <>
            <PostModelo
                fotoCapa={fotoCapa}
                titulo="Sobre mim">

                <h3 className={styles.subtitulo}> Ola, sou Gravatinha</h3>

                <img
                    src={fotoSobreMim}
                    alt=''
                    className={styles.fotoSobreMim}
                />
                <p>
                    Experienced Product Manager and Software Developer with a strong foundation in data analysis , project management and leadership, acquired since 2005 in the Military Police Service . My objective is to combine this robust background with my passion for technology to drive innovation and efficiency.
                </p>
                <p>
                    I hold a Master of Laws with a focus on Artificial Intelligence (LLM in AI ) and continuously enhancing my technical skills with GOLANG and SQL. I am adept at leading teams, managing complex projects, and utilizing data to inform strategic decisions.
                </p>
                <p>
                    I am Lifelong learner seeking opportunities to apply my unique blend of skills and experience to contribute to a dynamic and forward-thinking organization.
                </p>
            </PostModelo>
        </>
    )

}
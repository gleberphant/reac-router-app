import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
//import minhaFoto from 'assets/minha_foto.png'
export default function Banner() {


    const minhaFoto = 'http://github.com/gleberphant.png'

    return (
        <>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}>
                        Título
                    </h1>
                    <p className={styles.paragrafo}>
                        Texto do banner
                    </p>
                </div>
                <div className={styles.imagens}>
                    <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt='' />
                    <img className={styles.minhaFoto} src={minhaFoto} aria-hidden={true} alt='' />
                </div>
            </div>
        </>
    )
}
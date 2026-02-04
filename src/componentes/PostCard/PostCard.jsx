import styles from './PostCard.module.css'
import { Link } from 'react-router-dom'
import BotaoPrincipal from "componentes/BotaoPrincipal/BotaoPrincipal"

export default function PostCard({ post }) {

    return (
        <>
            <Link to={`/post/${post.id}`} >
                <div className={styles.post}>
                    <img className={styles.capa} src={`/posts/${post.id}/capa.png`} alt='' />
                    <h2 className={styles.titulo}>{post.titulo}</h2>

                    <BotaoPrincipal> LER </BotaoPrincipal>

                </div>
            </Link>
        </>
    )
}
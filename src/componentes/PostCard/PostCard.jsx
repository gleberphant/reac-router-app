import styles from './PostCard.module.css'
import {Link} from 'react-router-dom'

export default function PostCard({ post }) {

    return (
        <>
            <Link to={`/Post/${post.id}`} >
                <div className={styles.post}>
                    <img
                        className={styles.capa}
                        src={`/posts/${post.id}/capa.png`}
                        alt='' />
                    <h2 className={styles.titulo}>{post.titulo}</h2>

                    <button className={styles.botaoLer}>Ler</button>
                </div>
            </Link>
        </>
    )
}
import { Navigate, useNavigate, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import PostModelo from "componentes/PostModelo/PostModelo"
import PostCard from "componentes/PostCard/PostCard"
import styles from "./Post.module.css"

import Posts from "json/posts.json"



function CarrosselPostsRecomendados({ postsRecomendados }) {
    return (
        <div>
            <h2 className={styles.tituloOutrosPosts}> Outros assuntos que você poderá gostar</h2>

            <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((p, i) => <PostCard key={i} post={p} />)}
            </ul>
        </div>
    )
}

export default function Post() {

    const parametros = useParams()

    const post = Posts.find((p) => p.id === Number(parametros.id))

    const recomendados = Posts.filter((p) => p.id !== Number(parametros.id)).slice(0, 4)



    if (!post) return <Navigate to="/404" replace />
    else return (
        <><div className={styles.PostMarkdownContainer}>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}.png`}
                titulo={post.titulo}>

                <ReactMarkdown>{post.texto}</ReactMarkdown>

            </PostModelo>

            <CarrosselPostsRecomendados postsRecomendados={recomendados} />
        </div>
        </>

    )
}
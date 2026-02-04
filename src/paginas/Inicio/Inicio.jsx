import PostCard from 'componentes/PostCard/PostCard'

import styles from './Inicio.module.css'

import posts from 'json/posts.json'
import Banner from 'componentes/Banner/Banner'

export default function Inicio() {

    return (
        <>
            {/* <Banner /> */}
            <ul className={styles.posts}>
                {posts.map((post, indice) => <PostCard key={indice} post={post} />)}
            </ul></>
    )

}
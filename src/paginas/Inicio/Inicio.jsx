import Post from 'componentes/Post/Post'

import styles from './Inicio.module.css'

import posts from 'json/posts.json'

export default function Inicio() {

    return (
        <>
            
            <ul className={styles.posts}>
                {posts.map((post) => <Post post={post} />)}
            </ul></>
    )

}
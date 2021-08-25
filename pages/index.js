import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const data = fetch('http://jsonplaceholder.typicode.com/posts?_limit=4')
                  .then(r => r.json())
                  .then(data => setPosts(data))
  }, [])

  return (<>
    <Head>
      <title>Mon super blog</title>
    </Head>
    <ul>
      {
        posts.map(post => 
          <li key={post.id}>
            <h3>{post.title}</h3>
          </li>
        )
      }
    </ul>
  </>)
}

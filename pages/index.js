import Head from 'next/head'
import Game from '../components/game'
import styles from '../styles/Home.module.css'

export default function Home() {

    // start
    return (
        <div className={styles.container}>
            <Head>
                <title>Numbers</title>
                <meta name="description" content="Numbers game on React"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Game />
        </div>
    )
}


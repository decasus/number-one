import Head from 'next/head'
import Game from '../components/game'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Numbers</title>
                <meta name="description" content="Numbers game on React"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;900&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Game />
        </div>
    )
}


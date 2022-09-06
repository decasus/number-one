import Head from 'next/head'
import Game from "../components/game/game";
import Tutorial from "../components/tutorial/tutorial";
import Results from "../components/results/results";
import {useState} from "react";


export default function Home() {
    const [state, setState] = useState(0);
    const [score, setScore] = useState(0);

    const showResults = (score) => {
        setScore(score);
        setState(2);
    }

    return (
        <div>
            <Head>
                <title>Numbers</title>
                <meta name="description" content="Numbers game on React"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {state === 0 && <Tutorial startGame={() => setState(1)} />}
            {state === 1 && <Game showResults={showResults} />}
            {state === 2 && <Results startGame={() => setState(1)} score={score}/>}
        </div>
    )
}
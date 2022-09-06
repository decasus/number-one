import Head from 'next/head'
import Game from "../components/game/game";
import Tutorial from "../components/tutorial/tutorial";
import Results from "../components/results/results";
import {useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";

export default function Home() {
    const [stage, setStage] = useState(0);
    const [score, setScore] = useState(0);

    const showResults = (score) => {
        setScore(score);
        setStage(2);
    }

    return (
        <div className="game">
            <SwitchTransition>
                <CSSTransition key={stage} timeout={500} classNames="animate">
                    <div>
                        {stage === 0 && <Tutorial startGame={() => setStage(1)}/>}
                        {stage === 1 && <Game showResults={showResults}/>}
                        {stage === 2 && <Results startGame={() => setStage(1)} score={score}/>}
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}
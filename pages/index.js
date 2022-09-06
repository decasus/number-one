import Game from "../components/game/game";
import Tutorial from "../components/tutorial/tutorial";
import Results from "../components/results/results";
import {useRef, useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";

export default function Home() {
    const [stage, setStage] = useState("tutorial");
    const [score, setScore] = useState(0);

    const showResults = (score) => {
        setScore(score);
        setStage("results");
    }

    const nodeRef = useRef(null);

    return (
        <div className="game">
            <SwitchTransition>
                <CSSTransition nodeRef={nodeRef} key={stage} timeout={500} classNames="switch">
                    <div ref={nodeRef}>
                        {stage === "tutorial" && <Tutorial startGame={() => setStage("game")}/>}
                        {stage === "game" && <Game showResults={showResults}/>}
                        {stage === "results" && <Results startGame={() => setStage("game")} score={score}/>}
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}
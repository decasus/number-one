import GameTask from "../task/task";
import GameItems from "../items/items";
import {tutorialValues} from "../../constants/constants";

const Tutorial = ({startGame}) => {
    return (
            <div className="tutorial" onClick={startGame}>
                <GameTask value={75}/>
                <GameItems values={tutorialValues} level={1} handler={startGame}/>
                <div className="tutorial__arm"></div>
                <div className="tutorial__text">
                    Нажмите на экран,<br/>чтобы продолжить
                </div>
            </div>
    );
};

export default Tutorial;

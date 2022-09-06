import GameMenu from "../menu/menu";
import GameTask from "../task/task";
import GameItems from "../items/items";

const Tutorial = ({startGame}) => {
    return (
        <div className="game">
            <GameTask value={75}/>
            <GameItems values={[75, 1, 35, 12, 885, 40]} level={0} handler={startGame}/>
            <div className="game__text" >
                Нажмите на экран,<br/>чтобы продолжить
            </div>
        </div>
    );
};

export default Tutorial;

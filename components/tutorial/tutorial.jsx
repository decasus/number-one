import GameMenu from "../menu/menu";
import GameTask from "../task/task";
import GameItems from "../items/items";
const Tutorial = ({startGame}) => {

    return (
        <div className="game">
            <div className="tutorial">
                <GameTask value={75}/>
                <GameItems values={[75, 1, 35, 12, 885, 40]} level={0} handler={startGame} tutorial={true}/>
                <div className="tutorial__arm"></div>
                <div className="game__text">
                    Нажмите на экран,<br/>чтобы продолжить
                </div>
            </div>
        </div>
    );
};

export default Tutorial;

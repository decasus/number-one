import Number from "../number/number";
import {colors, itemSizes, tutorialColors} from "../../constants/constants";

const GameItems = ({values, handler, level, tutorial}) => {
    return (
        <div className="game__items">
            {values.map((item, index) => {
                const numColor = getRandomElem(colors);
                return (<Number
                    key={index}
                    handler={handler}
                    index={index}
                    value={item}
                    size={itemSizes[level]}
                    animated={level > 1 && true}
                    color={tutorial ? tutorialColors[index] : numColor}
                    disabled={tutorial && index > 0}
                />)
            })}
        </div>
    );
};

function getRandomElem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export default GameItems;

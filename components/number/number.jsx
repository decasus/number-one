import {animations, colors} from "../../constants/constants";
import {memo} from "react";

const Number = ({animated, value, size, handler}) => {
        const numColor = `game__item_${getRandomElem(colors)}`; // use memo
        const numSize = `game__item_size-${size}`;
        const numAnim = animated ? `game__item_${getRandomElem(animations)}` : '';
        return (
            <button className={`game__item ${numColor} ${numSize} ${numAnim}`} onClick={handler}>
                <span className="game__item-inner">{value}</span>
            </button>
        );
    }

function getRandomElem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export default memo(Number);

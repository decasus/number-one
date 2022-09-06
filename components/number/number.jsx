import {animations, colors} from "../../constants/constants";
import {useMemo} from "react";

const Number = ({animated, value, size, handler}) => {

        const numColor = useMemo(() => {
            return `game__item_${getRandomElem(colors)}` // use memo
        }, [value]);

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

export default Number;

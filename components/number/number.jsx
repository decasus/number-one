import {animations, colors} from "../../constants/constants";
import {useMemo} from "react";

const Number = ({animated, value, size, handler, index}) => {

    return useMemo(() => {
        const numColor = `number_${getRandomElem(colors)}`;
        const numSize = `number_size-${size}`;
        const numAnim = animated ? `number_${getRandomElem(animations)}` : '';
        return (
            <button className={`number ${numColor} ${numSize} ${numAnim}`} onClick={() => handler(index)}>
                <span className="number__inner">{value}</span>
            </button>
        );
    }, [value])

}

function getRandomElem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export default Number;

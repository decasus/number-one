import {animations} from "../../constants/constants";

const Number = ({animated, value, size, handler, index, color, disabled}) => {
    const numSize = `number_size-${size}`;
    const numAnim = animated ? `number_${getRandomElem(animations)}` : '';
    const numDisabled = disabled ? 'number_disabled' : '';
    return (
        <button className={`number number_${color} ${numSize} ${numAnim} ${numDisabled}`} onClick={() => handler(index)}>
            <span className="number__inner">{value}</span>
        </button>
    );
}

function getRandomElem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export default Number;

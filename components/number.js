import styles from '../styles/Number.module.scss';

const colors = ['green', 'blue', 'purple', 'pink', 'orange'];
const animations = ['scale', 'blink', 'rotate'];

const Number = (props) => {
    const color = styles[`game__item_${getRandomElem(colors)}`]; // use memo    react transition
    const size = styles[`game__item_size-${props.size}`];
    const anim = props.animated ? styles[`game__item_${getRandomElem(animations)}`] : '';
    return (
        <button className={`${styles.game__item} ${color} ${size} ${anim}`} onClick={props.handler}>
            <span className={styles['game__item-inner']}>{props.value}</span>
        </button>
    );
};

function getRandomElem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
export default Number;

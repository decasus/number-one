import styles from '../styles/Number.module.scss';

const colors = ['green', 'blue', 'purple', 'pink', 'orange'];

const Number = (props) => {
    const color = styles[`game__item_${getRandomElem(colors)}`];
    return (
        <button className={`${styles.game__item} ${color}`} onClick={props.handler}>{props.value}</button>
    );
};

function getRandomElem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
export default Number;

import styles from "../styles/Items.module.scss";
import Number from "./number";

const itemSizes = [1, 1, 1, 2, 2, 3, 4, 4, 4];

const GameItems = (props) => {
    return (
        <div className={`${styles['game__items']} ${styles['game__items_ng-enter']}`}>
            {props.values.map((item, index) => {
                return (<Number
                    key={index}
                    handler={() => props.handler(index)}
                    value={item}
                    size={itemSizes[props.level]}
                    animated={props.level > 1 && true}
                />)
            })}
        </div>
    );
};

export default GameItems;

import Number from "../number/number";
import {itemSizes} from "../../constants/constants";

const GameItems = ({values, handler, level}) => {
    return (
        <div className="game__items">
            {values.map((item, index) => {
                return (<Number
                    key={index}
                    handler={handler}
                    index={index}
                    value={item}
                    size={itemSizes[level]}
                    animated={level > 1 && true}
                />)
            })}
        </div>
    );
};

export default GameItems;

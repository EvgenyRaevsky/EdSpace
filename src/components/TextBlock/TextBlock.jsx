import { list } from "../../assets/data";
import ok from "../../assets/images/ok.svg";
import "./TextBlock.css";

export const TextBlock = () => {
    return (
        <div className="text-component">
            {list.map((el, i) => {
                return <div className="text-component__item" key={i}>
                    <p className="text-component__name">{el}</p>
                    <img src={ok} alt="Ок" />
                </div>
            })}
        </div>
    )
}
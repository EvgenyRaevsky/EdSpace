import { Button } from "../Button/Button";
import "../Banner/Banner.css";
import "./CardItem.css";

export const CardItem = ({ card, isTryFree, setIsModal }) => {
    return (
        <div className="banner">
            <div className="banner__left-block">
                <h1 className="banner__title">{card.title}</h1>
                <p className="banner__text">{card.text}</p>
                <Button
                    text={"Попробовать бесплатно"}
                    setIsModal={setIsModal}
                    isTryFree={isTryFree}
                />
            </div>
            <div className="banner__right-block card-item-img">
                <img src={card.image} alt="Фото" />
            </div>
        </div>
    )
}
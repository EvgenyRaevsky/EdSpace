import "./Card.css";
import { cardCol, cardRow } from "../../assets/data";
import { NavLink } from "react-router-dom";

export const Card = ({ type }) => {
    return (
        <>
            {type === "row" && <div className="card-wrapper card-wrapper-row">
                {cardRow.map((el, i) => {
                    return <div className="card card-row" key={i}>
                        <div className="card__img">
                            <img src={el.image} alt="Фото" />
                        </div>
                        <div className="card__description">
                            <h2 className="card__title">{el.title}</h2>
                            <p className="card__text">{el.text}</p>
                        </div>
                    </div>
                })}
            </div>}
            {type === "col" && <div className="card-wrapper card-wrapper-col">
                {cardCol.map((el, i) => {
                    return <NavLink to={`/Возможности/${el.title}`} className="card card-col" key={i}>
                        <span className="card__img">
                            <img src={el.image} alt="Фото" />
                        </span>
                        <span className="card__description">
                            <span className="card__title">{el.title}</span>
                            <span className="card__text">{el.text}</span>
                        </span>
                    </NavLink>
                })}
            </div>}
        </>
    )
}
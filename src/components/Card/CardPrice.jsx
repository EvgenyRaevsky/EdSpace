import { price } from "../../assets/data";
import "./CardPrice.css";

export const CardPrice = () => {
    return (
        <div className="card-price-wrapper">
            <h2 className="card-price-wrapper__title">Тарификация</h2>
            <div className="card-price-container">
                {
                    price.map((el, i) => {
                        return <div className="card-price-block" key={i}>
                            <h3 className="card-price-block__title">{el.title}</h3>
                            <p className="card-price-block__info">{el.info}</p>
                            <p className="card-price-block__people">{el.people}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
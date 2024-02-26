import "./Location.css";
import vk from "../../assets/images/vk.svg";
import tg from "../../assets/images/tg.svg";

export const Location = () => {
    return (
        <div className="contacts-wrapper">
            <div className="contacts">
                <div className="contacts-block">
                    <h2 className="contacts-block__title">Ed Space</h2>
                    <p className="contacts-block__text">Москва, улица Лазо, 12</p>
                </div>
                <div className="contacts-block">
                    <h2 className="contacts-block__title">Время работы</h2>
                    <p className="contacts-block__text contacts-block__text_gray">Пн-Пт: 10:00 - 19:00</p>
                    <p className="contacts-block__text contacts-block__text_gray">Сб-Вс: 10:00 - 18:00</p>
                </div>
                <div className="contacts-block">
                    <h2 className="contacts-block__title">Звоните нам</h2>
                    <a className="contacts-block__link" href="">+7 (999) 876-54-32</a>
                    <a className="contacts-block__link" href="">+7 (999) 876-54-32</a>
                </div>
                <div className="contacts-block contacts-block_row">
                    <h2 className="contacts-block__title">Напишите нам</h2>
                    <a className="contacts-block__link" href="https://vk.com"><img src={vk} alt="Вк" /></a>
                    <a className="contacts-block__link" href="https://web.telegram.org"><img src={tg} alt="Тг" /></a>
                </div>
                <div className="contacts-block">
                    <h2 className="contacts-block__title">Приезжайте</h2>
                    <p className="contacts-block__text contacts-block__text_geo contacts-block__text_geo-yellow">Перово 1,41 км</p>
                    <p className="contacts-block__text contacts-block__text_geo contacts-block__text_geo-yellow">Шоссе Энтузиастов 2,42 км</p>
                    <p className="contacts-block__text contacts-block__text_geo contacts-block__text_geo-red">Шоссе Энтузиастов 2,75 км</p>
                </div>
            </div>
            <div className="map">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aee3335cf4b9a5144ae942fc22662930836897c46509d3dc0ce473d05f5263bcd&amp;source=constructor" className="map__frame"></iframe>
            </div>
        </div>
    )
}
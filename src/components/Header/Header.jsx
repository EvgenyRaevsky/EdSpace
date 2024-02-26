import "./Header.css";
import down from "../../assets/images/down.svg";
import logo from "../../assets/images/logo.svg";
import burger from "../../assets/images/burger.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
    const [nav, setNav] = useState(false);

    const openNavigation = () => {
        setNav(true);
    };

    const closeNavigation = () => {
        setNav(false);
    };

    return (
        <div className="header-wrapper">
            <header className="header">
                <img src={logo} alt="Лого" />
                <ul className="header__nav">
                    <li className="header__item"><NavLink to="/" className="header__link header__link_one">Возможности</NavLink></li>
                    <li className="header__item"><NavLink to="/Стоимость" className="header__link header__link_two">Стоимость</NavLink></li>
                    <li className="header__item"><NavLink to="/Контакты" className="header__link header__link_three">Контакты</NavLink></li>
                </ul>
                <div className="header__lang">
                    <p className="header__lang-name">RU</p>
                    <img src={down} alt="Развернуть" />
                </div>
            </header>
            <header className="header-mobile">
                <img src={logo} alt="Лого" />
                <ul className={`header__nav header-mobile__nav-${nav}`}>
                    <li className="header__item"><NavLink to="/" className="header__link header__link_one">Возможности</NavLink></li>
                    <li className="header__item"><NavLink to="/Стоимость" className="header__link header__link_two">Стоимость</NavLink></li>
                    <li className="header__item"><NavLink to="/Контакты" className="header__link header__link_three">Контакты</NavLink></li>
                    <span className="header__item-hidden"><img src={down} alt="Скрыть" onClick={closeNavigation} /></span>
                </ul>
                <div className="header__lang header__lang_burger">
                    <img src={burger} alt="Развернуть" onClick={openNavigation} />
                </div>
            </header>
        </div>
    )
}
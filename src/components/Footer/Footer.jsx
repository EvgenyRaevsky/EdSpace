import "./Footer.css";
import { footer } from "../../assets/data";
import logo from "../../assets/images/logo.svg";
import vk from "../../assets/images/vk.svg";
import tg from "../../assets/images/tg.svg";


export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__links">
                <div className="footer__links-img-block">
                    <img src={logo} alt="Лого" />
                </div>
                <div className="footer__links-block">
                    {footer.map((elem, it) => {
                        return <div className="footer__links-item" key={it} ><h3 className="footer__links-title">{elem.name}</h3>{elem.list.map((el, i) => <a className="footer__links-link" href={footer[it].links[i]} key={i}>{el}</a>)}</div>
                    })}
                </div>
            </div>
            <div className="footer__info">
                <p className="footer__info-rules">2022 Ed Space. Все права защищены</p>
                <div className="footer__network-block">
                    <a className="footer__network footer__network_vk" href="https://vk.com"><img src={vk} alt="Вк" /></a>
                    <a className="footer__network footer__network_tg" href="https://web.telegram.org"><img src={tg} alt="Тг" /></a>
                </div>
            </div>
        </div>
    )
}
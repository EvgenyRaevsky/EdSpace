import { useState } from "react";
import cancel from "../../assets/images/cancel.svg";
import logoModal from "../../assets/images/logoModal.svg";
import "./Modal.css"

export const Modal = ({ isModal, setIsModal, setIsTryFree }) => {
    const [nameUser, setNameUser] = useState("");
    const [nameOrganization, setNameOrganization] = useState("");
    const [office, setOffice] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [check, setCheck] = useState(false);

    const closeModal = () => {
        setIsModal(false);
        document.body.style.overflow = "visible";
        setNameUser("");
        setNameOrganization("");
        setOffice("");
        setEmail("");
        setPhone("");
        setCheck(false)
    }

    const rText = /^[a-zа-я,.'-]+$/i;
    const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const rPhone = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

    const toSendModal = () => {
        if (nameUser.split(' ').length === 2 && rText.test(nameUser.split(' ')[0]) && rText.test(nameUser.split(' ')[1]) && nameOrganization && rText.test(office) && rEmail.test(email) && rPhone.test(phone) && check === true) {
            setIsTryFree(true);
            setIsModal(false);
            document.body.style.overflow = "visible";
            console.log({
                "FirstName LastName": nameUser,
                "Name organization": nameOrganization,
                "Post": office,
                "Email": email,
                "Phone": phone
            });
            setNameUser("");
            setNameOrganization("");
            setOffice("");
            setEmail("");
            setPhone("");
            setCheck(false);
        }
    }

    return (
        <div className={`${isModal ? "modal-wrapper active" : "modal-wrapper"}`}
            onClick={() => closeModal()}
        >
            <form
                className="modal"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal__head">
                    <img src={logoModal} alt="Лого" />
                    <img
                        src={cancel} alt="Назад"
                        onClick={() => closeModal()}
                    />
                </div>
                <input
                    className="input"
                    type="text"
                    placeholder="Имя Фамилия"
                    value={nameUser}
                    onChange={(e) => setNameUser(e.target.value)}
                />
                <input
                    className="input"
                    type="text"
                    placeholder="Название организации"
                    value={nameOrganization}
                    onChange={(e) => setNameOrganization(e.target.value)}
                />
                <input
                    className="input"
                    type="text"
                    placeholder="Должность"
                    value={office}
                    onChange={(e) => setOffice(e.target.value)}
                />
                <input
                    className="input"
                    type="email"
                    placeholder="Почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="input"
                    type="phone"
                    placeholder="Телефон"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label className="modal__label">
                    <input
                        className="input"
                        type="checkbox"
                        checked={check}
                        onChange={() => setCheck(!check)}
                    />
                    <p className="modal__label-text">Я согласен на обработку моих <a className="modal__label-link" href="">персональных данных</a></p>
                </label>
                <button
                    className="modal__btn"
                    type="button"
                    onClick={toSendModal}
                >
                    Отправить
                </button>
            </form>
        </div>
    )
}
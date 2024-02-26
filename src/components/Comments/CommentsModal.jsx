import cancel from "../../assets/images/cancel.svg";
import { useState } from "react";
import logoModal from "../../assets/images/logoModal.svg";
import { getRandCommentsImg } from "../../assets/comments";
import { addComments } from "../../store/Comments";
import { useDispatch } from "react-redux";
import "../Modal/Modal.css";

export const CommentsModal = ({ isCommentsModal, setIsCommentsModal }) => {
    const dispatch = useDispatch()

    const getDateNow = new Date();
    getDateNow.setDate(getDateNow.getDate());
    const dateNow = getDateNow.toISOString().substring(0, 10);

    const [nameUser, setNameUser] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [date, setDate] = useState(dateNow);

    const closeCommentsModal = () => {
        setIsCommentsModal(false);
        document.body.style.overflow = "visible";
        setNameUser("");
        setEmail("");
        setText("");
        setDate(dateNow);
    }

    const rText = /^[a-zа-я,.'-]+$/i;
    const rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    const toSendCommentsModal = () => {
        if (nameUser.split(' ').length === 2 && rText.test(nameUser.split(' ')[0]) && rText.test(nameUser.split(' ')[1]) && rEmail.test(email) && text.length > 0) {
            setIsCommentsModal(false);
            document.body.style.overflow = "visible";
            dispatch(addComments({
                firstName: nameUser.split(' ')[0],
                lastName: nameUser.split(' ')[1],
                email: email,
                image: getRandCommentsImg(),
                text: text,
                date: date
            }))
            setNameUser("");
            setEmail("");
            setText("");
            setDate(dateNow);
        }
    };

    return (
        <div className={`${isCommentsModal ? "modal-wrapper active" : "modal-wrapper"}`}
            onClick={() => closeCommentsModal()}
        >
            <form
                className="modal modal-comments"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal__head">
                    <img src={logoModal} alt="Лого" />
                    <img
                        src={cancel} alt="Назад"
                        onClick={() => closeCommentsModal()}
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
                    type="email"
                    placeholder="Почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    className="input textarea"
                    type="date"
                    placeholder="Комментарий"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    className="input"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button
                    className="modal__btn"
                    type="button"
                    onClick={toSendCommentsModal}
                >
                    Сохранить
                </button>
            </form>
        </div>
    )
}
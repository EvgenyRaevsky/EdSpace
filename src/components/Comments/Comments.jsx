import { CommentsModal } from "../Comments/CommentsModal";
import { useState } from "react";
import plus from "../../assets/images/plus.svg";
import { useSelector } from "react-redux";
import "./Comments.css";

export const Comments = () => {
    const [isCommentsModal, setIsCommentsModal] = useState(false);
    const comments = useSelector(state => state.comments.data);

    const openCommentsModal = () => {
        document.body.style.overflow = "hidden";
        setIsCommentsModal(true);
    }

    return (
        <div className="comments-wrapper">
            <CommentsModal
                isCommentsModal={isCommentsModal}
                setIsCommentsModal={setIsCommentsModal}
            />
            <div className="comments comments_center">
                <div className="comments__top-img comments__top-img_center" onClick={openCommentsModal}><img src={plus} alt="Добавить" /></div>
            </div>
            {comments.map((el, i) => {
                return <div className="comments" key={i}>
                    <div className="comments__top">
                        <div className="comments__top-img"><img src={el.image} alt="Фото" /></div>
                        <div className="comments__top-text-block">
                            <p className="comments__top-name">{`${el.firstName} ${el.lastName}`}</p>
                            <p className="comments__top-email">{el.email}</p>
                        </div>
                    </div>
                    <div className="comments__bottom">
                        <p className="comments__bottom-text">{el.text}</p>
                        <p className="comments__bottom-date">{el.date}</p>
                    </div>
                </div>
            })}
        </div>
    )
}
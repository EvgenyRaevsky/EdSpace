import "./Button.css"

export const Button = ({ text, setIsModal, isTryFree }) => {
    const openModal = () => {
        document.body.style.overflow = "hidden";
        setIsModal(true);
    }
    return (
        < button
            disabled={isTryFree}
            className="btn"
            onClick={() => openModal()}
        >
            {text}
        </button >
    )
}
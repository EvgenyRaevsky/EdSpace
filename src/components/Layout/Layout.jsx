import "./Layout.css";

export const Layout = ({ children, st }) => {
    return (
        <div className={`layout ${st}`}>
            {children}
        </div>
    )
}
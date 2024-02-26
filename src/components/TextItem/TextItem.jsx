import "./TextItem.css";

export const TextItem = ({ data, h }) => {
    return (
        <>
            {h === "h2" && <div className="text-wrapper">
                <div className="text-item">
                    <h2 className="text-item__tilte text-item__tilte_h2">{data[0].title}</h2>
                    <p className="text-item__description text-item__description_h2">{data[0].text}</p>
                </div>
                {
                    data.slice(1).map((el, i) => {
                        return <div className="text-item" key={i}>
                            <h3 className="text-item__tilte text-item__tilte_h3">{el.title}</h3>
                            <p className="text-item__description text-item__description_h3">{el.text}</p>
                        </div>
                    })
                }
            </div>}
            {h === "h3" && <div className="text-wrapper">
                {
                    data.map((el, i) => {
                        return <div className="text-item" key={i}>
                            <h3 className="text-item__tilte text-item__tilte_h3">{el.title}</h3>
                            <p className="text-item__description text-item__description_h3">{el.text}</p>
                        </div>
                    })
                }
            </div>}
        </>
    )
}
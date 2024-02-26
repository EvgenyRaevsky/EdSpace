import { Layout } from "../components/Layout/Layout";
import { Footer } from "../components/Footer/Footer";
import { CardItem } from "../components/Card/CardItem";
import { Comments } from "../components/Comments/Comments";
import { cardCol } from "../assets/data";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCommentsFromServer } from "../store/Comments";

export const Possibility = ({ isTryFree, setIsModal }) => {
    const { name } = useParams();
    const comments = useSelector(state => state.comments.data);
    const dispatch = useDispatch()

    const cardFilter = () => {
        return cardCol.filter((el, i) => el.title === name)[0];
    }

    useEffect(() => {
        if (!comments.length) {
            fetch("https://fakerapi.it/api/v1/custom?_quantity=10&firstName=firstName&lastName=lastName&email=email&date=date&text=text")
                .then(res => res.json())
                .then(data => dispatch(getCommentsFromServer(data.data)))
        }
    }, [])

    return (
        <>
            <Layout st="layout_bg-after">
                <CardItem
                    card={cardFilter()}
                    isTryFree={isTryFree}
                    setIsModal={setIsModal}
                />
            </Layout>
            <Layout st="layout_bgColor">
                <h2 className="layout__title layout__title_light layout__title_left mb-5">Описание</h2>
                <ul className="layout-possibiliy__nav">
                    {cardFilter().possibility.map((el, i) => {
                        return <li className="layout-possibiliy__item" key={i}>{el}</li>
                    })}
                </ul>
            </Layout>
            <Layout st="layout_bg-before-after">
                <h2 className="layout__title layout__title_dark mb-5">Комментарии</h2>
                <Comments />
            </Layout>
            <Footer />
        </>
    )
}
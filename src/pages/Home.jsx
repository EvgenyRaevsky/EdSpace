import { Layout } from "../components/Layout/Layout";
import { Card } from "../components/Card/Card";
import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer";
import { Button } from "../components/Button/Button";
import { TextBlock } from "../components/TextBlock/TextBlock";
import { TextItem } from "../components/TextItem/TextItem";
import { firstTextBlock } from "../assets/data";
import { secondTextBlock } from "../assets/data";

export const Home = ({ isTryFree, setIsModal }) => {

    return (
        <>
            <Layout st="layout_bg-after">
                <Banner
                    setIsModal={setIsModal}
                    isTryFree={isTryFree}
                />
            </Layout>
            <Layout st="layout_bgColor">
                <h2 className="layout__title layout__title_light layout__title_left mb-5">Точно подойдет для:</h2>
                <Card type="row" />
                <Button
                    text="Попробовать бесплатно"
                    setIsModal={setIsModal}
                    isTryFree={isTryFree}
                />
            </Layout >
            <Layout st="layout_bg-before-after">
                <h2 className="layout__title layout__title_dark">Возможности Ed Space</h2>
                <p className="layout__text">Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка.</p>
                <Card type="col" />
                <Button
                    text="Попробовать бесплатно"
                    setIsModal={setIsModal}
                    isTryFree={isTryFree}
                />
            </Layout>
            <Layout st="layout_bgImage">
                <h2 className="layout__title layout__title_light mb-2">Выбирайте Ed Space сегодня и вы получите</h2>
                <TextBlock />
                <TextItem data={firstTextBlock} h={"h2"} />
                <Button
                    text="Попробовать бесплатно"
                    setIsModal={setIsModal}
                    isTryFree={isTryFree}
                />
                <h2 className="text-item__tilte text-item__tilte_h2 mb-3">Точно подойдет для:</h2>
                <TextItem data={secondTextBlock} h={"h3"} />
            </Layout>
            <Footer />
        </>
    )
}
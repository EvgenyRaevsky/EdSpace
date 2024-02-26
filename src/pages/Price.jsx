import { Layout } from "../components/Layout/Layout";
import { Button } from "../components/Button/Button";
import { TextBlock } from "../components/TextBlock/TextBlock";
import { TextItem } from "../components/TextItem/TextItem";
import { Footer } from "../components/Footer/Footer";
import { CardPrice } from "../components/Card/CardPrice";
import { firstTextBlock } from "../assets/data";
import { secondTextBlock } from "../assets/data";

export const Price = ({ setIsModal, isTryFree }) => {
    return (
        <>
            <Layout>
                <CardPrice />
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
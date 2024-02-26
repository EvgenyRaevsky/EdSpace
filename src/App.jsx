import { Routes, Route } from "react-router";
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";
import { Home } from "./pages/Home";
import { Price } from "./pages/Price";
import { Contacts } from "./pages/Contacts";
import { Possibility } from "./pages/Possibility";
import { useState } from "react";
import ScrollToTop from "./scrollToTop";

export const App = () => {
    const [isTryFree, setIsTryFree] = useState(false);
    const [isModal, setIsModal] = useState(false)

    return (
        <>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home
                    isTryFree={isTryFree}
                    setIsModal={setIsModal}
                />} />
                <Route path="/Стоимость" element={<Price
                    isTryFree={isTryFree}
                    setIsModal={setIsModal}
                />} />
                <Route path="/Контакты" element={<Contacts />} />
                <Route path="/Возможности/:name" element={<Possibility
                    isTryFree={isTryFree}
                    setIsModal={setIsModal}
                />} />
            </Routes>
            <Modal
                isModal={isModal}
                setIsModal={setIsModal}
                setIsTryFree={setIsTryFree}
            />
        </>
    );
}

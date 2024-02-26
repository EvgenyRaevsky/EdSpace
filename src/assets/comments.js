import c1 from "../assets/comments-images/kot_17427.jpg";
import c2 from "../assets/comments-images/kot_v_kolchuge.jpg";
import c3 from "../assets/comments-images/kotenok_zevaet.jpg";
import c4 from "../assets/comments-images/multfilm_homyak_18374.jpg";
import c5 from "../assets/comments-images/panda_11097.jpg";
import c6 from "../assets/comments-images/sharf_sobaka_zhivotnye_fotoapparat_34735.jpg";
import c7 from "../assets/comments-images/shlyapa_homyak_8264.jpg";
import c8 from "../assets/comments-images/sobaka_zhivotnye_galstuk_34091.jpg";
import c9 from "../assets/comments-images/zhivotnye_2130.jpg";
import c10 from "../assets/comments-images/zhivotnye_enot_8346.jpg";
import c11 from "../assets/comments-images/zhivotnye_homyak_13681.jpg";
import c12 from "../assets/comments-images/zhivotnye_kot_3334.jpg";
import c13 from "../assets/comments-images/zhivotnye_kot_5953.jpg";
import c14 from "../assets/comments-images/zhivotnye_kot_5999.jpg";
import c15 from "../assets/comments-images/zhivotnye_kot_7058.jpg";
import c16 from "../assets/comments-images/zhivotnye_kot_7367.jpg";
import c17 from "../assets/comments-images/zhivotnye_kot_8767.jpg";
import c18 from "../assets/comments-images/zhivotnye_kot_fotoapparat_17195.jpg";
import c19 from "../assets/comments-images/zhivotnye_kot_igrushka_6172.jpg";
import c20 from "../assets/comments-images/zhivotnye_kot_ten_7077.jpg";
import c21 from "../assets/comments-images/zhivotnye_kot_trava_17642.jpg";
import c22 from "../assets/comments-images/zhivotnye_kot_yazyk_17866.jpg";
import c23 from "../assets/comments-images/zhivotnye_panda_8175.jpg";
import c24 from "../assets/comments-images/zhivotnye_ptica_sova_30254.jpg";
import c25 from "../assets/comments-images/zhivotnye_sobaka_15874.jpg";
import c26 from "../assets/comments-images/zhivotnye_sobaka_8145.jpg";

const commentsImg = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26];

export const getRandCommentsImg = () => {
    const randNum = Math.floor(Math.random() * commentsImg.length);
    return commentsImg[randNum];
}
import s from "./ProductPage.module.scss"
import H3 from "../../../elements/Titles/H3";
import Gallery from "./Gallery/Gallery";
import BuyPanel from "./BuyPanel/BuyPanel";



export default function ProductPage() {
    return (
        <>
            <div className={s.wr}>
                <div className={s.main}>
                    <H3 title={"Гриль SteakMaster REDMOND RGM-M813"} classLocal={s.h3}>
                        <span className={s.code}>
                            Код товара: <strong>R-4183904</strong>
                        </span>
                    </H3>
                    <Gallery/>
                    <BuyPanel/>
                </div>
            </div>
        </>
    )
}
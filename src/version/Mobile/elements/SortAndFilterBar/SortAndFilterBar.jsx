import s from "./SortAndFilterBar.module.scss"
import Button from "../Buttons/Button";

export default function SortAndFilterBar() {
    return (
        <div className={s.wr}>
            <div className={s.sort}>
                <select name="" id="">
                    <option value="">По популярности</option>
                    <option value="">От дорогих к дешёвым</option>
                    <option value="">От дешёвых к дорогим</option>
                </select>
            </div>
            <div className={s.filter}>
                <Button title={'Фильтры'} iconR={'i-filter'} class={s.btn}/>
            </div>
        </div>
    )
}
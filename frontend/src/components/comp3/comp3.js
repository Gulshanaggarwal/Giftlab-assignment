import Carousel from '../carousel/carousel'
import styles from './comp3.module.css'



export default function Comp3({ comp3Data }) {

    return comp3Data ? (
        <div className={styles.container}>
            <Carousel images={comp3Data.images} />
            <select className={styles.select} id="options">
                {
                    comp3Data.options.map((option) => <option key={option} value={option}>{option}</option>)
                }
            </select>
        </div>
    ) : null
}
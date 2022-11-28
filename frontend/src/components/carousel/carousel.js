import styles from "./carousel.module.css"
import { useState } from "react";



export default function Carousel({ images }) {

    const [currImg, setCurrImg] = useState(0);



    const handleDecrement = () => {
        if (currImg === 0) {
            setCurrImg(images.length - 1);
            return;
        }
        setCurrImg(currImg - 1);
    }

    const handleIncrement = () => {
        if (currImg === images.length - 1) {
            setCurrImg(0);
            return;
        }
        setCurrImg(currImg + 1);
    }

    return (
        <div className={styles.container}>
            <div>
                <img src={images[currImg]} className={styles.img} />
            </div>
            <div className={styles.buttonsWrapper}>
                <button className={styles.decButton} onClick={handleDecrement}>&lt;</button>
                <button className={styles.incButton} onClick={handleIncrement}>&gt;</button>
            </div>
        </div>
    )
}
import styles from "./searchbar.module.css"
import { useState, useEffect } from "react"

export const baseURL = "http://localhost:5000/api"


export const handleFetch = async (url) => {

    const response = await fetch(url);
    return await response.json();
}

export default function SearchBar({ setComp3Data }) {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [initialRender, setInitialRender] = useState(true);

    useEffect(() => {
        const url = baseURL + `/product?search=${search}`
        if (!initialRender) {
            const getData = setTimeout(async () => {

                const response = await handleFetch(url);
                console.log(response);
                if (!response.error) {

                    setData(response.data);
                }
            }, 2000)

            return () => clearTimeout(getData);
        }
        if (initialRender) {
            setInitialRender(false)
        }
    }, [search])

    const handleItemClick = (ele) => {
        setComp3Data(ele);
        setData([]);
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.inputWrapper}>
                    <form className={styles.form}>
                        <input className={styles.input} onChange={(e) => setSearch(e.target.value.trim())} value={search} type="text" />
                        <button className={styles.button}>Search</button>
                    </form>
                    {/* show suggestions */}
                    {
                        data.length > 0 && (
                            <ul className={styles.itemWrapper}>
                                {
                                    data.map((ele) => <li onClick={() => handleItemClick(ele)} key={ele.productId} className={styles.item}>
                                        <img src={ele.images[0]} width={20} height={20} />
                                        <p>{ele.name}</p>
                                    </li>)
                                }
                            </ul>
                        )
                    }
                </div>
            </header>
            <p className={styles.note}>Note: To see Component No. 3 you need to click on a  item from search bar suggestions</p>
        </>
    )
}
import styles from "./searchbar.module.css"
import { useState, useEffect } from "react"


export const handleFetch = async (url) => {

    const response = await fetch(url);
    return await response.json();
}

export default function SearchBar() {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {

        const getData = setTimeout(() => {
            const url = "/api"
            const response = handleFetch(url);
            if (!response.error) {
                setData(response.data);
            }
        }, 2000)

        return () => clearTimeout(getData);
    }, [search])




    return (
        <header className={styles.header}>
            <div className={styles.inputWrapper}>
                <form className={styles.form}>
                    <input className={styles.input} onChange={(e) => setSearch(e.target.value.trim())} value={search} type="text" />
                    <button className={styles.button}>Search</button>
                </form>
            </div>
        </header>
    )
}
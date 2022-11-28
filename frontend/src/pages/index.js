import SearchBar, { handleFetch } from "../components/searchbar/searchbar"
import Carousel from "../components/carousel/carousel";
import { baseURL } from "../components/searchbar/searchbar";
import Comp3 from "../components/comp3/comp3";
import { useState } from "react";

export default function Home({ images }) {

  const [comp3Data, setComp3Data] = useState(null);
  return (
    <>
      <SearchBar setComp3Data={setComp3Data} />
      <Carousel images={images} />
      <Comp3 comp3Data={comp3Data} />
    </>
  )
}


export async function getStaticProps() {
  const url = baseURL + '/offer'
  const res = await handleFetch(url)


  return {
    props: {
      images: res.data
    }
  }
}
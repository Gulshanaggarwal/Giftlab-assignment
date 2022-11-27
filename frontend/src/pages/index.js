import SearchBar, { handleFetch } from "../components/searchbar/searchbar"
import Carousel from "../components/carousel/carousel";


export default function Home({ images }) {
  return (
    <>
      <SearchBar />
      <Carousel />
    </>
  )
}


// export async function getStaticProps() {
//   const url = '/api'
//   const res = handleFetch()

//   return {
//     props: {
//       images: res.data
//     }
//   }
// }
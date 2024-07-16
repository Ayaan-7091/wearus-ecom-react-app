import tshirtsData from "../../Data/Tshirts/tshirtsData";
import MainCarousel from "../carousel/HomeCarousel/mainCarousel";
import HomeSectionCarousel from "../carousel/SectionCarousel/HomeSectionCarousel";


export default function Home(){

    return(
        <>
        <MainCarousel/>

       <HomeSectionCarousel data={tshirtsData} title={'WEARUS Exclusives'}/>
       <HomeSectionCarousel data={tshirtsData} title={'Anime'}/>
       <HomeSectionCarousel data={tshirtsData} title={'Cars'}/>


        </>
    )
}
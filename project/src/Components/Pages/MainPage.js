import Achivments from "../HeaderComponents/Achivments";
import MainDescription from "../HeaderComponents/MainDescription";
import Possibilities from "../HeaderComponents/Possibilities";
import Subscriptions from "../HeaderComponents/Subscriptions";
import TracksDescription from "../HeaderComponents/TracksDescription";

const MainPage = () => {
    return (
        <>
            <main className="container`-xxl">
                <MainDescription/>
                <TracksDescription/>
                <Achivments/>
                <Possibilities/>
                <Subscriptions/>
            </main> 
        </>
    )
}

export default MainPage;
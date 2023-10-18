
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";
import About from "./About";
import Info from "./Info";


const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:mx-[200px] mb-[200px]">
                {
                    cards.map(card => <Card key={card.id} cards={card}></Card>)
                }
            </div>
            <Info></Info> 
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;
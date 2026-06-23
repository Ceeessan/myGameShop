import bannerImage from "../assets/banner.jpg";
import ProductCard from "./productcard.jsx";
import "../css/home.css";

export default function Home({ games, handleClickOnProducts }) {
    return (
        <main>
            <div>
                <p id="sale-banner">15% på äventyr-spel! Passa på att fynda!</p>
            </div>
            <div className="img-banner-container">
                <p className="img-banner-text">Hitta ditt nästa spel</p>
                <img src={bannerImage} id="img-front-page" />
            </div>
            <h3 id="popular-games-scroll-text"> Våra populäraste spel </h3>
            <div id="popular-scroll">
                {[...games].sort((a, b) => b.price - a.price).slice(0, 9).map((games, index) => (
                    <ProductCard
                        key={index}
                        title={games.title}
                        img={games.img}
                        price={games.price}
                        id={games.id}
                        handleClickOnProducts={handleClickOnProducts}
                    />
                ))}
            </div>
        </main>
    )
}
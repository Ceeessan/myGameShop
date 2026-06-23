import CartPage from "./cartpage.jsx";
import ThankYouCard from "./thankyoucard.jsx";
import Home from "./home.jsx";
import ProductCard from "./productcard.jsx";
import EmptyCart from "./emptycart.jsx";
import Searchbar from "./searchbar.jsx";

export default function MainPage({ games, whatToShow, setWhatToShow, userArrayWithProducts, setUserArrayWithProducts, handleClickOnProducts, setUserQuantity, setGames, handleGenre, selectedGenre }) {

    const filteredGames = selectedGenre
        ? games.filter(game => game.genre.toLowerCase() === selectedGenre)
        : games;

    return (
        <div className="product-card-space">
            {whatToShow === "ok" && <Home games={games} handleClickOnProducts={handleClickOnProducts} />}
            {whatToShow === 'products' &&
                (<div className="product-container">
                    <div id="search-bar">
                        <Searchbar
                            games={games}
                            handleGenre={handleGenre}
                        />
                    </div>
                    {filteredGames.map((games, index) => (<ProductCard
                        key={index}
                        title={games.title}
                        img={games.img}
                        price={games.price}
                        quantity={games.quantity}
                        id={games.id}
                        games={games}

                        handleClickOnProducts={handleClickOnProducts}
                    />
                    ))} </div>
                )}

            {whatToShow === 'emptyCart' &&
                <EmptyCart
                    setWhatToShow=
                    {setWhatToShow} />}

            {whatToShow === 'cartPage' &&
                <CartPage
                    games={games}
                    setGames={setGames}
                    setWhatToShow=
                    {setWhatToShow}
                    userArrayWithProducts={userArrayWithProducts}
                    setUserArrayWithProducts={setUserArrayWithProducts}
                    setUserQuantity={setUserQuantity}
                />}
            {whatToShow === 'thankYouCard' && <ThankYouCard />}
        </div>
    )
}
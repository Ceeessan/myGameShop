import { useState } from "react";

export default function Searchbar({ handleGenre }) {
    const [activeGenre, setActiveGenre] = useState(null);

    function handleActiveClick(event, genre) {
        setActiveGenre(genre);
        handleGenre(event, genre);
    }

    return (
        <form id="search-bar-text" >
            <button
                className={activeGenre === 'plattform' ? 'search-bar-btn active' : 'search-bar-btn'}
                id="search-bar-btn" onClick={(event) => handleActiveClick(event, 'plattform')}>Plattform</button>

            <button
                className={activeGenre === 'action' ? 'search-bar-btn active' : 'search-bar-btn'}
                id="search-bar-btn" onClick={(event) => handleActiveClick(event, 'action')}>Action</button>

            <button
                className={activeGenre === 'äventyr' ? 'search-bar-btn active' : 'search-bar-btn'}
                id="search-bar-btn" onClick={(event) => handleActiveClick(event, 'äventyr')}>Äventyr</button>

            <button
                className={activeGenre === 'fantasy' ? 'search-bar-btn active' : 'search-bar-btn'}
                id="search-bar-btn" onClick={(event) => handleActiveClick(event, 'fantasy')}>Fantasy</button>

            <button
                className={activeGenre === 'role-play' ? 'search-bar-btn active' : 'search-bar-btn'}
                id="search-bar-btn" onClick={(event) => handleActiveClick(event, 'role-play')}>Role-play</button>
        </form>
    )
}
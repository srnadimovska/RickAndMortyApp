import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favourites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);
  const handleRemove = (id) => {
    const updated = favorites.filter((fav) => fav.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  return (
    <div>
      <h2>Your Favorite Characters</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div>
          {favorites.map((char) => (
            <Link key={char.id} to={`/character/${char.id}`}>
              <div className="character-card">
                <img src={char.image} alt={char.name} />
                <h3>{char.name}</h3>
                <p>{char.species}</p>
                <button onClick={() => handleRemove(char.id)}>Remove</button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites
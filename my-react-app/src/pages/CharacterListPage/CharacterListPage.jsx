import { useDispatch, useSelector} from "react-redux"
import { fetchCharacter } from "../../actions/characterActions"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SearchComponent from "../../components/SearchComponent/SearchComponent"
import { searchCharacter} from "../../actions/characterSearchActions"
import "./CharacterListPage.css"
const CharacterListPage = () => {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState("")

    const { characters, loadingCharacters, error} = useSelector(
        (state) => state.characterReducer
    )
    
    const searchResults = useSelector(
      (state) => state.characterSearchReducer.searchResults);

    const handleSearchTerm = (term) => {
    setSearchTerm(term)
    dispatch(searchCharacter(term))
 }

useEffect(() => {
    dispatch(fetchCharacter())
},[dispatch])
const handleAddToFavorites = (character) => {
  const stored = JSON.parse(localStorage.getItem("favorites")) || [];
  const exists = stored.find((fav) => fav.id === character.id);
  if (!exists) {
    const updated = [...stored, character];
    localStorage.setItem("favorites", JSON.stringify(updated));
  }
}

const characterToShow = searchTerm ? searchResults : characters;

return (
    
    <div lassName="character-list-container">
        <SearchComponent 
        searchTerm={searchTerm} 
        onSearchTerm={handleSearchTerm} />
        <h1>Rick and Morty Characters</h1>

        {loadingCharacters && <p>Loading characters</p>}
        {error && <p>Error:{error}</p>}
        <div className="character-grid">
        {characterToShow.map((char) => (
  <div className="character-card" key={char.id}>
    <Link to={`/character/${char.id}`}>
      <img src={char.image} alt={char.name} />
      <p>{char.species}</p>
      <h3>{char.name}</h3>
    </Link>
    <button onClick={() => handleAddToFavorites(char)}>Add to Favorite</button>
  </div>
))}
        </div>
        
    </div>
)
}

export default CharacterListPage
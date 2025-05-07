import { useDispatch, useSelector} from "react-redux"
import { fetchCharacter } from "../../actions/characterActions"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SearchComponent from "../../components/SearchComponent/SearchComponent"
import { searchCharacter} from "../../actions/characterSearchActions"

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

const characterToShow = searchTerm ? searchResults : characters;

return (
    
    <div>
        <SearchComponent 
        searchTerm={searchTerm} 
        onSearchTerm={handleSearchTerm} />
        <h1>Rick and Morty Characters</h1>

        {loadingCharacters && <p>Loading characters</p>}
        {error && <p>Error:{error}</p>}
        <div>
        {characterToShow.map((char) => (
          <Link
            to={`/character/${char.id}`}
            className="character-card"
            key={char.id}
          >
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
            <p>{char.species}</p>
          </Link>
        ))}
        </div>
    </div>
)
}

export default CharacterListPage
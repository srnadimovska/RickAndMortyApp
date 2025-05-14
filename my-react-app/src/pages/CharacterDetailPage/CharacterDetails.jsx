import { Link, useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchCharacterDetail } from "../../actions/characterDetailAction"
import { useEffect } from "react"
import "./CharacterDetails.css"

const CharacterDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const{ characterDetail, loadingCharacterDetail, error} = useSelector(
        (state) => state.characterDetailReducer
    )

    useEffect(() => {
        dispatch(fetchCharacterDetail(id))
    },[dispatch,id])

    return (
        <div className="character-detail-container"> 
            <Link to="/" >
            <button>Back</button>
            </Link>
            <h2>Character detail:</h2>
            {loadingCharacterDetail && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {characterDetail ? (
                <div>
            <img src={characterDetail.image} alt={characterDetail.name}/>
            <p>{characterDetail.status}</p>
            <p>{characterDetail.species}</p>
            <p>{characterDetail.gender}</p>
            <p>{characterDetail.origin?.name}</p>
                </div>
            ) : (
                !loadingCharacterDetail && <p>No character detail found.</p>
            )}
            
        </div>
    )
}

export default CharacterDetailsPage

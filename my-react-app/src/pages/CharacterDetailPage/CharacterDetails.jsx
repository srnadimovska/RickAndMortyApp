import { useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchCharacterDetail} from "../../actions/characterDetailAction"
import { useEffect } from "react"

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
        <div>
            <h2>Character detail:</h2>
            {loadingCharacterDetail && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <p>{characterDetail.status}</p>
            <p>{characterDetail.species}</p>
            <p>{characterDetail.gender}</p>
            <p>{characterDetail.origin?.name}</p>
        </div>
    )
}

export default CharacterDetailsPage

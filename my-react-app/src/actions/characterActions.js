import axios from "axios"

export const FETCH_CHARACTER_REQUEST = "FETCH_CHARACTER_REQUEST"
export const FETCH_CHARACTER_SUCCESS = "FETCH_CHARACTER_SUCCESS"
export const FETCH_CHARACTER_FAILURE = "FETCH_CHARACTER_FAILURE"

export const fetchCharacterRequest = () => ({
    type:FETCH_CHARACTER_REQUEST,
})

export const fetchCharacterSuccess = (character) => ({
    type:FETCH_CHARACTER_SUCCESS,
    payload: character,
})

export const fetchCharacterFailure = (error) => ({
    type:FETCH_CHARACTER_FAILURE,
    payload: error,
})

export const fetchCharacter = (page) => {
    return(dispatch) => {
        dispatch(fetchCharacterRequest())
        axios
        .get("https://rickandmortyapi.com/api/character")
        .then((res) => {
            const character = res.data.results
            dispatch(fetchCharacterSuccess(character))
        })
        .catch((error) => {
            const errorMsg = error.message
            dispatch(fetchCharacterFailure(errorMsg))
        })
    }
}
import axios from "axios"

export const SEARCH_CHARACTER_REQUEST = "SEARCH_CHARACTER_REQUEST"
export const SEARCH_CHARACTER_SUCCESS = "SEARCH_CHARACTER_SUCCESS"
export const SEARCH_CHARACTER_FAILURE = "SEARCH_CHARACTER_FAILURE"

export const searchCharacterRequest = () => ({
    type: SEARCH_CHARACTER_REQUEST,
})
export const searchCharacterSuccess = (character) => ({
    type: SEARCH_CHARACTER_SUCCESS,
    payload:character,
})
export const searchCharacterFailure = (error) => ({
    type: SEARCH_CHARACTER_FAILURE,
    payload:error
})

export const searchCharacter = (searchedTerm) => {
    return (dispatch) => {
        dispatch(searchCharacterRequest())
        axios
        .get(`https://rickandmortyapi.com/api/character?name=${searchedTerm}`)
        .then((res) => {
            const character = res.data.results
            dispatch(searchCharacterSuccess(character))
        })
        .catch((error) => {
            const errorMsg = error.message
            dispatch(searchCharacterFailure(errorMsg))
        })
    }
}
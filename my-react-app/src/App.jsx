

import './App.css'
import {  Routes, Route } from "react-router-dom"
import CharacterListPage from './pages/CharacterListPage/CharacterListPage'
import CharacterDetailsPage from './pages/CharacterDetailPage/CharacterDetails'




function App() {
  

  return (
    <>
      
        <Routes>
          <Route path="/" element={<CharacterListPage/>}/>
          <Route path="/character/:id" element={<CharacterDetailsPage/>}/>
        </Routes>
      
        
    </>
  )
}

export default App

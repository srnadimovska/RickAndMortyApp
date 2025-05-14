

import './App.css'
import {  Routes, Route } from "react-router-dom"
import CharacterListPage from './pages/CharacterListPage/CharacterListPage'
import CharacterDetailsPage from './pages/CharacterDetailPage/CharacterDetails'
import Navbar from './components/navbar/navbar'
import Favourites from './pages/Favourites/Favourites'




function App() {
  

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<CharacterListPage/>}/>
          <Route path="/character/:id" element={<CharacterDetailsPage/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
        </Routes>
      
        
    </>
  )
}

export default App

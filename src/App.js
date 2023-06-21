import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import MovieList from './Components/MovieList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './Components/MovieDetails';


function App() {
  return (
    <div className='layout'>
      <BrowserRouter >
        <Routes>
          <Route path="/movies-db" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

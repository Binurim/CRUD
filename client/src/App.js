import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MovieReview from './components/MovieReview';
function App() {
  return (
    <div className="App">
        <NavBar/>
            <Routes>
                <Route path="/" element={<MovieReview/>}></Route>
            </Routes>
        <Footer/>
    </div>
  );
}

export default App;

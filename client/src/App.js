import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MovieReview from './components/MovieReview';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
        <NavBar/>
            <Routes>
                <Route path="/" element={<MovieReview/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        <Footer/>
    </div>
  );
}

export default App;

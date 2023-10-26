import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Container from './components/container';
import Footer from './components/Footer';
import Dat from "./components/Data"

function App() {
  return (
    <div className="App">
      <Navbar />
   
      <Container />
      <Dat />
      <Footer />
    </div>
  );
}

export default App;

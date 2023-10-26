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
      <Dat />
      <Container />
      <Footer />
    </div>
  );
}

export default App;

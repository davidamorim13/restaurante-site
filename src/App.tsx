import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/header'
import Card from './componentes/card';

function App() {
  return (
    <div className="App">
      <Header title='Categorias' />
      <div className='category_list'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
}

export default App;

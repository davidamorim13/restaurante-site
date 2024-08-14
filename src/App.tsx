import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/header'
import Card from './componentes/card';
import Modal from './componentes/modal';
import api from './api/http';

function App() {
  const [page, setPage] = useState(1);

  const chamaApi = useCallback ( async () => {
    try {
      await api.get(`/categoris`, { params: { page } })
    } catch (err: any) {
      console.log(err)
    }
  }, [page])

  useEffect(() => {
    chamaApi();
  }, [chamaApi, page])

  return (
    <div className="App">
      <Header title='Categorias' />
      <div className='category_list'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <button onClick={() => setPage(page +1)}>
          Proxima pagina
        </button>
      </div>
    </div>
  );
}

export default App;

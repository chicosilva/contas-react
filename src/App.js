import Contas from './components/Contas';
import Titulo from './components/Titulo';
import Form from './components/FormConta'
import React, {useState} from 'react';

function App() {
  
  const [contas, setContas] = useState([]);
  
  function addConta(conta) {
    
    setContas([...contas, conta]);
  }

  return (
    <>
      <Titulo titulo="Contas gerais" />
      <Form addConta={addConta} contaPadrao="Conta Padrão" />
      <hr />
      <Contas contas={contas} />
    </>
  );
}

export default App;

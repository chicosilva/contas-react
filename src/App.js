import Titulo from './components/Titulo';
import Form from './components/FormConta'
import FormEdicao from './components/FormEdicaoConta'
import RowConta from './components/RowConta'
import React, {useState, useEffect} from 'react';

function App() {
  
  const initialState = {descricao: "", valor: "", id: ""}
  const [contas, setContas] = useState([]);
  const [objConta, viewConta] = useState(initialState);
  const [edicao, setEdicao] = useState(false);

  function addConta(conta) {
    setEdicao(false);
    setContas([...contas, conta]);
  }

  function editRow(conta){
    setEdicao(true);
    viewConta(conta);
    
  }
  const listContas = contas.map((conta)=>{
    return <RowConta key={conta.id} editRow={editRow} conta={conta} />

  });

  return (
    <>
        
      <Titulo titulo="Contas gerais" />
      
      {!edicao? (
        <Form addConta={addConta} contas={contas} conta={initialState} />
      ):
        (<FormEdicao addConta={addConta} conta={objConta} />)
      }
      
      <hr />
      <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Informar pagamento</th>
                        <th>Editar</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    {listContas}
                </tbody>
            </table>
           
        </div>
    </>
  );
}

export default App;

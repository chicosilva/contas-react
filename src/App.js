import Titulo from './components/Titulo';
import Form from './components/FormConta'
import RowConta from './components/RowConta'
import React, {useState} from 'react';

function App() {
  
  const [contas, setContas] = useState([]);
  const [objConta, viewConta] = useState({descricao: "", valor: "", id: ""});
  
  function addConta(conta) {
    setContas([...contas, conta]);
  }

  function getConta(conta){
    
    viewConta({descricao: "edição", valor: "1", id: "1"});
    
  }
  const listContas = contas.map((conta)=>{
      return <RowConta 
          
          key={conta.id}
          id={conta.id}
          descricao={conta.descricao}
          valor={conta.valor}
          getConta={getConta}
          />
  });

  return (
    <>
        
      <Titulo titulo="Contas gerais" />
      <Form addConta={addConta} contas={contas} conta={objConta} />
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

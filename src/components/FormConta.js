import React, {useState} from "react";

export default props => {

    const [conta, setConta] = useState({descricao: "", valor: "", id: ""});

    function handleSubmit(e){
        
        e.preventDefault();
        
        conta.id = Math.floor(Math.random() * 10)
        props.addConta(conta)
        setConta({descricao: "", valor: "", id: ""})
        
    }

    return (
        <>  
            <form onSubmit={handleSubmit}>

                <input className="form-control" 
                    value={conta.descricao} 
                    onChange={e => {
                        
                        e.target.classList.remove('is-invalid');

                        if(e.target.value == ""){
                            e.target.classList.add('is-invalid');
                        }
                        
                        setConta(prevState => {
                            return {...prevState, descricao: e.target.value}
                        });

                    }} required 
                    placeholder="Descrição"
                />

                <br />
                <input
                    onChange={e => {
                        setConta(prevState => {
                            return {...prevState, valor: e.target.value}
                        })
                    }} 
                    className="form-control"
                    value={conta.valor}
                    type="number"
                    required placeholder="Valor" 
                />
                <br />
                <button className="btn btn-primary">Salvar</button>
            </form>
        </>
    )
}
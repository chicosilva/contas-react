import React, {useState, useEffect} from "react";

export default props => {
    
    const [conta, setConta] = useState(props.conta);
    
    useEffect(() => {
        //console.log('sofri alteração')
    }, [conta])

    function handleSubmit(e){
        
        e.preventDefault();
        
        conta.id = props.contas.length + 1;
        props.addConta(conta)
        setConta({descricao: "", valor: "", id: ""})
        
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        e.target.classList.remove('is-invalid');

        if(e.target.value == ""){
            e.target.classList.add('is-invalid');
        }

        setConta({...conta, [name]: value })
      }
      

    return (
        <>  
            <form onSubmit={handleSubmit}>

                <input className="form-control" 
                    value={conta.descricao}
                    name="descricao"
                    onChange={handleInputChange}
                    required 
                    placeholder="Descrição"
                />

                <br />
                <input
                    onChange={handleInputChange}
                    className="form-control"
                    name="valor"
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
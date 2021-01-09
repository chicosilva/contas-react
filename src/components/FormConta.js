import React, {useState} from "react";

export default props => {

    const [descricao, setDescricao] = useState(props.contaPadrao);
    const [valor, setValor] = useState("");

    function handleSubmit(e){
        
        e.preventDefault();
        
        const conta = {
            id: Math.floor(Math.random() * 20),
            valor: valor,
            descricao: descricao
        }

        props.addConta(conta)
        setDescricao('')
        setValor('')
    }

    return (
        <>  
            <form onSubmit={handleSubmit}>

                <input className="form-control" 
                    value={descricao} 
                    onChange={e => {
                        
                        e.target.classList.remove('is-invalid');

                        if(e.target.value == ""){
                            e.target.classList.add('is-invalid');
                        }

                        setDescricao(e.target.value);

                    }} required 
                    placeholder="Descrição"
                />

                <br />
                <input
                    onChange={e => setValor(e.target.value)} 
                    className="form-control"
                    value={valor}
                    type="number"
                    required placeholder="Valor" 
                />
                <br />
                <button className="btn btn-primary">Salvar</button>
            </form>
        </>
    )
}
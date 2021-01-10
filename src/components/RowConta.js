
function RowConta(props){
    
    const conta = props.conta;

    return (
        <>
            <tr>
                <td>{conta.id}</td>
                <td>{conta.descricao}</td>
                <td>R$ {conta.valor}</td>
                <td>
                    <input type="checkbox" />
                </td>
                <td>
                    <button onClick={e => props.editRow(conta)} className="btn btn-info">Editar</button>
                </td>
                <td>
                    <button className="btn btn-danger">Remover</button>
                </td>
            </tr>
        </>
    )
}

export default RowConta;

function RowConta(props){
    
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.descricao}</td>
                <td>R$ {props.valor}</td>
                <td>
                    <input type="checkbox" />
                </td>
                <td>
                <button className="btn btn-info">Remover</button>
                </td>
                <td>
                    <button className="btn btn-danger">Remover</button>
                </td>
            </tr>
        </>
    )
}

export default RowConta;
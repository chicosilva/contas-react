import RowConta from './RowConta';

function Contas(props){

    const listContas = props.contas.map((conta) => <RowConta key={conta.id} {...conta} />);

    return (
        <>
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
    )
}

export default Contas;
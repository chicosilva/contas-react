import RowConta from './RowConta';

function Contas(props){

    return (
        <>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Editar</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    <RowConta />
                </tbody>
                </table>
            </div>
        </>
    )
}

export default Contas;
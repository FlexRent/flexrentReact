export default function CadastroProduto() {
    return (
        <>
            <h2 className="text-center mt-5">Cadastro Produto - Etapa 1/2</h2>

            <form className="text-center">

                <div className="mt-3 text-center">
                    <p>Nome*:</p>
                    <input type="text" name="nomeProduto" placeholder="" required />
                </div>

                <div className="mt-3 text-center">
                    <p>Marca*:</p>
                    <input type="text" name="marcaProduto" placeholder="" required />
                </div>

                <div className="mt-3 text-center">
                    <p>Selecione a categoria do produto*:</p>
                    <select class="" name="brand_id" required>
                        <option value="Teste">Ferramentas</option>
                        <option value="Teste">Equipamento Esportivo</option>
                        <option value="Teste">Camping</option>
                        <option value="Teste">Praia</option>
                    </select>
                </div>

                <div className="mt-3 text-center">
                    <p>Fotos do produto*:</p>
                    <input type="file" name="imgProduto" placeholder="Foto do produto" required />
                </div>

                <div className="mt-3 text-center">
                    <p>Descrição*:</p>
                    <input type="text" name="descProduto" placeholder="" required />
                </div>

                <div className="mt-3 text-center">
                    <p>Valor do produto*:</p>
                    <input type="text" name="valorProduto" placeholder="" required />
                </div>

                <div className="mt-3 text-center">
                    <p>Valor Aluguel (Diária)*:</p>
                    <input type="text" name="valorAlguelDiariaProduto" placeholder="" required />
                </div>

                <button className="btn btn-lg w-25 btn-success mt-3 mb-2">Cadastrar - Etapa 1/2</button>
            </form>
        </>
    );
}
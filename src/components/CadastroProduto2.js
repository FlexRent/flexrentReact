export default function CadastroProduto2() {
    return (
        <>
            <h2 className="text-center mt-5">Cadastro Produto - Etapa 2/2</h2>

            <h4 className="text-center">Localização</h4>
          
            <form className="text-center">

            <div className="">                    
                    <input className="" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="m-1" for="flexCheckDefault">
                        Usar endereço de cadastro
                    </label>
                </div>
                <div className="">
                    <input className="" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="m-1" for="flexCheckChecked">
                        Cadastrar um novo endereço
                    </label>
                </div>

                <div className="mt-3 text-center">
                    <p>Estado*:</p>
                    <input type="text" name="estadoProduto" placeholder="" required />
                </div>

                <div className="mt-3 text-center">
                    <p>Cidade*:</p>
                    <input type="text" name="cidadeProduto" placeholder="" required />
                </div>

                <div className="mt-3 text-center">
                    <p>CEP*:</p>
                    <input type="text" name="cepProduto" placeholder="" required />
                </div>

                <div className="mt-3 text-center">
                    <p>Rua*:</p>
                    <input type="text" name="ruaProduto" placeholder="" required />
                </div>

                <div className="mt-3 text-center">
                    <p>Bairo*:</p>
                    <input type="text" name="bairroProduto" placeholder="" required />
                </div>

                <div className="mt-3 text-center">
                    <p>Número*:</p>
                    <input type="text" name="numeroEnderecoProduto" placeholder="" required />
                </div>

                <div className="mt-3 text-center">
                    <p>Complemento*:</p>
                    <input type="text" name="complementoProduto" placeholder="" required />
                </div>

                <hr></hr>

                <h4>Disponibilidade (Retirada/Devolução) </h4>

                <div className="">
                    <p>Localização*:</p>
                    <input className="" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="m-1" for="flexCheckDefault">
                        Qualquer horário
                    </label>
                </div>
                <div className="">
                    <input className="" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="m-1" for="flexCheckChecked">
                        Horário personalizado
                    </label>
                </div>

                <div className="mt-3 text-center">
                    <p>A partir *:</p>
                    <input type="time" name="horarioRetiradaProduto" placeholder="" required />
                </div>

                <div className="mt-3 text-center">
                    <p>Até *:</p>
                    <input type="time" name="horarioDevolucaoProduto" placeholder="" required />
                </div>

                
                <div className="mt-4">
                <p>Dias de disponibilidade do item:</p>                    
                    <input className="" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="m-1" for="flexCheckDefault">
                        Dias úteis
                    </label>
                </div>
                <div className="">
                    <input className="" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="m-1" for="flexCheckChecked">
                        Todos os dias
                    </label>
                </div>
                <div className="">
                    <input className="" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="m-1" for="flexCheckChecked">
                        Fim de semana
                    </label>
                </div>


 
                <button className="btn btn-lg w-25 btn-success mx-3 mt-3 mb-2">Voltar</button>
                <button className="btn btn-lg w-25 btn-success mx-3 mt-3 mb-2">Cadastrar</button>
            </form>
        </>
    );
}
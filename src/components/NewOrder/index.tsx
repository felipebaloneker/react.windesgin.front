import { useState } from "react";
import './styles.scss'

function NewOrder(){
    const [categoria,setCategoria] = useState('')
    const [details, setDetails] = useState('')
    const setCategory = (e:string)=> {
        
    }
    const createNewOrder = async ()=>{

    }

    return(
        <div className="new_order">
            <div className="order_header">
                <h2>Qual é a necessidade da sua Empresa:<span>(selecione)</span></h2>
            </div>
            <div className="order_main">
                {/* Formulario de requerimento */}
                <form className="formulario" onSubmit={createNewOrder}>
                    {/* Categoria do pedido */}
                    <div className="categoria_wrp">
                        <div className="input_wrp">
                            <input
                                type="radio"
                                id="branding"
                                name="categoria"
                                value="branding"
                                onChange={event => setCategory(event.target.value)}
                            />
                            <label className="labelForm" htmlFor="branding">
                                <span>Branding:</span><br></br> Sua empresa terá uma renovação de Identidade visual da marca desde a criação  de um nome, Logo, Website, Banner e todos os serviços de design que a empresa precisa para uma nova fase.
                            </label>
                        </div>
                        <div className="input_wrp">
                            <input
                                type="radio"
                                id="logo"
                                name="categoria"
                                value="criação de logo"
                                onChange={event => setCategory(event.target.value)}
                            />
                            <label className="labelForm" htmlFor="logo">
                                <span>Criação de Logo Marca:</span><br></br> Elaboramos um Logo unindo figuras estratégicas que fazem relação com sua empresa.
                            </label>
                        </div>
                        <div className="input_wrp">
                            <input
                                type="radio"
                                id="embalagem"
                                name="categoria"
                                value="design de embalagem"
                                onChange={event => setCategory(event.target.value)}
                            />
                            <label className="labelForm" htmlFor="embalagem">
                            <span> Design de Embalagens:</span><br></br> Fazemos o design dos seus produtos.
                            </label>
                        </div>
                        <div className="input_wrp">
                            <input
                                type="radio"
                                id="card"
                                name="categoria"
                                value="criação de card"
                                onChange={event => setCategory(event.target.value)}
                            />
                            <label className="labelForm" htmlFor="card">
                                <span>Criação de Card:</span><br></br>  Criamos ilustrações para divulgar eventos e produtos da sua empresa
                            </label>
                        </div>
                        <div className="input_wrp">
                            <input
                                type="radio"
                                id="banner"
                                name="categoria"
                                value="criação de banner"
                                onChange={event => setCategory(event.target.value)}
                            />
                            <label className="labelForm" htmlFor="banner">
                                <span>Criação de Banner:</span><br></br>  Elaboramos banners e cartazes para divulgar produtos da sua empresa
                            </label>
                        </div>
                        <div className="input_wrp">
                            <input
                                type="radio"
                                id="website"
                                name="categoria"
                                value="criação de website"
                                onChange={event => setCategory(event.target.value)}
                            />
                            <label className="labelForm" htmlFor="website">
                                <span>Criação de Ux Design / WebDesign:</span><br></br> Criamos um site único de diretamente voltado ao publico e a divulgação da sua empresa e produtos.
                            </label>
                        </div>
                        <div className="input_wrp">
                            <input
                                type="radio"
                                id="rede-social"
                                name="categoria"
                                value="gerenciamento de rede social"
                                onChange={event => setCategory(event.target.value)}
                            />
                            <label className="labelForm" htmlFor="rede-social">
                                <span>Gerenciamento de Rede Social:</span><br></br> Com objetivo de gerar reconhecimento para para sua empresa
                            </label>
                        </div>
                    </div>
                        {/* Detalhes do pedido */}
                    <div className="details">
                            <label htmlFor="assunto">Decreva ainda melhor a sua necessidade:</label>
                            <br />
                            <textarea
                            name=""
                            className="form-textarea"
                            cols={30}
                            rows={10}
                            maxLength={1280}
                            placeholder="Descreva seu pedido"
                            onChange={event => setDetails(event.target.value)}
                            ></textarea>
                    </div>
                    <div className="flex">
                    <button type="submit" className="submit">Realizar pedido</button>
                  </div>
                </form>
            </div>
        </div>
    )
}
export default NewOrder;
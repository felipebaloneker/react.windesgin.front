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
                <h2>Qual é a necessidade da sua Empresa:</h2>
            </div>
            <div className="order_main">
                {/* Formulario de requerimento */}
                <form className="formulario" onSubmit={createNewOrder}>
                    {/* Categoria do pedido */}
                    <div className="categoria">
                        <input
                            type="checkbox"
                            id="branding"
                            name="categoria"
                            value="branding"
                            onChange={event => setCategory(event.target.value)}
                        />
                        <label className="labelForm" htmlFor="branding">
                            <span>Branding:</span> Sua empresa terá uma renovação de Identidade visual da marca desde a criação  de um nome, Logo, Website, Banner e todos os serviços de design que a empresa precisa para uma nova fase.
                        </label>
                        <br />
                        <input
                            type="checkbox"
                            id="logo"
                            name="categoria"
                            value="criação de logo"
                            onChange={event => setCategory(event.target.value)}
                        />
                        <label className="labelForm" htmlFor="logo">
                            <span>Criação de Logo Marca:</span> Elaboramos um Logo unindo figuras estratégicas que fazem relação com sua empresa.
                        </label>
                        <br />
                        <input
                            type="checkbox"
                            id="embalagem"
                            name="categoria"
                            value="design de embalagem"
                            onChange={event => setCategory(event.target.value)}
                        />
                        <label className="labelForm" htmlFor="embalagem">
                           <span> Design de Embalagens:</span> Fazemos o design dos seus produtos.
                        </label>
                        <br />
                        <input
                            type="checkbox"
                            id="card"
                            name="categoria"
                            value="criação de card"
                            onChange={event => setCategory(event.target.value)}
                        />
                        <label className="labelForm" htmlFor="card">
                            <span>Criação de Card:</span>  Criamos ilustrações para divulgar eventos e produtos da sua empresa
                        </label>
                        <br />
                        <input
                            type="checkbox"
                            id="banner"
                            name="categoria"
                            value="criação de banner"
                            onChange={event => setCategory(event.target.value)}
                        />
                        <label className="labelForm" htmlFor="banner">
                            <span>Criação de Banner:</span>  Elaboramos banners e cartazes para divulgar produtos da sua empresa
                        </label>
                        <br />
                        <input
                            type="checkbox"
                            id="website"
                            name="categoria"
                            value="criação de website"
                            onChange={event => setCategory(event.target.value)}
                        />
                        <label className="labelForm" htmlFor="website">
                            <span>Criação de Ux Design / WebDesign:</span> Criamos um site único de diretamente voltado ao publico e a divulgação da sua empresa e produtos.
                        </label>
                        <br />
                        <input
                            type="checkbox"
                            id="rede-social"
                            name="categoria"
                            value="gerenciamento de rede social"
                            onChange={event => setCategory(event.target.value)}
                        />
                        <label className="labelForm" htmlFor="rede-social">
                            <span>Gerenciamento de Rede Social:</span> Com objetivo de gerar reconhecimento para para sua empresa
                        </label>
                        <br />
                    </div>
                        {/* Detalhes do pedido */}
                    <div className="details">
                            <label htmlFor="assunto">Decreva ainda melhor a sua necessidade:</label>
                            <br />
                            <input
                            type="text"
                            id="assunto"
                            className="text-input"
                            placeholder="Descreva melhor"
                            onChange={event => setDetails(event.target.value)}
                            required
                            />
                    </div>
                    <div className="flex">
                    <button type="submit">Realizar pedido</button>
                  </div>
                </form>
            </div>
        </div>
    )
}
export default NewOrder;
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
                            Branding: Sua empresa terá uma renovação de Identidade visual da marca desde a criação  de um nome, Logo, Website, Banner e todos os serviços de design que a empresa precisa para uma nova fase.
                        </label>
                        <input
                            type="checkbox"
                            id="logo"
                            name="categoria"
                            value="criação de logo"
                            onChange={event => setCategory(event.target.value)}
                        />
                        <label className="labelForm" htmlFor="logo">
                            Criação de Logo Marca: Elaboramos um Logo unindo figuras estratégicas que fazem relação com sua empresa.
                        </label>
                        <input
                            type="checkbox"
                            id="embalagem"
                            name="categoria"
                            value="design de embalagem"
                            onChange={event => setCategory(event.target.value)}
                        />
                        <label className="labelForm" htmlFor="embalagem">
                            Design de Embalagens: Fazemos o design dos seus produtos.
                        </label>
                        <input
                            type="checkbox"
                            id="card"
                            name="categoria"
                            value="criação de card"
                            onChange={event => setCategory(event.target.value)}
                        />
                        <label className="labelForm" htmlFor="card">
                            Criação de Card:  Criamos ilustrações para divulgar eventos e produtos da sua empresa
                        </label>
                        <input
                            type="checkbox"
                            id="banner"
                            name="categoria"
                            value="criação de banner"
                            onChange={event => setCategory(event.target.value)}
                        />
                        <label className="labelForm" htmlFor="banner">
                            Criação de Banner:  Elaboramos banners e cartazes para divulgar produtos da sua empresa
                        </label>
                        <input
                            type="checkbox"
                            id="website"
                            name="categoria"
                            value="criação de website"
                            onChange={event => setCategory(event.target.value)}
                        />
                        <label className="labelForm" htmlFor="website">
                            Criação de Ux Design / WebDesign: Criamos um site único de diretamente voltado ao publico e a divulgação da sua empresa e produtos.
                        </label>
                        <input
                            type="checkbox"
                            id="rede-social"
                            name="categoria"
                            value="gerenciamento de rede social"
                            onChange={event => setCategory(event.target.value)}
                        />
                        <label className="labelForm" htmlFor="rede-social">
                            Gerenciamento de Rede Social: Com objetivo de gerar reconhecimento para para sua empresa
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default NewOrder;
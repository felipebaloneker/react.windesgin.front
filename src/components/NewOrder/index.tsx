import { FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { UseCategoryList } from "../../hooks/useCategoryList";
import Api from "../../services/Api";
import './styles.scss'

function NewOrder(){
    const [categoria,setCategoria] = useState('')
    const [details, setDetails] = useState('')
    const {listCategory} = UseCategoryList()

    const createNewOrder = async(e:FormEvent)=>{
        e.preventDefault()
        // pegando id da categoria selecionada
       listCategory.map(cat=>{
            if(categoria == cat.name){
                if(cat.id !== undefined || details.length !== 0){
                    console.log('category:'+cat.id)
                    Api.creatUserOrder(details,cat.id)
                    .then(function (res){return res})
                    .catch(function(){return window.alert('Erro por favor tente novamente mais tarde.')})
                    return window.alert("Pedido Criado, clique em 'meus pedidos' para acompanhar")
                }
                else{
                    return window.alert('Selecione uma categoria e detalhe melhor sua necessidade.')
                }
            }
        })
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
                                value="Branding"
                                onChange={event => setCategoria(event.target.value)}
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
                                value="Criação de Logo"
                                onChange={event => setCategoria(event.target.value)}
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
                                value="Design de Embalagem"
                                onChange={event => setCategoria(event.target.value)}
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
                                value="Criação de Card"
                                onChange={event => setCategoria(event.target.value)}
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
                                value="Criação de Banner"
                                onChange={event => setCategoria(event.target.value)}
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
                                value="Criação de Website"
                                onChange={event => setCategoria(event.target.value)}
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
                                value="Gerenciamento Rede Social"
                                onChange={event => setCategoria(event.target.value)}
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
                    <button type="submit" className="submit"
                    >Realizar pedido</button>
                  </div>
                </form>
            </div>
        </div>
    )
}
export default NewOrder;
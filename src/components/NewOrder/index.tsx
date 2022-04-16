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
        if(categoria !== undefined || details.length !== 0){
            await Api.creatUserOrder(details,categoria)
            .then(function (res){return res})
            .catch(function(){return window.alert('Erro por favor tente novamente mais tarde.')})
            return window.alert("Pedido Criado, clique em 'meus pedidos' para acompanhar")
        }
        else{
            return window.alert('Selecione uma categoria e detalhe melhor sua necessidade.')
        }
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
                        {listCategory.map(category=>{
                            return(
                                <div className="input_wrp"
                                key={category.id}
                                >
                                    <input
                                        type="radio"
                                        id={category.name}
                                        name="categoria"
                                        value={category.id}
                                        onChange={event => setCategoria(event.target.value)}
                                    />
                                    <label className="labelForm" htmlFor={category.name}>
                                        <span>{category.name}:</span><br></br> {category.details}
                                    </label>
                                </div>
                            )
                        })}
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
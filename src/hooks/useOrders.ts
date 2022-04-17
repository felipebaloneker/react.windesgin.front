import { useEffect, useState } from "react";
import Api from "../services/Api";
type OrdersProps = Record<string,{
    id:string;
    details:string,
    category_id:string,
    status:string,
    created_at:string,
}>

type resProp = {
    data:OrdersProps;
}
type Orders = {
    id:string;
    details:string,
    category_id:string,
    status:string,
    created_at:string,
}
export function useOrders(){
    const [orderList,setList] = useState<Orders[]>([])
    useEffect(()=>{
        const timer = setInterval(()=>{
            Api.listUserOrder().then(function(item:resProp|any){
                return setList(item.data)
            })
            .catch(err=>{return err})
        },1000)
        return ()=>clearInterval(timer)
    })
    return {orderList}

}

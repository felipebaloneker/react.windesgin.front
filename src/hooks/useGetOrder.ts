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
type Order = {
    id:string;
    details:string,
    category_id:string,
    status:string,
    created_at:string,
}
export function useGetOrder(id: string){
    const [orderList,setList] = useState<Order[]>([])
    useEffect(()=>{
            Api.findOrder(id).then(function(item:resProp|any){
                return setList(item.data)
            })
            .catch(err=>{return err})
    },[])
    return {orderList}

}

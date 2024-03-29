import { useEffect, useState } from "react"
import Api from "../services/Api"
type OrdersProps = Record<
  string,
  {
    id: string
    details: string
    category_id: string
    status: string
    created_at: string
    completion_date: string
  }
>

type resProp = {
  data: OrdersProps
}
type Orders = {
  id: string
  details: string
  category_id: string
  status: string
  created_at: string
  completion_date: string
}
export function useAllOrders() {
  const [allOrderList, setList] = useState<Orders[]>([])
  useEffect(() => {
    const timer = setInterval(() => {
      Api.listAllOrder()
        .then(function (item: resProp | any) {
          return setList(item.data)
        })
        .catch((err) => {
          return err
        })
    }, 1000)
    return () => clearInterval(timer)
  })
  return { allOrderList }
}

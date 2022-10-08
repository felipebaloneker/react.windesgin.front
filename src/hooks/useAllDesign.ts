import { useEffect, useState } from "react"
import Api from "../services/Api"
type DesignProps = Record<
  string,
  {
    id: string
    name: string
    email: string
    type: string
    juridical: string
    phone: string
    cpf: string
    cnpj: string
    birthday: string
    address: string
    created_at: string
  }
>

type resProp = {
  data: DesignProps
}
type Design = {
  id: string
  name: string
  email: string
  type: string
  juridical: string
  phone: string
  cpf: string
  cnpj: string
  birthday: string
  address: string
  created_at: string
}
export function useAllDesign() {
  const [designList, setList] = useState<Design[]>([])
  useEffect(() => {
    const timer = setInterval(() => {
      Api.listAllDesign()
        .then(function (item: resProp | any) {
          return setList(item.data)
        })
        .catch((err) => {
          return err
        })
    }, 1000)
    return () => clearInterval(timer)
  })
  return { designList }
}

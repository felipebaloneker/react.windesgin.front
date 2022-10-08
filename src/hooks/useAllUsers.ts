import { useEffect, useState } from "react"
import Api from "../services/Api"
type UsersProps = Record<
  string,
  {
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
  data: UsersProps
}
type Users = {
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
export function useAllUsers() {
  const [usersList, setList] = useState<Users[]>([])
  useEffect(() => {
    const timer = setInterval(() => {
      Api.listAllUsers()
        .then(function (item: resProp | any) {
          return setList(item.data)
        })
        .catch((err) => {
          return err
        })
    }, 1000)
    return () => clearInterval(timer)
  })
  return { usersList }
}

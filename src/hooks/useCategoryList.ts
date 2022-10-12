import { useEffect, useState } from "react"
import Api from "../services/Api"

type Category = {
  id: string
  name: string
  details: string
  created_at: string
}
type resProp = {
  data: Category
}
export const UseCategoryList = () => {
  const [listCategory, setListCategory] = useState<Category[]>([])
  useEffect(() => {
    Api.listCategory()
      .then(function (item: resProp | any) {
        return setListCategory(item.data)
      })
      .catch((err) => {
        return err
      })
  }, [])
  return { listCategory }
}

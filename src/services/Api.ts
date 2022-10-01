import database from "./database"
type UserProps = {
  name: string
  email: string
  password: string
  type?: string
  phone: string
  cpf?: string
  cnpj?: string
  juridico?: string
  birthday?: string
  address: string
}
export default {
  createUser: async ({
    name,
    email,
    password,
    type,
    phone,
    cpf,
    cnpj,
    juridico,
    birthday,
    address
  }: UserProps) => {
    const user = await database
      .post("/users/create", {
        name: name,
        email: email,
        password: password,
        type,
        phone,
        cpf,
        cnpj,
        juridico,
        birthday,
        address
      })
      .then(function (res) {
        return res
      })
      .catch((err) => {
        return console.log(err)
      })
    return user
  },
  listCategory: async () => {
    const token = localStorage.getItem("token")?.replace(/"/g, "")
    const categorys = await database
      .get("/users/list/category", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(function (res) {
        return res
      })
      .catch((err) => {
        return
      })
    return categorys
  },
  listUserOrder: async () => {
    const user_id = localStorage.getItem("userId")
    const token = localStorage.getItem("token")?.replace(/"/g, "")
    const list = await database
      .get(`/users/list/order?user_id=${user_id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(function (res) {
        return res
      })
      .catch((err) => {
        return
      })
    return list
  },
  listAllOrder: async () => {
    const token = localStorage.getItem("token")?.replace(/"/g, "")
    const list = await database
      .get(`/users/list/order/all`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(function (res) {
        return res
      })
      .catch((err) => {
        console.log(err)
        return
      })
    return list
  },
  listChatMessage: async (chat_id: string) => {
    const token = localStorage.getItem("token")?.replace(/"/g, "")
    const list = await database
      .get(`/chat/list/message?chat_id=${chat_id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(function (res) {
        return res
      })
      .catch((err) => {
        return
      })
    return list
  },
  creatUserOrder: async (details: string, category_id: string) => {
    const token = localStorage.getItem("token")?.replace(/"/g, "")
    const order = await database
      .post(
        `/users/create/order`,
        {
          details,
          category_id
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(function (res) {
        return res
      })
      .catch((err) => {
        return
      })
    return order
  },
  createChat: async (order: string) => {
    const token = localStorage.getItem("token")?.replace(/"/g, "")
    const chat = await database
      .post(
        `/chat/create`,
        {
          order
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(function (res) {
        return res
      })
      .catch((err) => {
        return
      })
    return chat
  },
  addUserChat: async (chat_id: string) => {
    const token = localStorage.getItem("token")?.replace(/"/g, "")
    const user = await database
      .post(
        `/chat/create/user`,
        {
          chat_id
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(function (res) {
        return res
      })
      .catch((err) => {
        return
      })
    return user
  },
  findOrder: async (order_id: string) => {
    const token = localStorage.getItem("token")?.replace(/"/g, "")
    const order = await database
      .get(`/order/list?order_id=${order_id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(function (res) {
        return res
      })
      .catch((err) => {
        return err
      })
    return order
  },
  updateOrder: async (order_id: string, status: string) => {
    const token = localStorage.getItem("token")?.replace(/"/g, "")
    const user = await database
      .post(
        `/order/update`,
        {
          order_id,
          status
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(function (res) {
        return res
      })
      .catch((err) => {
        return err
      })
    return user
  },
  createMessage: async (
    author_name: string,
    chat_id: string,
    body: string,
    type: string
  ) => {
    const token = localStorage.getItem("token")?.replace(/"/g, "")
    const message = await database
      .post(
        `/chat/message`,
        {
          chat_id,
          author_name,
          body,
          type
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(function (res) {
        return res
      })
      .catch((err) => {
        return
      })
    return message
  }
}

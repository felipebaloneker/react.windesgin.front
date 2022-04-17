import database from './database';
export default{
    createUser:async(name:string,email:string,password:string)=>{
        const user = await database.post('/users/create',{
            name:name,
            email:email,
            password:password
        })
        .then(function(res){
            return res
        })
        .catch(err =>{return console.log(err)})
        return user
    },
    listCategory:async()=>{
        const token = localStorage.getItem('token')?.replace(/"/g,"");
        const categorys = await database.get('/users/list/category',{headers: {'Authorization': `Bearer ${token}`}})
        .then(function(res){
            return res
        })
        .catch(err => {return})
        return categorys
    },
    listUserOrder:async()=>{
        const user_id = localStorage.getItem('userId');
        const token = localStorage.getItem('token')?.replace(/"/g,"");
        const list = await database.get(`/users/list/order?user_id=${user_id}`,{headers: {'Authorization': `Bearer ${token}`}})
        .then(function(res){
            return res
        })
        .catch(err => {return})
        return list
    },
    listChatMessage:async()=>{
        const user_id = localStorage.getItem('userId');
        const token = localStorage.getItem('token')?.replace(/"/g,"");
        const list = await database.get(`/chat/list/message`,{headers: {'Authorization': `Bearer ${token}`}})
        .then(function(res){
            return res
        })
        .catch(err => {return})
        return list
    },
    creatUserOrder:async(details:string,category_id:string)=>{
        const token = localStorage.getItem('token')?.replace(/"/g,"");
        const order = await database.post(`/users/create/order`,{
           details,
           category_id
        },{headers: {'Authorization': `Bearer ${token}`}})
        .then(function(res){
            return res
        })
        .catch(err => {return})
        return order
    },
    createChat:async(order:string)=>{
        const token = localStorage.getItem('token')?.replace(/"/g,"");
        const chat = await database.post(`/chat/create`,{
            order
         },{headers: {'Authorization': `Bearer ${token}`}})
         .then(function(res){
             return res
         })
         .catch(err => {return})
         return chat
    },
    addUserChat:async(chat_id:string)=>{
        const token = localStorage.getItem('token')?.replace(/"/g,"");
        const user = await database.post(`/chat/create/user`,{
            chat_id
         },{headers: {'Authorization': `Bearer ${token}`}})
         .then(function(res){
             return res
         })
         .catch(err => {return})
         return user
    },
    findOrder:async(id:string)=>{
        const token = localStorage.getItem('token')?.replace(/"/g,"");
        const order = await database.post(`/chat/create/user`,{
            id
         },{headers: {'Authorization': `Bearer ${token}`}})
         .then(function(res){
             return res
         })
         .catch(err => {return})
         return order
    },
    createMessage:async(chat_id:string,body:string,type:string)=>{
        const token = localStorage.getItem('token')?.replace(/"/g,"");
        const message = await database.post(`/chat/message`,{
            chat_id,
            body,
            type,
         },{headers: {'Authorization': `Bearer ${token}`}})
         .then(function(res){
             return res
         })
         .catch(err => {return})
         return message
    },

}
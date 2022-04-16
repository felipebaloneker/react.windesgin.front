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
    creatUserOrder:async(details:string,category_id:string)=>{
        const token = localStorage.getItem('token')?.replace(/"/g,"");
        const list = await database.post(`/users/create/order`,{
           details,
           category_id
        },{headers: {'Authorization': `Bearer ${token}`}})
        .then(function(res){
            return res
        })
        .catch(err => {return})
        return list
    }
}
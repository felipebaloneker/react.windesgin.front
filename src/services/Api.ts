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

        const categorys = await database.get('http://localhost:3000/users/list/category',{headers: {'Authorization': `Bearer ${token}`}})
        .then(function(res){
            return res
        })
        .catch(err => {return})
    }
}
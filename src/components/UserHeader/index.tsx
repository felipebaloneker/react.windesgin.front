import { useState } from 'react'
import './styles.scss'
const avatar = require('../../assets/avatar.png')

function UserHeader(){
    const [name,] = 'Felipe Baloneker'.split(' ')
    const [open,setOpen]= useState(false)
    const setOpenMenu = ()=>{
        if(open === true){
            setOpen(false)
        }
        else{setOpen(true)}
    }
    console.log(open)

    return(
<>
        <header>
            <div className="header_wrp">
            <div className="logo">
                    <a><h3 className="logo_header">Win<span>Design</span></h3></a>
                </div>
                <div className="avatar">
                    <button className="user_avatar" onClick={setOpenMenu}>
                        <img src={avatar} alt="" />
                    </button>
                </div>
            </div>
        </header>
        <div className="user_name"
        style={{display: open ? "flex":"none"}}
        >
            <div className="user_menu">
                <a>{name}</a>
                <a href="/login" className='log' >Sair</a>
            </div>
        </div>
</>
    )
}
export default UserHeader
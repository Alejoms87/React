import React, {useState} from "react";
import "../styles/navBar.css"
import { Link as LinkRouter } from "react-router-dom";


const NavBar = ()=> {

    const [showMenu, setShowMenu] = useState(false)
   
    return (
    <>
        <div className="nav_container">
          <div className="nav_accion_container">
    
            <LinkRouter className="navLink_web" to = '/'> <h1>Home</h1> </LinkRouter>  
            <LinkRouter className="navLink_web"to = '/productos/Parametro prueba'> <h1>Productos</h1> </LinkRouter>
            <LinkRouter className="navLink_web"to = '/Prueba'> <h1>Prueba</h1> </LinkRouter>
           
          </div>
          <div className="nav_button_responsive"> 
                 <button onClick= {()=>{ setShowMenu(!showMenu)}} 
                 className=" nav_button_menu">Menu </button>
          </div>
        </div> 
        <div className={showMenu? " show_menu nav_menu_responsive" : "notshow_menu nav_button_menu"}>
                
                    <LinkRouter onClick={() => { setShowMenu(!showMenu) }}className="navLink_mobile" to = '/'> <h2>Home</h2> </LinkRouter>
                    <LinkRouter onClick={() => { setShowMenu(!showMenu) }}className="navLink_mobile"to = '/productos'> <h2>Productos</h2> </LinkRouter>
                    <LinkRouter onClick={() => { setShowMenu(!showMenu) }}className="navLink_mobile"to = '/Prueba'> <h2>Prueba</h2> </LinkRouter>
                           
        </div>
               
    </>

    )
}

export default NavBar
import React from "react";
import "../styles/home.css" ;
import CarrouselHome from "./Carrousel";
import Footer from "./footer";

function Home() {

let tecnologia ="en Argentina y para todo el mundo"


  return (

    <>
    <div className="home_main_container">
      <h1>Bienvenidos a Nuestra Pagina!</h1>
      <h2> Encontra tu profesional hoy {tecnologia}</h2>
      <div className="card_container">
        
          <h1>Conoce a nuestro equipo medico</h1>
          <div className="button_medic">
           <button> Contactanos </button> </div>
        

      </div>
      

    </div>
      <CarrouselHome/>

    <br></br>
      <Footer/>

    </>
  );
}


export default Home 

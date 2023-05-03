import React, { Fragment } from "react";
import "../styles/NavBar.css";
/*import gift from "../assets/images/gift.svg"
import filter from "../assets/images/filter.svg"
import heart from "../assets/images/heart.svg"
import home from "../assets/images/home.svg"*/
import NavBarLogin from './NavBarLogin';
import NavBarBusca from './NavBarBusca';
import NavBarCarrinho from './NavBarCarrinho';
import NavBarMenu from './NavBarMenu';

function NavBar() {
    return(
        <nav>
            <div className="container">
            <NavBarLogin/>
            <h1 className="logo"><a className='menuLink' href='#'>Nome da marca</a></h1>
            <NavBarBusca/>
            <NavBarCarrinho/>            
            </div>
            <div className='menuBar'>
            <NavBarMenu categoria ="TODOS OS PRODUTOS" link ="https://plataforma-login.coderhouse.com/"/>
            <NavBarMenu categoria ="LÁBIOS" link ="https://plataforma-login.coderhouse.com/"/>
            <NavBarMenu categoria ="FACE" link ="https://plataforma-login.coderhouse.com/"/>
            <NavBarMenu categoria ="OLHOS" link ="https://plataforma-login.coderhouse.com/"/>
            <NavBarMenu categoria ="SKINCARE" link ="https://plataforma-login.coderhouse.com/"/>
            </div>
           

        </nav>
    )
}

export default NavBar
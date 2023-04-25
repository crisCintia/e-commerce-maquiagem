import React, { Fragment } from "react";
import "../styles/NavBar.css";
import gift from "../assets/images/gift.svg"
import filter from "../assets/images/filter.svg"
import heart from "../assets/images/heart.svg"
import home from "../assets/images/home.svg"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div class="container-fluid">
                <img src={heart} alt="logo" className="logo"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Base</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Blushs e Pós
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Blush</a></li>
                                <li><a class="dropdown-item" href="#">Pó</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Sombra</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Rímel</a>
                        </li>
                    </ul>
                    <img src={filter} alt="logo" className="logo"/>
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="text" placeholder="Pesquisar..." className="form-control"></input>
                    </form>
                    <img src={gift} alt="logo" className="logo"/>
                    <div class="text-end">
                        <button type="button" class="btn btn-primary">Login</button>
                        <button type="button" class="btn btn-outline-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
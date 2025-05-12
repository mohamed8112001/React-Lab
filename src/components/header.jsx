import React, { useContext } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThemeContext from '../context/theme';

export default function Header() {
  const countValue = useSelector(state => state.counter.countVal);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="main-navbar shadow-sm sticky-top">
        <div className="top-navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                        <h5 className="brand-name">Funda Ecom</h5>
                    </div>
                    <div className="col-md-5 my-auto">
                        <form role="search">
                            <div className="input-group">
                                <input type="search" placeholder="Search your product" className="form-control" />
                                <button className="btn bg-white" type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-5 my-auto">
                        <ul className="nav justify-content-end">
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fa fa-shopping-cart"></i> Cart (0)
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fa fa-heart"></i> Wishlist (0)
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-user"></i> Username 
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#"><i className="fa fa-user"></i> Profile</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa fa-list"></i> My Orders</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa fa-heart"></i> My Wishlist</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa fa-shopping-cart"></i> My Cart</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa fa-sign-out"></i> Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
                    Funda Ecom
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="add-recipe">Add Recipe</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="recipe-counter">Recipe Counter : { countValue }</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="setting">Setting</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="user">Users</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="todos">To Do</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/recipe">Recipes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Products</Link>
              </li>
              
              <li className="nav-item">
                <span className="nav-link" >Theme : { theme }</span>
              </li>
              
              <li className="nav-item">
                {/* <span classNameName="nav-link " >Thrme :{theme}</span> */}
              </li>
            </ul>
                </div>
            </div>
        </nav>
    </div>

  );
}

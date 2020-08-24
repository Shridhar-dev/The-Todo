import React from 'react'
import "./Header.css"
import Book from "./Img/notebook.png";

function Header() {
    return (
        <div className="container-fluid" style={{backgroundColor:'black',color:'white'}} >
            <div class="py-0 py-xl-5 py-md-5 py-sm-0 p">
            <div class="py-5">
            <div class="py-5">
            <div class="row justify-content-center align-items-center py-5">
                <div class="col-12 col-sm-12 col-md-6 col-xl-6">
                    <div class="display-1">
                        The
                        <br />
                        Global
                        <br />
                        <strong>
                        🌎Todo🚀
                        </strong>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-xl-6">
                    <img src={Book} class="img-fluid" width="200"/>
                </div>
            </div>
            <svg type="button" width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-down-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"/>
</svg>
            
        </div>
        </div>
        </div>
        </div>
    )
}

export default Header

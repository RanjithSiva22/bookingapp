import React from 'react';


function Head(){
    return(
        <div style={{paddingBottom: "50px"}}>
                <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light ">            
                <div class="container">
                <a class="navbar-brand text-info" href="/"><b>BOOKINGAPP</b></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link text-info" href="/"><b>Login</b></a>
                        </li>
                       
                        <li class="nav-item">
                            <a class="nav-link text-info" href="/register"><b>Register</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-info" href="/home"><b>Home</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-info" href="/about"><b>About</b></a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        </div>
    );
}
export default Head;
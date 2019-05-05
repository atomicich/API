import React,{ Component } from 'react';

class Navigation extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <h2 className="navbar-text">Peliculas</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0 ml-3">
                        <input className="form-control ml-auto mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <button type="button" className="btn btn-secondary my-2 my-sm-0 ml-auto">Login</button>
                    
                </div>
                </nav>
        )
    }
}
export default Navigation;
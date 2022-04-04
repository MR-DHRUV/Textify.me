import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'


export default function Navbar(props) {
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" id='nav-heading' href="/">{props.title}</a>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>

                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className= {`form-check-label text-${props.mode ==='light' ? 'dark' :'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
// to define prop types , so that no wrong data  type is send by mistake

Navbar.propTypes = {title: PropTypes.string}

// agar koi argument pass na ho call krte time 
Navbar.defaultProps = {title:"Company" ,about:"About"}


import React from 'react'
import PropTypes from 'prop-types'
// import { useState } from 'react';

export default function About(props) {


    return (
        <div className='container'  >
            
            <h1 className='my-4' >{props.heading}</h1>

        </div>
    )
}

About.prototype = {heading:PropTypes.string};
About.defaultProps ={heading:"About Us"};
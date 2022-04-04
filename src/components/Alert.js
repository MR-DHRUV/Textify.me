import React from 'react'

export default function Alert(props) {
    return (

        props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            <strong>{props.alert.msg}</strong> 
        </div>

    )
}

Alert.defaultProps = {alert : "Please Enter Some Text"};

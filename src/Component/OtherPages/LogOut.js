import React, { Component, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'


function Logout(props) {

    useEffect(() => {
        props.logout()
    })

    return (
        <Redirect to="/" />
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { dispatch({ type: "LOGOUT" }) },
    }
}
export default connect(null, mapDispatchToProps)(Logout);

import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Button, Col, Form, Row } from 'react-bootstrap'


function Login(props) {
    const { handleSubmit, errors, register } = useForm()

    const submitHandler = (data) => {
        props.addUser(data)
        props.history.push("/view")
    }

    return (
        <div >
            <br /><br /><br /><br />
            <Form onSubmit={handleSubmit(submitHandler)}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserName">
                    <Form.Label column sm="4">
                        UserName or E-mail ID
    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" name="userName" placeholder="UserName or E-mail ID" ref={register({
                            required: {
                                value: true,
                                message: "UserName or Id is required"
                            }
                        })} />
                        {errors.userName && <div>{errors.userName.message}</div>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Password
    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="password" name="password" placeholder="Password" ref={register({
                            required: {
                                value: 8,
                                message: "Password is required"
                            }
                        })} />
                        {errors.password && <div>{errors.password.message}</div>}

                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
  </Button>
                <br /> <br />
  Don't Have an account?? <Link to="/signup" className="links">Click here</Link> to Create account
</Form>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (val) => dispatch({ type: "ADD_USER", payload: val }),


    }
}
export default connect(null, mapDispatchToProps)(Login);
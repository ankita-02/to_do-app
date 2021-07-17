import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Button, Col, Form, Row } from 'react-bootstrap'


function Signup(props) {

    const { handleSubmit, errors, register } = useForm()

    const submitHandler = (data) => {
        props.addUser(data)
        props.history.push("/view")
    }
    return (
        <div>
            <br /><br />
            <Form onSubmit={handleSubmit(submitHandler)}>

                <h3>Sign Up Here</h3>
                <br /><br />
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserName">
                    <Form.Label column sm="4">
                        Enter Your Full Name :
    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="text" name="userName" placeholder="Enter Your Full Name" ref={register({
                            required: {
                                value: true,
                                message: "FullName is required"
                            }
                        })} />
                        {errors.fullName && <div>{errors.fullName.message}</div>}

                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        Enter Email ID :
    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="email" name="email" placeholder="Enter Email ID" ref={register({
                            required: {
                                value: true,
                                message: "Email Id is required"
                            }
                        })} />
                        {errors.email && <div>{errors.email.message}</div>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Create Password :
    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="password" name="password" placeholder="Create Password " ref={register({
                            required: {
                                value: 8,
                                message: "Password is required"
                            }
                        })} />
                        {errors.password && <div>{errors.password.message}</div>}
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
  </Button>
                <br /> <br />

            </Form>



        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (val) => dispatch({ type: "ADD_USER", payload: val }),


    }
}
export default connect(null, mapDispatchToProps)(Signup);


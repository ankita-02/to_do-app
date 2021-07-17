import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AiFillFilter } from 'react-icons/ai'
import { Col, Form, Row } from 'react-bootstrap'


function View(props) {

    const [showTheseToDo, setShowTheseToDo] = useState(props.todoList)

    const changeHandler = (event) => {
        switch (event.target.value) {
            case "completed":
                const completedArray = props.todoList.filter((item, index) => {
                     if (item.completed) {
                        return true
                    }
                    else {
                        return false
                    }
                })
                console.log(completedArray)
                setShowTheseToDo(completedArray)

                break;

            case "incompleted":
                const incompletedArray = props.todoList.filter((item, index) => {
                    if (!item.completed) {
                        return true
                    }
                    else {
                        return false
                    }
                })
                console.log(incompletedArray)
                setShowTheseToDo(incompletedArray)

                break;

            case "view_all":
                setShowTheseToDo(props.todoList)

                break;

            case "due_date_passed":

                const dueDatePassed = props.todoList.filter((item, index) => {

                    if (new Date(item.date) < new Date()) {
                        return true
                    }
                    else {
                        return false
                    }

                })
                setShowTheseToDo(dueDatePassed)

                break;

            default:
                setShowTheseToDo([])
        }
    }

    return (
        <div className="container">
            <br /><br />
            <h3>View Your Task by subscribing to one of the following filter!</h3><br /><br /><br />
            <Row>
                <Col sm={{ span: 4, offset: 1 }} >
                    <label><AiFillFilter />  Filter   :   </label>
                </Col>
                <Col sm={{ span: 3, offset: 1 }}>
                    <select onChange={(event) => { changeHandler(event) }}>
                        <option value="view_all" >View All</option>
                        <option value="completed" >Completed</option>
                        <option value="incompleted" >Incompleted</option>
                        <option value="due_date_passed" >Due Date Passed</option>
                    </select>
                </Col>


            </Row>

            {showTheseToDo.map((item, index) => {
                console.log(new Date(item.date), new Date(), new Date() > new Date(item.date))
                return (
                    <div key={index} className="boxstyle">
                        <div>{item.task}</div>
                        <div>Description:{item.description}</div>
                        <div>To be done by:{item.date}</div>

                    </div>

                )
            })}

        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        todoList: state.todoItems
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addtodo: (val) => dispatch({ type: "ADD_TODO", payload: val }),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
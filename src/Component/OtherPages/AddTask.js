import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap'
import { FiEdit3 } from 'react-icons/fi'
import { MdDescription } from 'react-icons/md'
import { CgCalendarDates } from 'react-icons/cg'

function AddTask(props) {

    const [task, setTask] = useState("")      //task=> Variable/state name, setTask=> a function to change the value of your variable
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")

    const addThisTask = () => {
        const todoItem = {
            task: task,
            description: description,
            date: date,
            completed: false
        }

        props.addtodo(todoItem)

        setTask("")
        setDescription("")
        setDate("")
    }

    return (
        <div className="container">
            <br></br><br></br><br></br>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FiEdit3 /></InputGroup.Text>
                <FormControl
                    type="text" value={task} name="task" onChange={(event) => setTask(event.target.value)} placeholder="Type your task here" />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"> <MdDescription /></InputGroup.Text>
                <FormControl
                    type="text" value={description} name="description" onChange={(event) => setDescription(event.target.value)} placeholder="Description" />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><CgCalendarDates /></InputGroup.Text>
                <FormControl
                    type="date" value={date} name="date" onChange={(event) => setDate(event.target.value)} />
            </InputGroup>

            <Button variant="primary" type="submit" onClick={() => { addThisTask() }}>
                Add Task
            </Button>


            {props.todoList.map((item, index) => {
                return (
                    <div key={index} className="boxstyle">
                        <Card bg="dark">
                            <Card.Body>
                                <Card.Title>{item.task}</Card.Title>
                                <Card.Text>
                                    <div>Description:{item.description}</div>
                                    <div>To be done by:{item.date}</div>
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </div>

                )
            })}
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
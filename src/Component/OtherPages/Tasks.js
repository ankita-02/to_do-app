import React, { Component, useState } from 'react'
import { Card, ButtonGroup, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiTwotoneDelete } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'




function Task(props) {

    const [task, setTask] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [completed, setCompleted] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [editIndex, setEditIndex] = useState(-1)


    const removeThisTask = (removeIndex) => {
        props.removetodo(removeIndex)
    }

    const editingDone = () => {
        const editData = {
            editToDo: {
                task: task,
                description: description,
                date: date,
            },
            editIndex: editIndex
        }

        props.edittodo(editData)
        setEditMode(false)
        setTask("")
        setDescription("")
        setDate("")

    }

    const editThisTask = (editIndex) => {
        const { task, description, date, completed } = props.todoList[editIndex]
        setTask(task) //setTask(props.todoList[editIndex].task)
        setDescription(description)
        setDate(date)
        setCompleted(completed)
        setEditMode(true)
        setEditIndex(editIndex)
    }

    const onChecked = (index) => {
        const editData = {
            editToDo: {
                completed: !props.todoList[index].completed
            },
            editIndex: index
        }
        props.edittodo(editData)
    }


    return (
        <div className="container">
            {editMode &&
                <div>
                    <br /><br />
                    <input value={task} type="text" onChange={(event) => setTask(event.target.value)} /><br />
                    <input value={description} type="text" onChange={(event) => setDescription(event.target.value)} /><br />
                    <input value={date} type="date" onChange={(event) => setDate(event.target.value)} /><br />
                    <br /><br />
                    <button onClick={() => { editingDone() }}>Done Editing</button>
                    <br /><br />
                </div>}
            <h2>All the Tasks can be viewed here.</h2>

            {props.todoList.map((item, index) => {
                return (
                    <div key={index} className={item.completed ? "completed boxstyle" : "boxstyle"}>
                        <Card bg="dark">
                            <Card.Body>
                                <Card.Title><input type="checkbox" onClick={() => { onChecked(index) }} />{item.task}</Card.Title>
                                <Card.Text>
                                    <div>Description:{item.description}</div>
                                    <div>To be done by:{item.date}</div>
                                    <ButtonGroup aria-label="Basic example">
                                        <Button className="mx-1" variant="primary" onClick={() => { editThisTask(index) }}><AiOutlineEdit />Edit</Button>

                                        <Button className="mx-1" variant="danger" onClick={() => { removeThisTask(index) }}><AiTwotoneDelete />Remove</Button>
                                    </ButtonGroup>
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
        edittodo: (val) => dispatch({ type: "EDIT_TODO", payload: val }),
        removetodo: (val) => dispatch({ type: "REMOVE_TODO", payload: val }),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Task);
import React from 'react'
import {Link} from 'react-router-dom'

function Home(){
        return(
            <div className="container">
            <br></br><br></br>
            <h2>Hello User....</h2>
            <br></br><br></br>
            Welcome to Your To Do List
            <br></br><br></br>
            Before starting Login here.
            <br></br><br></br>
            <Link to="/login" className="links">Click here</Link> for Login...
            <br></br><br></br><br></br>
            Don't have an account? <Link to="/signup" className="links">Click here</Link> to create Your account.
            </div>
            
        )
    }

export default Home;

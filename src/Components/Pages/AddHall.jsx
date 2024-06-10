import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
const AddHall = () => {
    return (
        <div className="wrapper">
            <div className="sidebar">
                <h3>Task</h3>
                <ul>
                    <li><a href="#">List of Halls</a></li>
                    
                </ul>
                <h3>Setup</h3>
                <ul>
                    <li><a href="#">Add Delegate BioData</a></li>
                   <Link to="/add-room" className="link"> <li>Add Room</li> </Link>
                    <li><a href="#">Register Delegate</a></li>
                    
                </ul>
            </div>
            <div className="form-container">
                <form action="">
                    <h1>Add New Hall</h1>
                    <div className="input-box">
                        <select required>
                            <option value="" disabled selected>Known Halls</option>
                            <option value="hall1">Hall 1</option>
                            <option value="hall2">Hall 2</option>
                            <option value="hall3">Hall 3</option>
                            
                        </select>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Hall Name" required />
                    </div>
                    <button type="submit">Save</button>
                    <button type="button" name="delete">Delete</button>
                </form>
            </div>
        </div>
    );
};

export default AddHall;

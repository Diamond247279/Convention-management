import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
const AddRoom = () => {
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
                 <Link to="/" className="link"><li>Add Hall</li></Link>   
                 <Link to="/add-accommodation" className="link"><li>Add Accomodation</li></Link>   
                    <li><a href="#">Register Delegate</a></li>
                    
                </ul>
            </div>
            <div className="form-container">
                <form action="">
                    <h1>Add New Room</h1>
                    <div className="input-box">
                        <select required>
                            <option value="" disabled selected>Select Halls</option>
                            <option value="hall1">Hall 1</option>
                            <option value="hall2">Hall 2</option>
                            <option value="hall3">Hall 3</option>
                            
                        </select> <br /><br />
                        <select required>
                            <option value="" disabled selected>Select Category</option>
                            <option value="hall1">category 1</option>
                            <option value="hall2">category 2</option>
                            <option value="hall3">category 3</option>
                            
                        </select>
                    </div> <br />
                    <div className="input-box">
                        <input type="text" placeholder="Room Number" required />
                    </div>
                    <div className="input-box">
                        <input type="number" placeholder="Max Capacity" required />
                    </div>
                    <button type="submit">Save</button>
                    <button type="button" name="delete">Delete</button>
                </form>
            </div>
        </div>
    );
};

export default AddRoom;

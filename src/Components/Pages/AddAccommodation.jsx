import React from "react";
import './style.css';
import { Link } from 'react-router-dom';

const AddAccommodation= () => {
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
                <Link to="/" className="link"><li>Add Hall</li> </Link>
                <Link to="/add-room" className="link"><li>Add Room</li> </Link>
                    
                    
                </ul>
            </div>
            <div className="form-container">
                <form action="">
                    <h1>Add Accommodation Category</h1>
                    <div className="input-box">
                        <select required>
                            <option value="" disabled selected>Known Categories</option>
                            <option value="category1">category 1</option>
                            <option value="category2">category 2</option>
                            <option value="category3">category 3</option>
                            
                        </select>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Category Name" required />
                    </div>
                    <button type="submit">Save</button>
                    <button type="button" name="delete">Delete</button>
                </form>
            </div>
        </div>
    );
};

export default AddAccommodation;

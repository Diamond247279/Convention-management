import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
const AddRoom = () => {
    return (
        <div class="container">
      <span class="big-circle"></span>
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Task</h3>
          <ul>
                    
                 <Link to="/add-hall" className="link"><li>List of Halls</li></Link>   
                 
                    
                    
                </ul>
          <h3 class="title">Setup</h3>
          <ul>
                    
                 <Link to="#" className="link"><li>Add Deligate Biodata</li></Link>   
                 <Link to="/add-hall" className="link"><li>Add New Hall</li></Link>   
                 <Link to="/" className="link"><li>Register Deligate</li></Link>   
                    
                    
                </ul>
                 </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form method="POST" action="">
            <h3 class="title">Add Room</h3>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Known Rooms</option>
                            <option value="room 1" class="select-items">room 1</option>
                            <option value="room 2" class="select-items">room 2</option>
                            <option value="room 3" class="select-items">room 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Select Hall</option>
                            <option value="Hall 1" class="select-items">Hall 1</option>
                            <option value="Hall 2" class="select-items">Hall 2</option>
                            <option value="Hall 3" class="select-items">Hall 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Select Category</option>
                            <option value="category 1" class="select-items">category 1</option>
                            <option value="category 2" class="select-items">category 2</option>
                            <option value="category 3" class="select-items">category 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
              <input type="text"  class="input" placeholder="Room Number"/>              
              
            </div>
            <div class="input-container">
              <input type="number"  class="input" placeholder="Max Capacity"/>             
              
            </div>
            <div class="input-container">
              <input type="radio"  class="input" />
              <label for="">Active</label>              
            </div>

           
            <input type="submit" value="Save" class="btn" />
            <input type="submit" value="Delete" class="btn" />
          </form>
        </div>
      </div>
    </div>

    );
};

export default AddRoom;

import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
const AddAccommodation = () => {
    return (
        <div class="container">
      <span class="big-circle"></span>
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Task</h3>
          <ul>
                    
                 <Link to="/list-hall" className="link"><li>List of Halls</li></Link>   
                 
                    
                    
                </ul>
          <h3 class="title">Setup</h3>
          <ul>
                    
                 <Link to="/" className="link"><li>Add Deligate Biodata</li></Link>   
                 <Link to="/add-hall" className="link"><li>Add New Halls</li></Link>   
                 <Link to="/add-room" className="link"><li>Add New Rooms</li></Link>   
                    
                    
                </ul>
                 </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form method="POST" action="">
            <h3 class="title">Add Accommodation</h3>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Known Category</option>
                            <option value="Category 1" class="select-items">Category 1</option>
                            <option value="Category 2" class="select-items">Category 2</option>
                            <option value="Category 3" class="select-items">Category 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
              <input type="tel"  class="input" placeholder="Category Name"/>
              
              
            </div>

           
            <input type="submit" value="Save" class="btn" />
            <input type="submit" value="Delete" class="btn" />
          </form>
        </div>
      </div>
    </div>

    );
};

export default AddAccommodation;

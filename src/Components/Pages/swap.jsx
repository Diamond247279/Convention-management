import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
const Swap = () => {
    return (
        <div class="container">
      <span class="big-circle"></span>
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Task</h3>
          <ul>
                    
                 <Link to="/add-hall" className="link"><li>Add Delegate</li></Link>   
                 
                    
                    
                </ul>
          <h3 class="title">Setup</h3>
          <ul>
                    
                 <Link to="/add-hall" className="link"><li>Add Hall</li></Link>   
                 <Link to="/add-room" className="link"><li>Add Room</li></Link>   
                    
                    
                </ul>
                 </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form method="POST" action="">
            <h3 class="title">Swap Room</h3>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Known Conventions</option>
                            <option value="convention 1" class="select-items">Convention 1</option>
                            <option value="convention 2" class="select-items">Convention 2</option>
                            <option value="convention 3" class="select-items">Convention 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" selected class="select-items">Swap this room</option>
                            <option value="room 1" class="select-items">room 1</option>
                            <option value="room 2" class="select-items">room 2</option>
                            <option value="room 3" class="select-items">room 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" selected class="select-items">With this room</option>
                            <option value="room 1" class="select-items">room 1</option>
                            <option value="room 2" class="select-items">room 2</option>
                            <option value="room 3" class="select-items">room 3</option>
                            
                        </select>               
              
            </div>

           
            <input type="submit" value="Save" class="btn" />
            <input type="submit" value="Delete" class="btn" />
          </form>
        </div>
      </div>
    </div>

    );
};

export default Swap;

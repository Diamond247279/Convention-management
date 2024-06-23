import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
const Batch = () => {
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
            <h3 class="title">Batch Registration</h3>
            
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" selected class="select-items">Select Convention</option>
                            <option value="covention 1" class="select-items">covention 1</option>
                            <option value="covention 2" class="select-items">covention 2</option>
                            <option value="covention 3" class="select-items">covention 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
              <label for="">Arrival date</label>              
              <br />
            </div>
            <div class="input-container">
                          
                          <input type="date"  class="input" />
                        </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" selected class="select-items">Select transaction</option>
                            <option value="transaction 1" class="select-items">transaction 1</option>
                            <option value="transaction 2" class="select-items">transaction 2</option>
                            <option value="transaction 3" class="select-items">transaction 3</option>
                            
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

export default Batch;

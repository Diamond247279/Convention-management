import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
const RegisterDirect = () => {
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
            <h3 class="title">Direct Registration</h3>
            <div class="input-container">
              <label for="">Arrival date</label>              
              <br />
            </div>
            <div class="input-container">                          
                          <input type="date"  class="input" />
                        </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Select Convention</option>
                            <option value="convention 1" class="select-items">convention 1</option>
                            <option value="convention 2" class="select-items">convention 2</option>
                            <option value="convention 3" class="select-items">convention 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Select Delegate</option>
                            <option value="Delegate 1" class="select-items">Delegate 1</option>
                            <option value="Delegate 2" class="select-items">Delegate 2</option>
                            <option value="Delegate 3" class="select-items">Delegate 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Select Church</option>
                            <option value="Church 1" class="select-items">Church 1</option>
                            <option value="Church 2" class="select-items">Church 2</option>
                            <option value="Church 3" class="select-items">Church 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Select room</option>
                            <option value="room 1" class="select-items">room 1</option>
                            <option value="room 2" class="select-items">room 2</option>
                            <option value="room 3" class="select-items">room 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Select category</option>
                            <option value="category 1" class="select-items">category 1</option>
                            <option value="category 2" class="select-items">category 2</option>
                            <option value="category 3" class="select-items">category 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Select record</option>
                            <option value="record 1" class="select-items">record 1</option>
                            <option value="record 2" class="select-items">record 2</option>
                            <option value="record 3" class="select-items">record 3</option>
                            
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

export default RegisterDirect;

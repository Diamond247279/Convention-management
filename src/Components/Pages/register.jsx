import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div class="container">
      <span class="big-circle"></span>
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Task</h3>
          <ul>
                    
                 <Link to="/" className="link"><li>Deligates History</li></Link>   
                 
                    
                    
                </ul>
          <h3 class="title">Setup</h3>
          <ul>
                    
                 <Link to="/" className="link"><li>Add Deligate </li></Link>   
                 <Link to="/convention" className="link"><li>Add New Convention </li></Link>   
                 <Link to="/church" className="link"><li>Add Church </li></Link>   
                 <Link to="/add-hall" className="link"><li>Add New Hall</li></Link>   
                 <Link to="/add-room" className="link"><li>Add New Room</li></Link>   
                    
                    
                </ul>
                 </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form method="POST" action="">
            <h3 class="title">Single Registration</h3>
            <div class="input-container">
              <label for="">Arrival date</label>              
              <br />
            </div>
            <div class="input-container">                          
                          <input type="date"  class="input" />
                        </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Select Registration</option>
                            <option value="Registration 1" class="select-items">Registration 1</option>
                            <option value="Registration 2" class="select-items">Registration 2</option>
                            <option value="Registration 3" class="select-items">Registration 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Delegate</option>
                            <option value="Delegate 1" class="select-items">Delegate 1</option>
                            <option value="Delegate 2" class="select-items">Delegate 2</option>
                            <option value="Delegate 3" class="select-items">Delegate 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Convention</option>
                            <option value="Convention 1" class="select-items">Convention 1</option>
                            <option value="Convention 2" class="select-items">Convention 2</option>
                            <option value="Convention 3" class="select-items">Convention 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Church Affliate</option>
                            <option value="church 1" class="select-items">church 1</option>
                            <option value="church 2" class="select-items">church 2</option>
                            <option value="church 3" class="select-items">church 3</option>
                            
                        </select>               
              
            </div>
            <div class="input-container">
              <label for="">Date</label>              
              <br />
            </div>
            <div class="input-container">
                          
                          <input type="date"  class="input" />
                        </div>
                        <div class="input-container">
              <input type="text"  class="input" placeholder="Meal Ticket"/>              
              
            </div>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Accommodation category</option>
                            <option value="category 1" class="select-items">category 1</option>
                            <option value="category 2" class="select-items">category 2</option>
                            <option value="category 3" class="select-items">category 3</option>
                            
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

export default Register;

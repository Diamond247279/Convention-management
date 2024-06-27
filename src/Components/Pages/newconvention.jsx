import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
const NewConvention = () => {
    return (
        <div class="container">
      <span class="big-circle"></span>
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Task</h3>
          <ul>
                    
                 <Link to="/list-convention" className="link"><li>List Convention</li></Link>   
                 
                    
                    
                </ul>
          <h3 class="title">Setup</h3>
          <ul>
                    
                 <Link to="/add-hall" className="link"><li>Add More Halls </li></Link>   
                 <Link to="/add-room" className="link"><li>Add More Rooms</li></Link>   
                    
                    
                </ul>
                 </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form method="POST" action="">
            <h3 class="title">Add Convention</h3>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Known Convention</option>
                            <option value="convention 1" class="select-items">convention 1</option>
                            <option value="convention 2" class="select-items">convention 2</option>
                            <option value="convention 3" class="select-items">convention 3</option>
                            
                        </select>               
              
            </div>
            
            <div class="input-container">
              <input type="text"  class="input" placeholder="Convention Year"/>              
              
            </div>
            <div class="input-container">
              <input type="text"  class="input" placeholder="Venue"/>              
              
            </div>
            <div class="input-container">
              <label for="">Arrival date</label>              
              <br />
            </div>
            <div class="input-container">
                          
              <input type="date"  class="input" />
            </div>
            <div class="input-container">
              <label for="">Departure date</label>              
              <br />
            </div>
            <div class="input-container">
                          
              <input type="date"  class="input" />
            </div>

           
            <input type="submit" value="Save" class="btn" />
            <input type="submit" value="Delete" class="btn" />
          </form>
        </div>
      </div>
    </div>

    );
};

export default NewConvention;

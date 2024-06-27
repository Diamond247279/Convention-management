import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
const NewChurch = () => {
    return (
        <div class="container">
      <span class="big-circle"></span>
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Task</h3>
          <ul>
                    
                 <Link to="/list-church" className="link"><li>List of Known Churches</li></Link>   
                 
                    
                    
                </ul>
          <h3 class="title">Setup</h3>
          <ul>
                    
                 <Link to="/" className="link"><li>Add Deligate Biodata</li></Link>   
                 <Link to="/" className="link"><li>Register Deligate</li></Link>   
                    
                    
                </ul>
                 </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form method="POST" action="">
            <h3 class="title">Add Church</h3>
            <div class="input-container">
            <select type="text" name="name" class="input" required>
                            <option value="" disabled selected class="select-items">Known Churches</option>
                            <option value="church 1" class="select-items">church 1</option>
                            <option value="church 2" class="select-items">church 2</option>
                            <option value="church 3" class="select-items">church 3</option>
                            
                        </select>               
              
            </div>
            
            <div class="input-container">
              <input type="text"  class="input" placeholder="Church Name"/>              
              
            </div>
            <div class="input-container">
              <input type="text"  class="input" placeholder="Street"/>              
              
            </div>
            <div class="input-container">
              <input type="text"  class="input" placeholder="City"/>              
              
            </div>

           
            <input type="submit" value="Save" class="btn" />
            <input type="submit" value="Delete" class="btn" />
          </form>
        </div>
      </div>
    </div>

    );
};

export default NewChurch;

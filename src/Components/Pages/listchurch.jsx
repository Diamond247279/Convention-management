import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
const ListChurch = () => {
    return (        
        <div class="table-wrapper">
        <div class="table-header">
            <h2>List of Churches</h2>
            <div class="table-actions">
                
               <Link to="/" className="link"><button class="add-new">Home</button></Link> 
            </div>
        </div>
        <table class="responsive-table">
            <thead>
                <tr>
                    <th>S No.</th>
                    <th>Church Name</th>                    
                    <th>Street</th>                    
                    <th>City</th>                    
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="S No.">1</td>                    
                    <td data-label="Name">Church 1</td>                    
                    <td data-label="Name">Street 1</td>                    
                    <td data-label="Name">City 1</td>                    
                    <td data-label="Action">
                        <button class="edit-btn">Update</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td data-label="S No.">2</td>                    
                    <td data-label="Name">Church 2</td>                    
                    <td data-label="Name">Street 2</td>                    
                    <td data-label="Name">City 2</td>                    
                    <td data-label="Action">
                        <button class="edit-btn">Update</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                </tr>
               
               
            </tbody>
        </table>
        <div class="pagination">
            <button>&laquo;</button>
            <button>1</button>
            <button>2</button>
            <button>&raquo;</button>
        </div>
    </div>
            );
        };
        
        export default ListChurch;
        

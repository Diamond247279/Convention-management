import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
const ListConvention = () => {
    return (        
        <div class="table-wrapper">
        <div class="table-header">
            <h2>List of Convention</h2>
            <div class="table-actions">
                
               <Link to="/" className="link"><button class="add-new">Home</button></Link> 
            </div>
        </div>
        <table class="responsive-table">
            <thead>
                <tr>
                    <th>S No.</th>
                    <th>Covention Year</th>                    
                    <th>Venue</th>                    
                    <th>Arrival Date</th>                    
                    <th>Departure Date</th>                    
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="S No.">1</td>                    
                    <td data-label="Name">Year 1</td>                    
                    <td data-label="Name">California</td>                    
                    <td data-label="Name">22/5/2024</td>                    
                    <td data-label="Name">22/5/2024</td>                    
                                       
                    <td data-label="Action">
                        <button class="edit-btn">Update</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td data-label="S No.">2</td>                    
                    <td data-label="Name">Year 2</td>                    
                    <td data-label="Name">Texas</td>                    
                    <td data-label="Name">26/5/2024</td>                    
                    <td data-label="Name">28/5/2024</td>                    
                                       
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
        
        export default ListConvention;
        

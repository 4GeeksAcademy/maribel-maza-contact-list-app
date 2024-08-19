import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Addcontact = () => (
    <div className="col-12 mx-auto">
        <h1 className="text-center" >Add a new contact</h1>
        <div className="col-8 mx-auto">
            <form  >
                <div class="mb-3">
                    <label for="fullname" class="form-label">Full name</label>
                    <input type="text" class="form-control" id="fullname" placeholder="First name" aria-label="First name" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" />
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone</label>
                    <input type="tel" class="form-control" id="phone" placeholder="Enter phone" aria-label="phone" />
                </div>
                <div class="mb-3">
                    <label for="adress" class="form-label">Adress</label>
                    <input type="text" class="form-control" id="adress" placeholder="Enter adress" aria-label="adress" />
                </div>
 
                <button type="submit" class="btn btn-primary col-12 mx-auto">Save</button>
            </form>
            <div className='row text-start'>
                <Link className="nav-link" to="/"><small>Or get back to Contacts</small></Link>
            </div>
        </div>
    </div>

    
);

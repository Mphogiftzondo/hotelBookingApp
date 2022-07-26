import twitter from '../icons/twitter.png'
import instagram from '../icons/instagram.png'
import facebook from '../icons/facebook.png'
import {Link} from 'react-router-dom';
import React , {useState}from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../style.css'
const ContactUs = () => {
  
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
      }; 
  return (
    <body>
      <div class = "nav">
      <Link to='/userHome' style={linkStyle}>Home</Link> | <Link to='/rooms' style={linkStyle}>Rooms</Link>|<Link style={linkStyle} to='/contactUs'>Contact Us</Link>|<text  class="btn"><Link to='/userRegister'>sign up</Link> </text><Link to='/userLogin'><text class="btn">log in</text></Link>
      </div>
      <br/>
      <br/>
  
  <form class="contactsUs">
    <h1>Contact us</h1>
    <label for="fname">First Name</label>
    <input type="text" class="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" class="lname" name="lastname" placeholder="Your last name.."/>

   

    <label for="subject">Subject</label>
    <textarea class="subject" name="subject" placeholder="Write something.." ></textarea>

    <input class="btn" type="submit" value="Submit"/>

  </form>

<footer class = "footer">
          <div class = "footer-container">
              <div>
                  <h2>About Us </h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sapiente mollitia doloribus provident? Eos quisquam aliquid vel dolorum, impedit culpa.</p>
                  <ul class = "social-icons">
                      <li class = "flex">
                        <img src ={facebook} alt = "facebook"/>
                      </li>
                      <li class = "flex">
                        <img src = {instagram} alt = "instagram"/>
                      </li>
                      <li class = "flex">
                        <img src = {twitter} alt = "twitter"/>
                      </li>
                  </ul>
              </div>

              <div>
                  <h2>Useful Links</h2>
                  <a href = "#">Blog</a>
                  <a href = "#">Rooms</a>
                  <a href = "#">Subscription</a>
                  <a href = "#">Gift Card</a>
              </div>

              <div>
                  <h2>Privacy</h2>
                  <a href = "#">Career</a>
                  <a href = "#">About Us</a>
                  <a href = "#">Contact Us</a>
                  <a href = "#">Services</a>
              </div>

              <div>
                  <h2>Have A Question</h2>
                  <div class = "contact-item">
                      <span>

                      </span>
                      <span>
                        Iziko Bo-Kaap Museum
71 Wale St, Schotsche Kloof, Cape Town, 8001
                      </span>
                  </div>
                  <div class = "contact-item">
                      <span>

                      </span>
                      <span>
                          +012 345 6789
                      </span>
                  </div>
                  <div class = "contact-item">
                      <span>

                      </span>
                      <span>
                          mphogiftzondo@gmail.com
                      </span>
                  </div>
              </div>
          </div>
      </footer>
    </body>
  );
}
export default ContactUs ;

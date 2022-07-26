import {Link,useHistory} from 'react-router-dom';

import twitter from '../icons/twitter.png'
import instagram from '../icons/instagram.png'
import facebook from '../icons/facebook.png'
import '../style.css'
import dlte from '../icons/delete.svg'
import {useAuth,logout,upload} from '../config/firebase'
import Avatar from '../icons/Avatar.svg'
import {React,useEffect,useState} from 'react';
const Bookingshistory = () => {
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(Avatar);
  const currentUser=useAuth();
  let history = useHistory();
    async function handleLogout(){
      try{
        await logout()
            history.push('/userHome') 
    
    }  catch{
            alert("Error!");
        }
      
    }
    useEffect(() => {
      if (currentUser?.photoURL) {
        setPhotoURL(currentUser.photoURL);
      }
    }, [currentUser])
 
    
  
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };
  return (
    <div>
          <div class = "nav">
      <Link to='/loggedHome' style={linkStyle}>Home</Link> | 
      <Link to='/userRooms' style={linkStyle}>Rooms</Link>|
      <Link style={linkStyle} to='/bookingHistory'>Booking History</Link>|
      <Link style={linkStyle} to='/loggedContactUs'>Contact us</Link>|<Link  to='/userProfile' style={linkStyle}>Profile</Link>|<button onClick={handleLogout} class="btn" >SignOut</button>|<div class="username"style={linkStyle}>{currentUser?.email} <img alt="Avatar" src={photoURL}class="avatar"/></div>
      </div>
      <br/>
      <br/> <br/>
      <br/> <br/>
      <br/>
      <div >
  <table>
    <h1>Booking History</h1>
    <tr>
      <th>Full Name</th>
      <th>Location</th>
      <th>Room Type</th>
      <th>check in </th>
      <th>check out </th>
      <th>Price</th>
      <th>Status</th>
      <th>Delete</th>

    </tr>
    <tr>
      <td>Mpho Zondo</td>
      <td>Sandton</td>
      <td>Single</td>
      <td>06/07/2021</td>
      <td>06/15/2021</td>

      <td>R599.00</td>

      <td>Approved</td>
      <td><img class = "flexit" src ={dlte} alt = "housekeeping"/></td>

    </tr>
    <tr>
      <td>Mpho Zondo</td>
      <td>Johannesburg</td>
      <td>1 Adult 2 Kids</td>
      <td>02/10/2022</td>
      <td>02/20/2022</td>
      <td>R299.00</td>
      <td>Approved</td>
      <td><img class = "flexit" src = {dlte} alt = "housekeeping"/></td>
      </tr>
    <tr>
      <td>Mpho Zondo</td>
      <td>Cape Town</td>
      <td>2 Adult 2 Kids</td>
      <td>06/10/2022</td>
      <td>06/15/2022</td>
      <td>R499.00</td>
      <td>Rejected</td>
      <td><img class = "flexit" src = {dlte} alt = "housekeeping"/></td>
    </tr>
  </table>
</div>



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
    </div>

);
  }
  export default Bookingshistory;
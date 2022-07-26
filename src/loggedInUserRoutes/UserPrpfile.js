import {Link,useHistory} from 'react-router-dom';
import twitter from '../icons/twitter.png'
import instagram from '../icons/instagram.png'
import facebook from '../icons/facebook.png'

import {React,useEffect,useState} from 'react';
import Avatar from '../icons/Avatar.svg'
import '../style.css'
import {useAuth,logout,upload} from '../config/firebase'
const UserProfile = () => {
    const currentUser=useAuth();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState(Avatar);
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
   
      function handleChange(e) {
        if (e.target.files[0]) {
          setPhoto(e.target.files[0])
        }
      }
    function handleClick(){
        upload(photo, currentUser, setLoading);
    }
  
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
      };
  return (
    <body>
         <div class = "nav">
      <Link to='/loggedHome' style={linkStyle}>Home</Link> | 
      <Link to='/userRooms' style={linkStyle}>Rooms</Link>|
      <Link style={linkStyle} to='/bookingHistory'>Booking History</Link>|
      <Link style={linkStyle} to='/loggedContactUs'>Contact us</Link>|<Link  to='/userProfile' style={linkStyle}>Profile</Link>|<button onClick={handleLogout} class="btn" >SignOut</button>|<div class="username"style={linkStyle}>{currentUser?.email} <img alt="Avatar" src={photoURL}class="avatar"/></div>
      </div>
      <br/> <br/> <br/> <br/> <br/>
        <div class="profile">
            <label>upload new profile photo</label>
            <input type="file" onChange={handleChange}/>
            <button disabled={loading||!photo} onClick={handleClick}>Upload</button>
        <div>
        <label>Name</label>
        <input type="text" /><br/>
        <label>Surname</label>
        <input type="text" /><br/>
        <label>phone number</label>
        <input type="text" />
        
        </div>
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
    </body>
  );
}
export default UserProfile;

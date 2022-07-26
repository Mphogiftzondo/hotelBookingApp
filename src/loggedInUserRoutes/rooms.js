import {Link,useHistory} from 'react-router-dom';
import twitter from '../icons/twitter.png'
import instagram from '../icons/instagram.png'
import facebook from '../icons/facebook.png'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import discount from '../icons/discount.png'

import Avatar from '../icons/Avatar.svg'
import '../style.css'
import {React,useEffect,useState} from 'react';
import {useAuth,logout,upload} from '../config/firebase'
const LoggedRooms = () => {
    
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
        
    const currentUser=useAuth();
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
    <body>
          <div class = "nav">
      <Link to='/loggedHome' style={linkStyle}>Home</Link> | 
      <Link to='/userRooms' style={linkStyle}>Rooms</Link>|
      <Link style={linkStyle} to='/bookingHistory'>Booking History</Link>|
      <Link style={linkStyle} to='/loggedContactUs'>Contact us</Link>|<Link  to='/userProfile' style={linkStyle}>Profile</Link>|<button onClick={handleLogout} class="btn" >SignOut</button>|<div class="username"style={linkStyle}>{currentUser?.email} <img alt="Avatar" src={photoURL}class="avatar"/></div>
      </div>
     



      <div class = "rooms" id = "rooms">
            <div class = "Rtitle">
              
            </div>
            <div class = "rooms-container">
                
                <div class = "room">
                    <div class = "room-image">
                        <img src = {img1} alt = "room image"/>
                    </div>
                    <div class = "room-text">
                        <h3>Luxury Rooms</h3>
                        <ul>
                            <li>
                              <img class = "flexi" src ={discount}alt = "tag"/>
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                            <img class = "flexi" src ={discount}alt = "tag"/>
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                            <img class = "flexi" src ={discount}alt = "tag"/>
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                        <p class = "rate">
                            <span>R599.00 /</span> Per Night
                        </p>
                        <button type = "button" class = "btn">book now</button>
                    </div>
                </div>
              
                <div class = "room">
                    <div class = "room-image">
                        <img src = {img2} alt = "room image"/>
                    </div>
                    <div class = "room-text">
                        <h3>Luxury Rooms</h3>
                        <ul>
                            <li>

                            <img class = "flexi" src ={discount}alt = "tag"/>Lorem ipsum dolor sit amet.
                            </li>
                            <li>

                            <img class = "flexi" src ={discount}alt = "tag"/>  Lorem ipsum dolor sit amet.
                            </li>
                            <li>

                            <img class = "flexi" src ={discount}alt = "tag"/>Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                        <p class = "rate">
                            <span>R299.00 /</span> Per Night
                        </p>
                        <button type = "button" class = "btn">book now</button>
                    </div>
                </div>
             
                <div class = "room">
                    <div class = "room-image">
                        <img src = {img3} alt = "room image"/>
                    </div>
                    <div class = "room-text">
                        <h3>Luxury Rooms</h3>
                        <ul>
                            <li>


                            <img class = "flexi" src ={discount}alt = "tag"/>  Lorem ipsum dolor sit amet.
                            </li>
                            <li>

                            <img class = "flexi" src ={discount}alt = "tag"/> Lorem ipsum dolor sit amet.
                            </li>
                            <li>

                            <img class = "flexi" src ={discount}alt = "tag"/>Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem repellendus maxime ullam tempore architecto provident unde expedita quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas. Unde corporis qui iusto vitae. Aut nesciunt id iste, cum esse commodi nemo?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis quasi officiis cumque, fugiat nostrum sunt, tempora animi dicta laborum beatae ratione doloremque. Delectus odio sit eius labore, atque quo?</p>
                        <p class = "rate">
                            <span>R499.00 /</span> Per Night
                        </p>
                        <button type = "button" class = "btn">book now</button>
                    </div>
                </div>

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
export default LoggedRooms;

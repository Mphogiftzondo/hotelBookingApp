import logo from './logo.svg';
//import './App.css';
import './style.css'
import Bookingshistory from './loggedInUserRoutes/bookingHistory';
import AdminLogin from './adminRoutes/hotetAdimLogin';
import HotelAdminHome from './adminRoutes/hotelAdminHome';
import Home from './normal/home';
import  HotelAdminBookings from './adminRoutes/hotelAdminBookings'
import Login from './normal/login'
import Register from './normal/register'
import Rooms from './normal/rooms'
import twitter from './icons/twitter.png'
import instagram from './icons/instagram.png'
import facebook from './icons/facebook.png'
import ContactUs from './normal/contactUs';
import HotelAdminRooms from './adminRoutes/hotelAdminRooms'
import LoggedHome from './loggedInUserRoutes/home'
import LoggedRooms from './loggedInUserRoutes/rooms'
import LoggedContactUs from './loggedInUserRoutes/contactUs'
import UserProfile from './loggedInUserRoutes/UserPrpfile'
import AddHotel from './adminRoutes/addHotel';

import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
      <Route  exact path="/">   <Landing/></Route>
      <Route exact path="/loggedHome"><LoggedHome/></Route>
      <Route exact path="/userRooms"><LoggedRooms/></Route>
      <Route exact path="/loggedContactUs"><LoggedContactUs/></Route>
      <Route  exact path="/adminLogin"><AdminLogin/></Route>
      <Route  exact path="/adminBooking">   <HotelAdminBookings/></Route>
      <Route  exact path="/adminRooms">   <HotelAdminRooms/></Route>
      <Route  exact path="/adminHome">   <HotelAdminHome/></Route>
      <Route  exact path="/userHome">   <Home/></Route>
      <Route  exact path="/userLogin">   <Login/></Route>
      <Route  exact path="/userRegister"><Register/></Route>
      <Route  exact path="/bookingHistory">   <Bookingshistory/></Route>
      <Route  exact path="/rooms">   <Rooms/></Route>
      <Route exact path="/contactUs"><ContactUs/></Route>
      <Route exact path="/userProfile"><UserProfile/></Route>
      <Route exact path="/addHotel"><AddHotel/></Route>


         </Switch>
         </Router>
    </div>
  );
}
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white'
};
function Landing(){
  return(
    <body>
    
      <div class="landing">

      <h1> Select if you Are an Admin or User</h1>
      <Link to='/adminLogin' style={linkStyle}><button class = "btn">Admin</button></Link><br></br>
      <Link to='/userHome' style={linkStyle}><button class = "btn">user</button></Link>


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
  )
}
export default App;

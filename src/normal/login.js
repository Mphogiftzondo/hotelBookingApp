import {Link} from 'react-router-dom';
import React , {useState}from 'react';
import { useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../config/firebase'
import '../style.css'
import twitter from '../icons/twitter.png'
import instagram from '../icons/instagram.png'
import facebook from '../icons/facebook.png'
const Login = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  let history = useHistory();
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };
      const login =(()=>{
        signInWithEmailAndPassword(auth,email,password).then(()=>{
          history.push('/loggedHome');
        }).catch((err)=>{
          console.log(err);
        })
        
      })
  return (
    <body>
        <div class = "nav">
      <Link to='/userHome' style={linkStyle}>Home</Link> | <Link to='/rooms' style={linkStyle}>Rooms</Link>|<Link style={linkStyle} to='/contactUs'>Contact Us</Link>|<text  class="btn"><Link to='/userRegister'>sign up</Link> </text><Link to='/userLogin'><text class="btn">log in</text></Link>
      </div>
      <br/>
      <br/>
      <div class="center-form">

      <div>


 <div class="login-container">
   <h2>Login</h2>
   <label for="uname"><b>Username</b></label>
   <input type="text" placeholder="Enter Username" name="uname" class="name" onChange={(e)=>setEmail(e.target.value) } required/>

   <label for="psw"><b>Password</b></label>
   <input type="password" placeholder="Enter Password" name="psw" class="name" onChange={(e)=>setPassword(e.target.value) } required/>

   <button class="btn" type="submit"  onClick={login}>Login</button>
   <label>

     <input type="checkbox"  name="remember"/> Remember me
   </label>

   <span class="psw">Forgot <a href="#">password?</a></span>

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
export default Login;

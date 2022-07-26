import {Link} from 'react-router-dom';
import React from 'react';
import rest from '../icons/restaurant.png'
import drink from '../icons/drink.png'
import housekeeping from '../icons/housekeeping.png'
import roomSecurity from '../icons/security.png'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import discount from '../icons/discount.png'
import twitter from '../icons/twitter.png'
import instagram from '../icons/instagram.png'
import '../style.css'
import facebook from '../icons/facebook.png'
const Home = () => {
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
        <div class = "header" id = "header">
            <div class = "head-bottom flex">
                <h2>NICE AND COMFORTABLE PLACE TO STAY</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est quos veniam impedit numquam itaque voluptatum, dicta asperiores accusamus, eligendi neque ut incidunt, modi harum molestiae atque natus officia minima.</p>
                <button type = "button" class = "head-btn">GET STARTED</button>
            </div>

        </div>

        <div class = "services" id = "services">
            <div class = "title">
                <h2>SERVICES</h2>
            </div>
                    <div class = "service-content">
                        <h2><img class = "flexit" src = {rest} alt = "food"/>Food Service/ Food Runner</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                        <button type = "button" class = "btn">Know More</button>
                    </div>


                    <div class = "service-content">
                        <h2><img class = "flexit" src = {drink} alt = "drink"/>Refreshment</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                        <button type = "button" class = "btn">Know More</button>

                    </div>



                    <div class = "service-content">
                        <h2><img class = "flexit" src = {housekeeping} alt = "housekeeping"/>Housekeeping</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                        <button type = "button" class = "btn">Know More</button>
                    </div>



                    <div class = "service-content">
                        <h2><img class = "flexit" src = {roomSecurity} alt = "Room Security"/>Room Security</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                        <button type = "button" class = "btn">Know More</button>

                </div>

            </div>


        <div class = "book">
            <h2>Book now</h2>
            <form class = "book-form">

                <div class = "form-item">
                    <label for = "checkin-date">Check In Date: </label>
                    <input type = "date" id = "chekin-date"/>
                </div>
                <div class = "form-item">
                    <label for = "checkout-date">Check Out Date: </label>
                    <input type = "date" id = "chekout-date"/>
                </div>
                <div class = "form-item">
                    <label for = "adult">Adults: </label>
                    <input type = "number" min = "1" value = "1" id = "adult"/>
                </div>
                <div class = "form-item">
                    <label for = "children">Children: </label>
                    <input type = "number" min = "1" value = "1" id = "children"/>
                </div>
                <div class = "form-item">
                    <label for = "rooms">Rooms: </label>
                    <input type = "number" min = "1" value = "1" id = "rooms"/>
                </div>
                <div class = "form-item">
                    <input type = "submit" class = "btn" value = "Book Now"/>
                </div>
            </form>
        </div>

        <div class = "rooms" id = "rooms">
            <div class = "Rtitle">
                <h2>Rooms</h2>
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


        <div class = "maps" id = "maps">
          <h2 class="location">Locations</h2>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114694.70319723772!2d27.987598162411675!3d-26.05940965567286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957398cbf40517%3A0xdf8bd21bf1eb74c!2sSandton!5e0!3m2!1sen!2sza!4v1656589500328!5m2!1sen!2sza"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114694.7362733449!2d27.98759808641359!3d-26.05937586707651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573f09ff5f259%3A0xbd28f9a7032701b5!2sBryanston%20Parallel%20Medium%20%26%20Pre%20Primary.!5e0!3m2!1sen!2sza!4v1656590260341!5m2!1sen!2sza"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423808.8888665026!2d18.375880043001818!3d-33.91522084740221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6765e329248d%3A0x395e0f731f0566e9!2sIziko%20Bo-Kaap%20Museum!5e0!3m2!1sen!2sza!4v1656590343875!5m2!1sen!2sza" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
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
export default Home;

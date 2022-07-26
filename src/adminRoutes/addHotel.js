import { Link, useHistory } from 'react-router-dom';
import twitter from '../icons/twitter.png'
import instagram from '../icons/instagram.png'
import facebook from '../icons/facebook.png'
import { collection, addDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from '../config/firebase';
import { React, useEffect, useState } from 'react';

import '../style.css'
import { useAuth, logout, upload } from '../config/firebase'
const AddHotel = () => {
    const [file, setfile] = useState(null);
    const [progressImage, setprogressImage] = useState(0)
    const [HotelImage,setHotelImage]= useState(null)
    const [hotelType, setHotelType] = useState('')
    const [location, setLocation] = useState('')
    const [bedType, setBedType] = useState('')
    const [price,setPrice]=useState('')
    const [descrption,setDescription]=useState('')
    const currentUser = useAuth();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    const hotelCollection = collection(db, 'hotelRooms')
    const onInputChange = (e) => {
        setfile(e.target.files[0]);
        //uploadImage(file)
    }
    const HandlePrice =(e)=>{
        setPrice(e.target.value)
    }
    const HandleHotelType =(e)=>{
        setHotelType(e.target.value)
    }
    const HandleLocation =(e)=>{
        setLocation(e.target.value)
    }
    const HandleBedType =(e)=>{
        setBedType(e.target.value)
    }
    const HandleDescription =(e)=>{
        setDescription(e.target.value)
    }
    function imageUploader(){
        uploadImage(file)
    }

    function uploadImage(file) {
        console.log(hotelType,location)
        if (!file) return;
        const storageRef = ref(storage, `/hotelPhotos/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
            setprogressImage(prog);
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => { 
                        addDoc(hotelCollection,{image:url,hotelType:hotelType,location:location,bedType:bedType,price:price,description:descrption})
                        .then(()=>{
                            alert('successfully')
                        })
                   })
            }
        );
    }
    
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
    };
    return (
        <body>
            <div class="nav">
                <Link to='/loggedHome' style={linkStyle}>Home</Link> |
                <Link to='/userRooms' style={linkStyle}>Rooms</Link>|
                <Link style={linkStyle} to='/bookingHistory'>Booking History</Link>|
                <Link style={linkStyle} to='/loggedContactUs'>Contact us</Link>|<Link to='/userProfile' style={linkStyle}>Profile</Link>|<button class="btn" >SignOut</button>
            </div>
            <br /> <br /> <br /> <br /> <br />
            <div class="profile">
                <label>upload Room Pictures</label>
                <input type="file"  onChange={onInputChange}/>
                {progressImage} %
                
                
                    <label for="HotelType">Choose Hotel Type:</label>
                    <select name="type" id="type"  onChange={HandleHotelType}>
                        <option value="Standard">Standaard</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Presidentia">Presidential</option>
                    </select>
                    <br />
                    <label for="location">Location</label>
                    <select name="locations" id="ChooseLocation" onChange={HandleLocation}>
                        <option value="Sandton">Sandton</option>
                        <option value="Sloane St, Bryanston, Johannesburg">Sloane St, Bryanston, Johannesburg</option>
                        <option value="Wale St, Schotsche Kloof, Cape Town">Wale St, Schotsche Kloof, Cape Town</option>
                    </select>
                    <br />
                    <label for="BedType">Bed type</label>
                    <select name="bedType" id="bedType" onChange={HandleBedType}>
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Queen">Queen</option>
                        <option value="King">King</option>
                    </select>
                    
                    <br />
                    <label>Price per night</label>
                    <input type="number" onChange={HandlePrice} />
                    <br />
                    <label>Descrption</label>
                    <textarea onChange={(e)=>setDescription(e.target.value)}/>

                    <button onClick={imageUploader}>Upload</button>
                
            </div>



            <footer class="footer">
                <div class="footer-container">
                    <div>
                        <h2>About Us </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sapiente mollitia doloribus provident? Eos quisquam aliquid vel dolorum, impedit culpa.</p>
                        <ul class="social-icons">
                            <li class="flex">
                                <img src={facebook} alt="facebook" />
                            </li>
                            <li class="flex">
                                <img src={instagram} alt="instagram" />
                            </li>
                            <li class="flex">
                                <img src={twitter} alt="twitter" />
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Useful Links</h2>
                        <a href="#">Blog</a>
                        <a href="#">Rooms</a>
                        <a href="#">Subscription</a>
                        <a href="#">Gift Card</a>
                    </div>

                    <div>
                        <h2>Privacy</h2>
                        <a href="#">Career</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Services</a>
                    </div>

                    <div>
                        <h2>Have A Question</h2>
                        <div class="contact-item">
                            <span>

                            </span>
                            <span>
                                Iziko Bo-Kaap Museum
                                71 Wale St, Schotsche Kloof, Cape Town, 8001
                            </span>
                        </div>
                        <div class="contact-item">
                            <span>

                            </span>
                            <span>
                                +012 345 6789
                            </span>
                        </div>
                        <div class="contact-item">
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
export default AddHotel;

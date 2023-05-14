import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment'




function Bookingscreen() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [room, setRoom] = useState({});
    
    //const { roomid } = useParams(); // get the roomid parameter from URL
    const { roomid, fromdate,todate } = useParams();

    const totaldays = moment(todate).diff(moment(fromdate), 'days')+ 1 ;
    const [totalamount, settotalamount] = useState()


    useEffect(() => {

        if(!localStorage.getItem('currentUser')){
            window.location.reload='/login'
        }
        async function fetchData() {
            try {
                setLoading(true);
                const data = (await axios.get(`http://localhost:5000/api/rooms/book/${roomid}`)).data;
                settotalamount(data.rentperday * totaldays)
                console.log(data);
                setRoom(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }

        }
        fetchData();
    }, []); // run this effect whenever id changes

    async function bookroom(){
        const bookingdetails = {
            room,
            userid : JSON.parse(localStorage.getItem('currentUser'))._id,
            fromdate,
            todate,
            totalamount,
            totaldays
        }

        try{
            const result = (await axios.post('http://localhost:5000/api/bookings/bookroom' , bookingdetails)).data
            window.alert('Room booked successfully!');

        }catch (error){  
            console.log(error.message);
        }
    }
      
    

    return (
        <div className='m-5'>
            {loading ? (
                <Loader/>
            ) : error ? (
                <Error/>
            ) : (
                <div>
                    <div className="row justify-content-center mt-5 bs">
                        <div className="col-md-6">
                            <h1>{room.name}</h1>
                            <img src={room.imageurls[0]} className='bigimg' />
                        </div>
                        <div className="col-md-6">
                            <div style={{ textAlign: 'right' }}>
                                <h1>Booking details</h1>
                                <hr />
                                <b>
                                    <p>Name :{JSON.parse(localStorage.getItem('currentUser')).name}</p>
                                    <p>From Date :{moment(fromdate).format('DD.MM.YYYY')}</p>
                                    <p>To Date :{moment(todate).format('DD.MM.YYYY')}</p>
                                    <p>Max Count :{room.maxcount}</p>
                                </b>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <b>
                                    <h1>Amount</h1>
                                    <hr />
                                    <p>Total days :{totaldays}</p>
                                    <p>Rent per day : {room.rentperday}</p>
                                    <p>Total Amount : {totalamount}</p>
                                </b>
                            </div>

                            <div style={{ float: 'right' }}>
                                <button className='btn btn-primary' onClick={bookroom}>Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Bookingscreen;

import "../assets/styles/card.css"
import Concerts from "../assets/images/concert.jpeg"
import Conferences from "../assets/images/Conference.jpg"
import Festivals from "../assets/images/Festival.webp"
import Movies from "../assets/images/Movies.webp"
import Exhibitions from "../assets/images/Exhibitions.jpeg"
import Sports from "../assets/images/Sports.webp"
import axios from "axios"
import { useNavigate } from "react-router-dom"



export default function Card(props: any) {
const navigate = useNavigate();

    const stdt = props.data.startdate.split("T")[0];
    const endt = props.data.enddate.split("T")[0];

    const token: string | null = sessionStorage.getItem("authToken");

    async function handleClick(){
        try{
            const response = await axios.post('http://localhost:8080/bookTicket', {
                token: token,
                eventId: props.data.eventid,
                availTickets: props.data.availability
            });

            if (response.data.message==='TokenExpiredError'){
                sessionStorage.clear();
                navigate("/");
            }
            else if(response.data.message === 'Ticket booked successfully'){
                alert("Ticket booked successfully");
            }
            else if(response.data.message === 'Tickets are unavailable'){
                alert("Sorry, no tickets available!");
            }

        } catch{
            alert("Booking Failed!");
        }
    }

    var typ;
    switch (props.data.type) {
        case "Concert":
            typ = Concerts;
            break;
        case "Conference":
            typ = Conferences;
            break;
        case "Festival":
            typ = Festivals;
            break;
        case "Movie":
            typ = Movies;
            break;
        case "Exhibition":
            typ = Exhibitions;
            break;
        case "Sports":
            typ = Sports;
            break;
        default:
            break;
    }
    console.log(props.data)

    return (
        <>
            <div className='card1'>
                <img className="card-img-top" src={typ} alt="Card image" />
                <div className="card-body">
                    <div className="card-heading d-flex justify-content-between">
                        <h5 className="card-title">{props.data.eventname}</h5>
                        <p>$ {props.data.price}</p>
                    </div>
                    <div className="dates d-flex justify-content-between">
                        <p>{stdt}</p>
                        <p>to </p>
                        <p>{endt}</p>
                    </div>
                    <div className="times d-flex justify-content-between">
                        <p>{props.data.starttime}</p>
                        <p>to </p>
                        <p>{props.data.endtime}</p>
                    </div>
                    <p className="card-text">
                        {props.data.description}
                    </p>
                    {window.location.pathname === '/dashboard' &&
                        <div className="foot d-flex justify-content-between">
                            <p>Tickets available: {props.data.availability}</p>
                            <a href="#" className="btn btn-sm book-btn" onClick={handleClick}>Book Ticket</a>
                        </div>}
                </div>
            </div>
        </>
    );
}
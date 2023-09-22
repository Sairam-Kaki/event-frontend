import "../src/assets/styles/card.css"
import image from "../src/assets/images/concert.jpeg"


export default function Card(props: any) {
    const stdt = props.data.startdate.split("T")[0];
    const endt = props.data.enddate.split("T")[0];

    console.log("card props: ", props.data)
    return (
        <>
            <div className='h-25 card1'>
                <img className="card-img-top" src={image} alt="Card image" />
                <div className="card-body">
                    <div className="card-heading d-flex justify-content-between">
                        <h4 className="card-title">{props.data.eventname}</h4>
                        <p>Price: {props.data.price}rs</p>
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
                    <div className="foot d-flex justify-content-end">
                        <a href="#" className="btn btn-primary book-btn">Book Ticket</a>
                    </div>

                </div>
            </div>
        </>
    );
}
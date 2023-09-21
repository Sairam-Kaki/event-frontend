import "../src/assets/styles/card.css"
import image from "../src/assets/images/concert.jpeg"


export default function Card() {

    return (
        <>
        <div className='h-25 card1'>
        <img className="card-img-top" src={image} alt="Card image" />
        <div className="card-body">
                <div className="card-heading d-flex justify-content-between">
                    <h4 className="card-title">Event Name</h4>
                    <p>Price: 500rs</p>
                </div>
                <div className="dates d-flex justify-content-between">
                    <p>start date</p>
                    <p>to </p>
                    <p>end date</p>
                </div>
                <div className="times d-flex justify-content-between">
                    <p>start time</p>
                    <p>to </p>
                    <p>end time</p>
                </div>
                <p className="card-text">
                    Some example text some example text. John Doe is an architect and engineer
                    Some example text some example text. John Doe is an architect and engineer
                    Some example text some example text. John Doe is an architect and engineer
                    Some example text some example text. John Doe is an architect and engineer
                </p>
                <div className="foot">
                    <a href="#" className="btn btn-primary">Book Ticket</a>
                </div>

            </div>
        </div>
        {/* <div className="card1">
            <img className="card-img-top" src={image} alt="Card image" />
            <div className="card-body">
                <div className="card-heading d-flex justify-content-between">
                    <h4 className="card-title">Event Name</h4>
                    <p>Price: 500rs</p>
                </div>
                <div className="dates d-flex justify-content-between">
                    <p>start date</p>
                    <p>to </p>
                    <p>end date</p>
                </div>
                <div className="times d-flex justify-content-between">
                    <p>start time</p>
                    <p>to </p>
                    <p>end time</p>
                </div>
                <p className="card-text">
                    Some example text some example text. John Doe is an architect and engineer
                    Some example text some example text. John Doe is an architect and engineer
                    Some example text some example text. John Doe is an architect and engineer
                    Some example text some example text. John Doe is an architect and engineer
                </p>
                <div className="foot">
                    <a href="#" className="btn btn-primary">Book Ticket</a>
                </div>

            </div>
        </div> */}
        </>
    );
}
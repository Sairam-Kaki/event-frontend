import { useState } from "react";
import axios from "axios";
import "../assets/styles/form.css"

const EventForm = () => {
    const [eventTitle, setEventTitle] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [startDateTime, setStartDateTime] = useState("");
    const [endDateTime, setEndDateTime] = useState("");
    const [price, setPrice] = useState("");
    const [tickets, setTickets] = useState("");

    const [startDate, startTime] = startDateTime.split("T");
    const [endDate, endTime] = endDateTime.split("T");


    const date = new Date();

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;


    const data = {
        eventTitle: eventTitle,
        location: location,
        description: desc,
        type: type,
        startDate: startDate,
        endDate: endDate,
        startTime: startTime,
        endTime: endTime,
        price: price,
        tickets: tickets
    };

    const close = (values: any) => {
        return (<button
            type="button"
            className="btn-close close-button"
            data-bs-dismiss={values}
        ></button>)
            ;
    };

    const createEvent = () => {

        if (
            eventTitle.trim() !== "" &&
            location.trim() !== "" &&
            desc.trim() !== "" &&
            type.trim() !== "" &&
            endDate !== "" &&
            startDate !== "" &&
            startDateTime <= endDateTime &&
            new Date(startDateTime) >= new Date(formattedDateTime)
        ) {
            const url = `http://localhost:8080/admin`;
            axios.post(url, data)
                .then((response) => {
                    if (response.data === "Event Already Exists") {
                        alert("Event Already Exists");
                    }
                    if (response.data === "Event Created Successfully") {
                       
                        alert("Event Created Successfully");
                        setTimeout(() => {
                            window.location.reload()
                        }, 100)
                    }
                    else {
                        alert(response.data)
                    }

                })
                .catch((error) => {
                   
                    alert("Network error!");

                    console.log(error);
                });
        }
        else {
            alert("Please check all the fields");
        }
    };


    return (
        <>
            {window.location.pathname === "/admindashboard" ? (
                <div >
                    <button
                        className="btn mybtn create"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                    >
                        + Create event<i className="fas fa-arrow-right"></i>
                    </button>

                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="pe-3 ps-3">
                                    <div className="modal-header">
                                        <h1 className="modal-title heading">New Event</h1>
                                        <div>{close("modal")}</div>
                                    </div>
                                    <div className="modal-body">
                                        <div className="d-flex flex-row mb-2">
                                            <div className="event-title me-2">
                                                <p className="labels">
                                                    Event Title<span className="text-danger">*</span>
                                                </p>
                                                <input
                                                    required
                                                    id="eventTitle"
                                                    className="mb-2"
                                                    onChange={(e) => setEventTitle(e.target.value)}
                                                />
                                            </div>
                                            <div className="tickets">
                                                <p className="labels">
                                                    Number of Tickets<span className="text-danger">*</span>
                                                </p>
                                                <input
                                                    type="number"
                                                    id="tickets"
                                                    name="tickets"
                                                    onChange={(e) => setTickets(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row mb-2">
                                            <div className="me-2">
                                                <p className="labels">
                                                    Location<span className="text-danger">*</span>
                                                </p>
                                                <input
                                                    required
                                                    id="location"
                                                    onChange={(e) => setLocation(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <p className="labels">
                                                    Event Type<span className="text-danger">*</span>
                                                </p>
                                                <input
                                                    required
                                                    id="type"
                                                    onChange={(e) => setType(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="dates d-flex justify-content-between mb-2">
                                            <div>
                                                <p className="labels">
                                                    Start Date<span className="text-danger">*</span>
                                                </p>
                                                <input
                                                    type="datetime-local"
                                                    id="startDate"
                                                    name="startDate"
                                                    placeholder="Date & Time"
                                                    className="date-input"
                                                    onBlur={() => {
                                                        if (endDate !== "" && endDate < startDate) {
                                                            console.log(
                                                                "End Date cannot be lesser than Start date"
                                                            );
                                                        }
                                                    }}
                                                    onChange={(e) => setStartDateTime(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <p className="labels">
                                                    End Date<span className="text-danger">*</span>
                                                </p>
                                                <input
                                                    type="datetime-local"
                                                    id="endDate"
                                                    name="endDate"
                                                    className="date-input"
                                                    onChange={(e) => {
                                                        if (startDate !== "") {
                                                            setEndDateTime(e.target.value);
                                                        } else {
                                                            console.log("error");
                                                        }
                                                    }}
                                                    onBlur={() => {
                                                        if (endDate < startDate) {
                                                            console.log(
                                                                "End Date cannot be lesser than Start date"
                                                            );
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <div className="price">
                                                <p className="labels">
                                                    Price<span className="text-danger">*</span>
                                                </p>
                                                <input
                                                    type="number"
                                                    id="price"
                                                    name="price"
                                                    className="date-input"
                                                    onChange={(e) => setPrice(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="description">
                                            <p className="labels">
                                                Description<span className="text-danger">*</span>
                                            </p>
                                            <textarea
                                                className="form-control"
                                                id="exampleFormControlTextarea1"
                                                name= "description"
                                                onChange={(e) => setDesc(e.target.value)}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="modal-footer d-flex justify-content-end">
                                        <div>
                                            {/* <ToastContainer /> */}
                                            <button
                                                className="submit-button"
                                                onClick={createEvent}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
                : (
                    ""
                )
            }
        </>
    );
};

export default EventForm;

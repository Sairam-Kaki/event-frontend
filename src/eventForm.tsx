import { useState } from "react";
// import TextField from "@mui/material/TextField";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import 'reactjs-popup/dist/index.css'
import { format } from "path";
import { start } from "repl";
import "../src/assets/styles/form.css"

const EventForm = () => {
    const [eventTitle, setEventTitle] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [startDateTime, setStartDateTime] = useState("");
    const [endDateTime, setEndDateTime] = useState("");
    const [price, setPrice] = useState("");

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
    };

    const [post, setPost] = useState(null);

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
                    if (response.data.message === "Event Already Exists") {
                        // toast.warning("Event Already Exists", {
                        //   position: toast.POSITION.TOP_RIGHT,
                        // });
                        alert("Event Already Exists");
                    }
                    if (response.data.message === "Event Created Successfully") {
                        // toast.success("Event Created Successfully", {
                        //   position: toast.POSITION.TOP_RIGHT,
                        // });
                        alert("Event Created Successfully");
                        setTimeout(() => {
                            window.location.reload()
                        }, 1000)
                    }

                })
                .catch((error) => {
                    //   toast.error("Network Error", {
                    //     position: toast.POSITION.TOP_RIGHT,
                    //   });
                    alert("Network error!");

                    console.log(error);
                });
        }
        else {
            //   toast.error("Please check all the fields", {
            //     position: toast.POSITION.TOP_RIGHT,
            //   });
            alert("Please check all the fields");
            // console.log("error: ")
        }
    };


    return (
        <>

            {window.location.pathname === "/admindashboard" && (
                <div onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        createEvent()
                    }
                }}>
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
                                        <p className="labels">
                                            Event Title<span className="text-danger">*</span>
                                        </p>
                                        <input
                                            required
                                            id="eventTitle"
                                            className="mb-2"
                                            onChange={(e) => setEventTitle(e.target.value)}
                                        />
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
                                            <div>
                                                <p className="labels">
                                                    Price<span className="text-danger">*</span>
                                                </p>
                                                <input
                                                    type="text-box"
                                                    id="price"
                                                    name="price"
                                                    className="date-input"
                                                    onChange={(e) => setPrice(e.target.value)}
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
                                                onChange={(e) => setDesc(e.target.value)}
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
                // : (
                //     ""
                // )
            }
        </>
    );
};

export default EventForm;

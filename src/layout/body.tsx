import Card from "../components/card";
import "../assets/styles/body.css"
import { useState } from "react";

export default function Body(props: any) {
    console.log("body props: ", props.data)
    const pdata = props.data;
    console.log("pdata: ", pdata)
    const [searchTerm, setSearchTerm] = useState('');

    // Filter training titles based on the search term
    const filteredTraining = pdata.filter((training: any) => {
        return training.eventname.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return (
        <div className="body-content">
                <input className="form-control search" id="myInput" type="text" placeholder="Search.." 
                onChange={(e) => setSearchTerm(e.target.value)}></input>

            <div className="mt-5 section">
                <h3>Concerts </h3>
                <div className="container-fluid card-row d-flex">

                    {filteredTraining.map((event: any) => {
                        if ((event.type).toLowerCase() === 'concert') {
                            return <Card data={event} />
                        }
                    }
                    )}

                </div>
            </div>
            <div className="section mt-5">
                <h3>Conferences </h3>
                <div className="container-fluid card-row d-flex">

                    {filteredTraining.map((event: any) => {
                        if (event.type.toLowerCase() === 'conference') {
                            return <Card data={event} />
                        }
                    }
                    )}

                </div>
            </div>
            <div className="section mt-5">
                <h3>Festival </h3>
                <div className="container-fluid card-row d-flex">

                    {filteredTraining.map((event: any) => {
                        if (event.type.toLowerCase() === 'festival') {
                            return <Card data={event} />
                        }
                    }
                    )}

                </div>
            </div>
            <div className="section mt-5">
                <h3>Movies </h3>
                <div className="container-fluid card-row d-flex">
                    {filteredTraining.map((event: any) => {
                        if (event.type.toLowerCase() === 'movie') {
                            return <Card data={event} />
                        }
                    }
                    )}
                </div>
            </div>
            <div className="section mt-5">
                <h3>Exhibitions </h3>
                <div className="container-fluid card-row d-flex">
                    {filteredTraining.map((event: any) => {
                        if (event.type.toLowerCase() === 'exhibition') {
                            return <Card data={event} />
                        }
                    }
                    )}
                </div>
            </div>
            <div className="section mt-5">
                <h3>Sports </h3>
                <div className="container-fluid card-row d-flex">
                    {filteredTraining.map((event: any) => {
                        if (event.type.toLowerCase() === 'sports') {
                            return <Card data={event} />
                        }
                    }
                    )}
                </div>
            </div>
        </div>
    );
}
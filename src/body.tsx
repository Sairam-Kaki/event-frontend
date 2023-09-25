import Card from "./card";

import "../src/assets/styles/body.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Body(props: any) {
    console.log("body props: ", props.data)
    const pdata = props.data;
    return (
        <>
        <input className="form-control" id="myInput" type="text" placeholder="Search.."></input>
            <div className="mt-5">
                <h3>Concerts </h3>
                <div className="container-fluid card-row d-flex">
                    
                    {pdata.map((event: any) => {
                        if((event.type).toLowerCase() === 'concert'){
                            return <Card data={event} />
                        }
                        }
                    )}

                </div>
            </div>
            <div className="concerts mt-5">
                <h3>Conferences </h3>
                <div className="container-fluid card-row d-flex">
                    
                    {pdata.map((event: any) => {
                        if(event.type === 'Conference'){
                            return <Card data={event} />
                        }
                        }
                    )}

                </div>
            </div>
            <div className="concerts mt-5">
                <h3>Festival </h3>
                <div className="container-fluid card-row d-flex">
                    
                    {pdata.map((event: any) => {
                        if(event.type === 'Festival'){
                            return <Card data={event} />
                        }
                        }
                    )}

                </div>
            </div>
            <div className="concerts mt-5">
                <h3>Movies </h3>
                <div className="container-fluid card-row d-flex">
                {pdata.map((event: any) => {
                        if(event.type === 'Movie'){
                            return <Card data={event} />
                        }
                        }
                    )}
                </div>
            </div>
            <div className="concerts mt-5">
                <h3>Exhibitions </h3>
                <div className="container-fluid card-row d-flex">
                {pdata.map((event: any) => {
                        if(event.type === 'Exhibition'){
                            return <Card data={event} />
                        }
                        }
                    )}
                </div>
            </div>
            <div className="concerts mt-5">
                <h3>Sports </h3>
                <div className="container-fluid card-row d-flex">
                {pdata.map((event: any) => {
                        if(event.type === 'Sports'){
                            return <Card data={event} />
                        }
                        }
                    )}
                </div>
            </div>
        </>
    );
}
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
            <div className="concerts mt-5">
                <h3>Concerts </h3>
                <div className="container-fluid card-row d-flex">
                    {/* <Card data= {props.data}/>
                    <Card data= {props.data}/>
                    <Card data= {props.data}/>
                    <Card data= {props.data}/>
                    <Card data= {props.data}/>
                    <Card data= {props.data}/>
                    <Card data= {props.data}/>
                    <Card data= {props.data}/>
                    <Card data= {props.data}/> */}
                    
                    {pdata.map((event: any) => 
                            <Card data={event} />
                    )}


                </div>
            </div>
            <div className="concerts mt-5">
                <h3>Movies </h3>
                <div className="container-fluid card-row d-flex">
                    {/* <Card data= {props.data}/> */}
                </div>
            </div>
            <div className="concerts mt-5">
                <h3>Exhibitions </h3>
                <div className="container-fluid card-row d-flex">
                    {/* <Card data= {props.data}/> */}
                </div>
            </div>
            <div className="concerts mt-5">
                <h3>Sports </h3>
                <div className="container-fluid card-row d-flex">
                    {/* <Card data= {props.data}/> */}
                </div>
            </div>
        </>
    );
}
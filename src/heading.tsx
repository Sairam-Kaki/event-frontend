import { useEffect, useState } from 'react';
import '../src/assets/styles/heading.css'
import axios from 'axios';

export default function Heading(props: any) {
    console.log("Heading");

       return (
        <>
            <header className="heading bg-info d-flex justify-content-between">
                <p className='search'>Search bar here...</p>
                <h2 className='title'>BookIt Now</h2>
                <p className='username'>{props.data.username}<span>[]</span></p>
            </header>
        </>
    );
}
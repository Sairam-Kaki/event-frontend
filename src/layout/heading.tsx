import '../assets/styles/heading.css'
import { useNavigate } from 'react-router-dom';

export default function Heading(props: any) {
    const navigate = useNavigate();

    function logout() {
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <>
            <header className="main-heading d-flex stickey-top">
                
                <h2 className='title text-center text-white' >Book<span>it</span> Now</h2>
                <div className="dropdown">
                    <button type="button" className="btn text-white dropdown-toggle" data-bs-toggle="dropdown">
                        {props.data.username}
                    </button>
                    <ul className="dropdown-menu" >

                        <li onClick={logout}>
                            <a className="dropdown-item logout" href="#">Logout
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right logout-logo" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <button className='btn btn-danger btn-xs logout' onClick={logout}> {props.data.username}
                        
                    </button> */}

            </header>

        </>
    );
}
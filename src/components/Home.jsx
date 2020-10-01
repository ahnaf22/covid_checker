import React from 'react';
import { useHistory } from "react-router-dom";
import "../cssfiles/homestyle.css";

function Home() {
    const history = useHistory();


    const start_tester = () => {
        history.replace('/tester');

    }
    return (
        <div className='home'>
            <div className="home_container">
                <div className="home_content">
                    <h1>Covid 19</h1>
                    <h4>self assessment system</h4>
                    <p onClick={start_tester} >Start Assessment</p>
                </div>
            </div>

        </div>
    )
}

export default Home;

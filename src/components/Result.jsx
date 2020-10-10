import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import doctors from '../images/doctors.svg';
import socialdist from "../images/socialdistancing.svg";

import '../cssfiles/resultstyle.css';

function Result({ points, set_points, set_step }) {
    let history = useHistory();
    const reset = () => {
        set_points(0);
        set_step(0);
        window.localStorage.setItem('stepnum', 0);
        window.localStorage.setItem('points', 0);
        history.replace('/');

    }


    return (
        <div className="result">
            <div className="result_bg">
                {
                    points < 5 &&
                    <div className="result_view">
                        <div className="result_image">
                            <img src={doctors} alt="image" />
                        </div>
                        <div className="result_info">
                            <h1>Low Chance of corona</h1>
                            <p>Keep yourself safe from corona by washing hands and remaining clean. Dont forget the Mask!</p>
                        </div>

                    </div>
                }
                {
                    points >= 5 && points <= 6 &&
                    < div className="result_view">
                        <div className="result_image">
                            <img src={socialdist} alt="image" />
                        </div>
                        <div className="result_info">
                            <h1>Possible Suspect case</h1>
                            <p>Keep social distance. wash hands and remain clean. Take Precautions and immune boosting activities. Dont forget the Mask!</p>
                        </div>
                    </div>
                }

                {
                    points > 6 && points <= 8 &&
                    <div className="result_view">
                        <div className="result_image">
                            <img src={socialdist} alt="image" />
                        </div>
                        <div className="result_info">
                            <h1>High chance of corona</h1>
                            <p>Keep social distance. wash hands and remain clean. Take Precautions and immune boosting activities. Dont forget the Mask!</p>
                        </div>
                    </div>
                }
                {
                    points > 8 &&
                    <div className="result_view">
                        <div className="result_image">
                            <img src={doctors} alt="image" />
                        </div>
                        <div className="result_info">
                            <h1>Confirmed case of corona(almost)</h1>
                            <p>Go to a hspital or call emergency number and test for corona.Isolate yourself asap. wash hands and remain clean. Take Precautions and immune boosting activities recommended by doctor.</p>
                        </div>
                    </div>
                }

                <button onClick={reset}>Take test again</button>
            </div>
        </div >
    )
}

export default Result

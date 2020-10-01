import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
                <div className="result_container">
                    {
                        points < 5 && <div><h1>Low Chance of corona</h1></div>
                    }
                    {
                        points >= 5 && <div><h1>Possible Suspect case</h1></div>
                    }
                    {
                        points > 5 && points < 7 && <div><h1>High chance of corona</h1></div>
                    }
                    {
                        points > 7 && <div><h1>Confirmed case of corona(almost)</h1></div>
                    }
                </div>
                <button onClick={reset}>Take test again</button>
            </div>
        </div >
    )
}

export default Result

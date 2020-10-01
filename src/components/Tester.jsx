import React, { useEffect, useState } from 'react';
import '../cssfiles/testerstyle.css';
import Splash from './Splash';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Result from './Result';

function Tester() {
    const [splash_screen, set_splash_screen] = useState(false);
    const [step, set_step] = useState(0);
    const [points, set_points] = useState(0);
    const local_step = window.localStorage.getItem('stepnum');
    const local_points = window.localStorage.getItem('points');

    // console.log(local_points);


    useEffect(() => {

        if (parseInt(local_step) > 0) {
            set_step(parseInt(local_step));
        }
        if (parseInt(local_points) > 0) {
            set_points(parseInt(local_points));
        }

        if (local_step == 0) {
            set_splash_screen(true);
            setTimeout(function () {
                set_splash_screen(false);
                set_step(1);
            }, 4000);
        }



    }, []);

    useEffect(() => {
        window.localStorage.setItem('stepnum', step.toString());
        window.localStorage.setItem('points', points.toString());

    }, [step, points]);

    return (
        <div className="tester">
            {
                splash_screen && <Splash />
            }

            {
                step == 1 && <Step1 set_step={set_step} set_points={set_points} />
            }
            {
                step == 2 && <Step2 set_step={set_step} set_points={set_points} />
            }
            {
                step == 3 && <Step3 set_step={set_step} set_points={set_points} />
            }
            {
                step == 4 && <Result points={points} set_step={set_step} set_points={set_points} />
            }

        </div >
    )
}

export default Tester

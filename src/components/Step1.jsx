import React, { useState } from 'react';
import '../cssfiles/step1style.css';

function Step1({ set_step, set_points }) {
    const [gender, set_gender] = useState("male");
    const [temp, set_temp] = useState(0);
    const [age, set_age] = useState(0);


    // console.log(age);
    // console.log(temp);

    const submitData = () => {

        let valid = 1;
        if (temp < 97 || temp > 110 || temp == 0) {
            alert("Please enter a valid temp.(97-110 degree F is the range)");
            valid = 0
        }
        if (age <= 0 || age > 150) {
            alert("Enter a Valid Age");
            valid = 0;
        }

        if (valid) {
            let point = parseInt(window.localStorage.getItem('points'));

            if (temp >= 99.5) {
                point += 2;
            }
            set_step(2);
            set_points(point);
            window.localStorage.setItem('gender', gender.toString());
            window.localStorage.setItem('temp', temp.toString());
            window.localStorage.setItem('age', age.toString());
            //console.log(point);
        }

    }

    return (
        <div className="step1">
            <div className="step1_container">
                <div className="step1_info">
                    <h4>Step-1</h4>
                    <p>please fill out the following fields</p>
                </div>
                <div className="step1_forms">
                    <p>Your Age</p>
                    <input
                        type="number"
                        min="0"
                        max="150"
                        onChange={(e) => { set_age(e.target.value) }}
                    />
                    <p>Gender</p>
                    <div className="step1_radiocontainer">
                        <label className="container">Male
                            <input
                                type="radio"
                                checked={gender == "male"}
                                name="gender"
                                value="male"
                                onChange={() => {
                                    set_gender('male');
                                }}
                            />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">Female
                                <input
                                type="radio"
                                checked={gender == "female"}
                                name="gender"
                                value="female"
                                onChange={() => { set_gender('female') }}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <p>Current body Temperature<span>(in Farenheit)</span></p>

                    <input
                        type="number"
                        min="97"
                        max="110"
                        onChange={(e) => { set_temp(e.target.value) }} />

                    <button onClick={submitData}>Next</button>
                </div>

            </div>
        </div >
    )
}

export default Step1;

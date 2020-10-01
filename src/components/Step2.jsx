import React from 'react';
import '../cssfiles/step2style.css';

function Step2({ set_step, set_points }) {


    const submitSecond = () => {
        const checkboxes = document.querySelectorAll(`input[name="first_symtomps"]:checked`);
        let points = parseInt(window.localStorage.getItem('points'));


        if (checkboxes.length >= 1) {
            points += (3 + checkboxes.length - 1);
        }

        set_points(points);
        set_step(3);
        // console.log(points);
    }


    return (
        <div className="step1">
            <div className="step1_container">
                <div className="step1_info">
                    <h4>Step-2</h4>
                    <p>Choose If you have any symptoms below<br />you can choose more than one symptoms</p>
                </div>
                <div className="step1_forms">
                    <label className="checkbox_container">Breathing Problem
                            <input type="checkbox" name="first_symtomps" />
                        <span className="cb_checkmark"></span>
                    </label>
                    <label className="checkbox_container">Dry Cough
                            <input type="checkbox" name="first_symtomps" />
                        <span className="cb_checkmark"></span>
                    </label>
                    <label className="checkbox_container">Sore Throat
                            <input type="checkbox" name="first_symtomps" />
                        <span className="cb_checkmark"></span>
                    </label>
                    <label className="checkbox_container">Weakness
                            <input type="checkbox" name="first_symtomps" />
                        <span className="cb_checkmark"></span>
                    </label>
                    <label className="checkbox_container">Runny Nose
                            <input type="checkbox" name="first_symtomps" />
                        <span className="cb_checkmark"></span>
                    </label>
                    <button onClick={submitSecond}>Next</button>
                </div>

            </div>


        </div>
    )
}

export default Step2

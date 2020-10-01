import React from 'react'

function Step3({ set_points, set_step }) {



    const submitThird = () => {
        const checkboxes = document.querySelectorAll(`input[name="second_symptoms"]:checked`);
        let points = parseInt(window.localStorage.getItem('points'));
        points += (checkboxes.length * 2);
        set_points(points);
        set_step(4);
        // console.log(points);
    }
    return (
        <div className="step1">
            <div className="step1_container">
                <div className="step1_info">
                    <h4>Step-3</h4>
                    <p>Please choose some additional info</p>
                </div>
                <div className="step1_forms">
                    <label className="checkbox_container">Abdominal pain
                        <input type="checkbox" name="second_symptoms" />
                        <span className="cb_checkmark"></span>
                    </label>
                    <label className="checkbox_container">Vomiting
                        <input type="checkbox" name="second_symptoms" />
                        <span className="cb_checkmark"></span>
                    </label>
                    <label className="checkbox_container">Diarrhoea
                        <input type="checkbox" name="second_symptoms" />
                        <span className="cb_checkmark"></span>
                    </label>
                    <label className="checkbox_container">Chest pain/presure
                        <input type="checkbox" name="second_symptoms" />
                        <span className="cb_checkmark"></span>
                    </label>
                    <label className="checkbox_container">Chest pain/presure
                        <input type="checkbox" name="second_symptoms" />
                        <span className="cb_checkmark"></span>
                    </label>
                    <label className="checkbox_container">Muscle Pain
                        <input type="checkbox" name="second_symptoms" />
                        <span className="cb_checkmark"></span>
                    </label>
                    <label className="checkbox_container">Loss of taste and Smell
                        <input type="checkbox" name="second_symptoms" />
                        <span className="cb_checkmark"></span>
                    </label>
                    <label className="checkbox_container">Rash on skin or discoloration of fingers or toes
                        <input type="checkbox" name="second_symptoms" />
                        <span className="cb_checkmark"></span>
                    </label>
                    <label className="checkbox_container">Loss of speech or movement
                        <input type="checkbox" name="second_symptoms" />
                        <span className="cb_checkmark"></span>
                    </label>

                    <button onClick={submitThird}>Next</button>
                </div>

            </div>


        </div>

    )
}

export default Step3

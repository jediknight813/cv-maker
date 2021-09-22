import React from 'react';
import './styles.css';



export function page() {
    return(
        <div className="page">

            <div id="PersonalInformation " className="information"> 
                <h1> Personal Information </h1>

                <div className="input_grid" id="input_grid">
                    <input placeholder="enter first name" type="text" />
                    <input placeholder="enter last name" type="email" />
                    <input placeholder="enter phone number" type="phone" />
                    <input placeholder="enter email" type="text" />
                </div>

            </div>

            <div id="#EducationAndTraining" > </div>
            
            <div className="information"> 
                <h1> Education and Training </h1>

            </div>

            <div id="WorkExperience" className="information"> 
                <h1> Work Experience </h1>
            </div>


            <button onClick={addEducationAndTraining}> add </button>
        </div>
    );

}

function addEducationAndTraining() {
    var education = document.createElement('div')
    var button = document.createElement('button')
    button.textContent="remove"
    education.className = "information"
    education.appendChild(button)
    document.getElementById("#EducationAndTraining").appendChild(education)
 
}


export default page


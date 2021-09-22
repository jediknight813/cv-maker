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


            <div id="#EducationAndTraining"  className="information"> 
                <h1> Education and Training </h1>

                <div className="input_grid" id="input_grid">
                    <input placeholder="title of qualification" type="text" />
                    <input placeholder="organization providing training" type="email" />
                    <input placeholder="start data" type="number" />
                    <input placeholder="end date" type="number" />
                </div>

            </div>

            <div id="#EducationAndTraining2"  className="information"> 
                <h1> Education and Training </h1>

                <div className="input_grid" id="input_grid">
                    <input placeholder="title of qualification" type="text" />
                    <input placeholder="organization providing training" type="email" />
                    <input placeholder="start data" type="number" />
                    <input placeholder="end date" type="number" />
                </div>

            </div>

            <div id="WorkExperience" className="information"> 
                <h1> Work Experience </h1>

                <div className="input_grid" id="input_grid">
                    <input placeholder="title of job" type="text" />
                    <input placeholder="employer" type="email" />
                    <input placeholder="start data" type="number" />
                    <input placeholder="end date" type="number" />
                </div>
            </div>


            <div id="WorkExperience2" className="information"> 
                <h1> Work Experience </h1>

                <div className="input_grid" id="input_grid">
                    <input placeholder="title of job" type="text" />
                    <input placeholder="employer" type="email" />
                    <input placeholder="start data" type="number" />
                    <input placeholder="end date" type="number" />
                </div>
            </div>

        </div>
    );

}


// function addEducationAndTraining() {
//     var education = document.createElement('div')
//     var button = document.createElement('button')
//     var header = document.createElement('h1')
//     var titleOfJob = document.createElement('input')
//     var providerOfEducation = document.createElement('input')
//     var endOfEmployment = document.createElement('input')
//     providerOfEducation.placeholder="provider of education"
//     endOfEmployment.placeholder="to"
//     var startOfEmployment = document.createElement('input')
//     startOfEmployment.placeholder="from"
//     var inputbar = document.createElement('div')
//     inputbar.className="input_grid"
//     titleOfJob.type="text"
//     titleOfJob.placeholder="title of job"
//     header.textContent = "Education and Training"
//     button.textContent="remove"
//     education.className = "information"
//     button.onclick=(button.parentNode.removeChild(button.parentNode))
//     inputbar.appendChild(providerOfEducation)
//     education.appendChild(header)
//     inputbar.appendChild(titleOfJob)
//     inputbar.appendChild(startOfEmployment)
//     inputbar.appendChild(endOfEmployment)
//     education.appendChild(inputbar)
//     education.appendChild(button)
//     document.getElementById("#EducationAndTraining").appendChild(education)

// }

export default page


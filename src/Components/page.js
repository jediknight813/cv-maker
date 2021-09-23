import React, {getElementById, appendChild} from 'react';
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

        <h1 id="EducationAndTraining" >     Education and Training </h1>

        <div id="EducationAndTraining1"  className="information"> 
                <button onClick={function() {document.getElementById('EducationAndTraining1').remove(); }} className="button"> 🗑️ </button>

                <div className="input_grid" id="input_grid">
                    <input placeholder="title of qualification" type="text" />
                    <input placeholder="organization providing training" type="email" />
                    <input placeholder="start data" type="number" />
                    <input placeholder="end date" type="number" />
                </div>
            </div>

            <div id="EducationAndTraining2"  className="information"> 
                <button onClick={function() {document.getElementById('EducationAndTraining2').remove(); }} className="button"> 🗑️ </button>

                <div className="input_grid" id="input_grid">
                    <input placeholder="title of qualification" type="text" />
                    <input placeholder="organization providing training" type="email" />
                    <input placeholder="start data" type="number" />
                    <input placeholder="end date" type="number" />
                </div>
            </div>

        <button onClick={function() { var education = document.createElement('div')
                                        var button = document.createElement('button')
                                        button.className="button"
                                        button.innerHTML="🗑️"
                                        education.innerHTML=" <span id='EducationAndTraining2' class={information}> </span>"
                                        education.appendChild(button)
                                        button.addEventListener("click", deleteItem, false);
                                        var grid = document.createElement('div')
                                        grid.className="input_grid"
                                        grid.innerHTML="<input placeholder='title of qualification' type='text' className='red' /> <input placeholder='organization providing training' type='email' /> <input placeholder='start data' type='number' /> <input placeholder='end date' type='number' />"
                                        education.appendChild(grid)
                                        education.className="information"
                                        document.getElementById('EducationAndTraining').appendChild(education)   }} className="add_button"> add </button>

        <h1 id="WorkExperience"  > Work Experience </h1> 
            <div id="WorkExperience1" className="information"> 
                <button onClick={function() {document.getElementById('WorkExperience1').remove(); }} className="button"> 🗑️ </button>

                <div className="input_grid" id="input_grid">
                    <input placeholder="title of job" type="text" />
                    <input placeholder="employer" type="email" />
                    <input placeholder="start data" type="number" />
                    <input placeholder="end date" type="number" />
                </div>
            </div>


            <div id="WorkExperience2" className="information"> 
                <button onClick={function() {document.getElementById('WorkExperience2').remove(); }} className="button"> 🗑️ </button>

                <div className="input_grid" id="input_grid">
                    <input placeholder="title of job" type="text" />
                    <input placeholder="employer" type="email" />
                    <input placeholder="start data" type="number" />
                    <input placeholder="end date" type="number" />
                </div>
            </div>

            <button onClick={function() { var education = document.createElement('div')
                                        var button = document.createElement('button')
                                        button.className="button"
                                        button.innerHTML="🗑️"
                                        education.innerHTML=" <span id='EducationAndTraining2' class={information}> </span>"
                                        education.appendChild(button)
                                        button.addEventListener("click", deleteItem, false);
                                        var grid = document.createElement('div')
                                        grid.className="input_grid"
                                        grid.innerHTML="<input placeholder='title of job' type='text' className='red' /> <input placeholder='employer' type='email' /> <input placeholder='start data' type='number' /> <input placeholder='end date' type='number' />"
                                        education.appendChild(grid)
                                        education.className="information"
                                        document.getElementById('WorkExperience').appendChild(education)   }} className="add_button"> add </button>


            </div>
    );

}



function deleteItem() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}



function addEducationAndTraining() {
    var education = document.createElement('div')
    var button = document.createElement('button')
    var header = document.createElement('h1')
    var titleOfJob = document.createElement('input')
    var providerOfEducation = document.createElement('input')
    var endOfEmployment = document.createElement('input')
    providerOfEducation.placeholder="provider of education"
    endOfEmployment.placeholder="to"
    var startOfEmployment = document.createElement('input')
    startOfEmployment.placeholder="from"
    var inputbar = document.createElement('div')
    inputbar.className="input_grid"
    titleOfJob.type="text"
    titleOfJob.placeholder="title of job"
    header.textContent = "Education and Training"
    button.textContent="remove"
    education.className = "information"
    button.onclick=(button.parentNode.removeChild(button.parentNode))
    inputbar.appendChild(providerOfEducation)
    education.appendChild(header)
    inputbar.appendChild(titleOfJob)
    inputbar.appendChild(startOfEmployment)
    inputbar.appendChild(endOfEmployment)
    education.appendChild(inputbar)
    education.appendChild(button)
    document.getElementById("EducationAndTraining").appendChild(education)

}



export default page


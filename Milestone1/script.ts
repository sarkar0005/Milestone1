document.getElementById('ResumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    //Get references to form element using IDs
    const profilePictureInput = document.getElementById(
        "perfilePicture"
    ) as HTMLInputElement;

    // Type assertions
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById(
        'education'
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
        'experience'
    ) as HTMLTextAreaElement;
    const skillsElement = document.getElementById(
        'skills'
    ) as HTMLTextAreaElement;

    //** 

    const usernameElement = document.getElementById(
        "username"
    ) as HTMLInputElement;

// check if all form element are present

    if (nameElement && 
        emailElement && 
        phoneElement && 
        educationElement && 
        experienceElement && 
        skillsElement&&

            //** 
              usernameElement
     ) {                   
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

            //** 

            const username =usernameElement.value;
            const uniquepath = `resume/${username.replace(/\s+/g, '')}_cv.html`

            //Picture element
            const profilePictureFile = profilePictureInput.files?.[0];
            const profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";



        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL} alt="ProfilePicture" class="profilePicture"> ` : '' }
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong>  ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>

            <h3>Education</h3>
            <p ${education}</p>


            <h3>Work Experience</h3>
            <p${experience}</p>

            <h3>Skills</h3>
            <p${skills}</p>
           `;

               

//Resum output
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;

    

    resumeOutputElement.style.display = "block";


        } 
    } else {
        console.error('One or more input elements are missing.');
    }
});


           
        
    

    


var _a;
(_a = document.getElementById('ResumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //Get references to form element using IDs
    var profilePictureInput = document.getElementById("perfilePicture");
    // Type assertions
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //** 
    var usernameElement = document.getElementById("username");
    // check if all form element are present
    if (nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        //** 
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //** 
        var username = usernameElement.value;
        var uniquepath = "resume/".concat(username.replace(/\s+/g, ''), "_cv.html");
        //Picture element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, " alt=\"ProfilePicture\" class=\"profilePicture\"> ") : "", "\n            <p><strong>Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Email:</strong>  ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n            <h3>Education</h3>\n            <p ").concat(education, "</p>\n\n\n            <h3>Work Experience</h3>\n            <p").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p").concat(skills, "</p>\n           ");
        //Resum output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error('One or more input elements are missing.');
    }
});

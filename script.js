// =====================================================
// MOBILE MENU
// =====================================================

const menuButton =
    document.getElementById("menu-btn");

const navbar =
    document.getElementById("navbar");


menuButton.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navLinks =
    document.querySelectorAll("#navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});



// =====================================================
// CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    const email =
        document.getElementById("email").value.trim();


    const subject =
        document.getElementById("subject").value.trim();


    const message =
        document.getElementById("message").value.trim();


    /*
       IMPORTANT:

       Replace this email with Kinza's
       real academy email.
    */

    const academyEmail =
        "your-email@example.com";


    const emailSubject =
        encodeURIComponent(subject);


    const emailBody =
        encodeURIComponent(

            "Name: " +
            name +

            "\nEmail: " +
            email +

            "\n\nMessage:\n" +
            message

        );


    window.location.href =
        "mailto:" +
        academyEmail +
        "?subject=" +
        emailSubject +
        "&body=" +
        emailBody;

});



// =====================================================
// ADMISSION FORM
// =====================================================

const admissionForm =
    document.getElementById("admissionForm");


admissionForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const studentName =
        document
        .getElementById("studentName")
        .value
        .trim();


    const parentName =
        document
        .getElementById("parentName")
        .value
        .trim();


    const phone =
        document
        .getElementById("studentPhone")
        .value
        .trim();


    const email =
        document
        .getElementById("studentEmail")
        .value
        .trim();


    const studentClass =
        document
        .getElementById("studentClass")
        .value;


    const subject =
        document
        .getElementById("subject")
        .value;


    const learningMode =
        document
        .getElementById("learningMode")
        .value;


    const previousSchool =
        document
        .getElementById("previousSchool")
        .value
        .trim();


    const message =
        document
        .getElementById("admissionMessage")
        .value
        .trim();


    /*
       Replace with Kinza's
       real academy email.
    */

    const academyEmail =
        "your-email@example.com";


    const subjectLine =
        encodeURIComponent(
            "New Admission Request - " +
            studentName
        );


    const emailBody =
        encodeURIComponent(

            "ADMISSION REQUEST\n\n" +

            "Student Name: " +
            studentName +

            "\nParent / Guardian: " +
            parentName +

            "\nPhone: " +
            phone +

            "\nEmail: " +
            email +

            "\nClass / Grade: " +
            studentClass +

            "\nSubject: " +
            subject +

            "\nLearning Mode: " +
            learningMode +

            "\nPrevious School: " +
            previousSchool +

            "\n\nAdditional Information:\n" +
            message

        );


    window.location.href =
        "mailto:" +
        academyEmail +
        "?subject=" +
        subjectLine +
        "&body=" +
        emailBody;

});



// =====================================================
// CURRENT YEAR
// =====================================================

document.getElementById("year").textContent =
    new Date().getFullYear();
// 1. Dark Mode Function
function toggleDark(){
    document.body.classList.toggle("dark");
}

// 2. Read More Function
function showMore(){
    var x = document.getElementById("moreText");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// 3. Skill Click Function
function skillClick(skill){
    document.getElementById("skillMsg").innerHTML = "You clicked: " + skill + " - I am good at " + skill;
}

// 4. Form Validation Function
function validateForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(name == "" || email == "" || message == ""){
        alert("Please fill all fields!");
        return false;
    } else {
        document.getElementById("msg").innerHTML = "Thank you " + name + "! Your message has been sent successfully.";
        return false; // prevents page reload for demo
    }
}
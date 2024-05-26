function toastifyError (text){

    Toastify({
        text: text || "This is a toast",
        duration: 2500,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
        },
       
      }).showToast();
 }

 function toastifySuccess (text){

    Toastify({
        text: text || "This is a toast",
        duration: 2500,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
       
      }).showToast();
 }

 let clear = () => {
    document.getElementById("username").value = ""; 
    document.getElementById("email").value = ""; 
    document.getElementById("password").value = "";
};
let clear1 = () => {
    document.getElementById("username").value = ""; 
    document.getElementById("password").value = ""; 
};



let addData = () => {
    let data = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    if (!data.username || !data.email || !data.password) {
        toastifyError("Please enter all required data");
        return;
    }
   
    toastifySuccess("User is successfully registered");
   
    
   
    let storedData = JSON.parse(localStorage.getItem("userData")) || [];

    // Add new data to the array
    storedData.push(data);

    
    localStorage.setItem("userData", JSON.stringify(storedData));
    
    clear();
};




let validate = () => {
    // Retrieve input values from the HTML form elements
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Retrieve stored data from local storage or initialize an empty array
    let storeData = JSON.parse(localStorage.getItem("userData")) || [];

    // Check if the username and password match any user's credentials in the stored data
    let found = storeData.some(user => user.username === username && user.password === password);

    // Display appropriate toast message based on validation result
    if (found) {
        toastifySuccess("User is successfully logged in");
    } else {
        toastifyError("Invalid username or password");
    }
    clear1();
    document.getElementById("password").value = ""; 
};


 document.addEventListener("DOMContentLoaded", function() {
    
});

 
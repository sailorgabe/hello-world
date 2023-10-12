document.addEventListener('DOMContentLoaded', function() {
    displayDate(); // Display date when the page loads

    // Event listener for the button click
    document.getElementById('displayPuppyNameBtn').addEventListener('click', displayPuppyName);
});

function displayPuppyName() {
    const input = document.getElementById('puppyNameInput').value;

    if (!input.trim()) {
        alert('Please enter a valid puppy name.');
        return;
    }

    const output = document.getElementById('puppyNameOutput');
    output.innerText = "Your puppy's name is: " + input;

    const message = document.getElementById('nameLengthMessage');
    if (input.length > 6) {
        message.innerText = "BOOM! That's a long name! Why did you name it that?";
    } else {
        message.innerText = "That's a short name!";
    }
}

function howManyDogs() {
    let numOfDogs = prompt ('How many dogs would you like to see?');

    for(let i = 0; i < numbOfDogs; i++){
        document.write("img src='onmessage.jpeg') alt='This dog is over it' >")
    }
}
function displayDate(){
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    document.getElementById('todaysDate').innerText = "Today's Date: " + formattedDate;
}

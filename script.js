function howManyDogs() {
    let numOfDogs = prompt('How many dogs would you like to see?');
    if(parseInt(numOfDogs)<0) {
        numOfDogs = prompt('ha ha you must see ONE PUPPY!')
    }
    for(let i = 0; i < numOfDogs; i++){
        document.write("<img src='https://raw.githubusercontent.com/sailorgabe/hello-world/main/Pugs.jpg') alt='This dog is over it' />")
    }
}
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


function displayDate(){
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    document.getElementById('todaysDate').innerText = "Today's Date: " + formattedDate;
}

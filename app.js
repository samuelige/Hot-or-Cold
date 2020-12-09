const ids = [
    document.getElementById('guessInput'),
    document.getElementById('submit'),
    document.getElementById('newGame'),
    document.getElementById('thermometer'),
    document.getElementById('th-mercury'),
    document.getElementById('th-scale'),
    document.querySelector('.th-top')
];

const [guessInput, submit, newGame, thermometer, th_mercury, scale, th_top, feedback_waiting, feedback_hotter, feedback_colder, feedback_neither, feedback_guessed] = ids

const variables = [ 100, 423, null, null, null];
let [maxNumber, maxHeight, maxTemp, secretNumber, oldTemp] = variables;


// Create feedback
const createFeedback = ((message, className) => {
    const feedback = document.getElementById('feedback');
    // Create a div tag
    const div = document.createElement('div');
    // Add a class Name to the created div 
    div.className = `alert ${className}`;
    // Add text to the created div (message)
    div.appendChild(document.createTextNode(message));

    feedback.appendChild(div);

    //Set time-out for the alert
    
    
})
createFeedback("Waiting for guess!", "text")

const initialize = () => {
    oldTemp = 0;
    secretNumber = getRandomInt(0, maxNumber);
    console.log(`secretNumber: ${secretNumber}`);

    maxTemp = Math.max(Math.abs(100 - secretNumber), secretNumber);
    console.log(`maxTemp: ${maxTemp}`);

    let mercury = $("#th-mercury .th-top");
        mercury.animate({height: tempToHeight(oldTemp)}, "fast");
        
    const guessInput = document.getElementById('guessInput').value;
    
    return false;
}

 // Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Transform temperature to height
const tempToHeight = (temp) => {
    return temp * maxHeight / maxTemp;
}

// Get guess temperature
function getGuessTemp() {
    const guessInput = document.getElementById('guessInput').value;
    console.log(`guess: ${guessInput}`);

    let temp = maxTemp - Math.abs(secretNumber - guessInput);
    console.log(`temp: ${temp}`);

    return temp;
}

// Clear Text Fields 
const clearFiled = () => {
    document.getElementById('guessInput').value = '';
}

const handleSubmit = (e) => {
    e.preventDefault();

    let temp = getGuessTemp();

    // Textual feedback
   
    const text = document.querySelector('.text');

    temp === maxTemp ?  (text.textContent = `You guessed it! `, text.style.color = `linear-gradient(to right, #31d35c, #2bb7da)`) : 
    temp > oldTemp ? (text.textContent = `Getting hotter`, text.style.color = `#ff0000` ) :
    oldTemp > temp ? (text.textContent = `Getting colder`, text.style.color = ` rgb(29, 161, 242)`) : 
    (text.textContent = `Is neither hotter nor colder`, text.style.color = `black`)


    oldTemp = temp;
    let mercury = $("#th-mercury .th-top");
    mercury.animate({height: tempToHeight(temp)}, "fast");

    

}

const handleNewGame = (e) => {
    clearFiled();
    document.querySelector('.mainText').classList.add('show');
    document.querySelector('.text').classList.add('hide');

}
initialize();

// createFeedback();

submit.addEventListener('submit', handleSubmit);
newGame.addEventListener('click', handleNewGame)



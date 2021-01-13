// Cassie Williams    |   Final Project - WEB 124    |   October 20,2020

//function to modify the HTML of an element in the DOM
function modifyText() {
    let paragraph = document.getElementById('modify_html');
    paragraph.setAttribute('style', 'color:#ff7676; font-weight:700');
}
const modifyBtn = document.getElementById('modify');
modifyBtn.addEventListener('click', modifyText, false);

//functions to add and remove a document node
function addNode() {
    let add = document.createElement('p');
    let newPara = document.createTextNode(`"It is, in fact, nothing short of a miracle that the modern methods of instruction have not yet entirely strangled the holy curiosity of inquiry." - Albert Einstein`);
    add.setAttribute('style', 'font-weight:700; font-size:1.4rem; border:1px solid gray; padding: 3rem');
    add.appendChild(newPara);
    let placement = document.getElementById('node');
    placement.appendChild(add);
}
const addBtn = document.getElementById('add_node');
addBtn.addEventListener('click', addNode, false);

        //remove node function
        function removeNode() {
            let remove = document.getElementById('node').firstChild;
            let container = remove.parentNode;
            container.removeChild(remove);
        }
        const removeBtn = document.getElementById('remove_node');
        removeBtn.addEventListener('click', removeNode, false);

//function to show BOM information
function showBom() {
    let info = `<h3>Window Location</h3>${window.location.href}<br>`;
    info += `<h3>Browser Version</h3>${navigator.appVersion}<br>`;
    info += `<h3>Window Size</h3><strong>Width:</strong> ${window.innerWidth}px<br>`;
    info += `<strong>Height:</strong> ${window.innerHeight}px<br>`;
    info += `<h3>Mouse Coordinates</h3><strong>X coordinate:</strong> ${window.screenX}<br>`;
    info += `<strong>Y coordinate:</strong> ${window.screenY}<br>`;
    
    let windowInfo = document.getElementById('window_info');
    windowInfo.innerHTML = info;
    windowInfo.setAttribute('style', 'background-color:#ebebebcc;');
}
const bomBtn = document.getElementById('bom_btn');
bomBtn.addEventListener('click', showBom, false);

//functions to validate form elements
function userName() {
    let message = document.getElementById('message');
    let length = username.value;
    if (length.length < 8) {
        message.textContent = "* Username needs to be at least 8 characters *";
    } else {
        message.textContent = '';
    }
}
const username = document.getElementById('username');
username.addEventListener('blur', userName, false);

        //toggle password function
        function togglePwd() {
            let pwd = document.getElementById('password');
            if (pwd.type === "password") {
                pwd.type = "text";
            } else {
                pwd.type = "password";
            }
        }
        const toggle = document.getElementById('show_hide_password');
        toggle.addEventListener('click', togglePwd, false);

        //function to show form when button is clicked
        function showForm() {
            let form = document.getElementsByTagName('form')[0];
            form.setAttribute('style', 'display:block;');
        }
        document.getElementById('show_form').addEventListener('click', showForm, false);
        
//function to run current date and time clock
function run() {
    function showDateInfo() {
        var today = new Date();
        let showDate = document.getElementById('date');
        showDate.setAttribute('style', 'background-color:#2e2e2e;');
        showDate.innerHTML = `Today's Date: ${today.toLocaleDateString()}<br>Current Time: ${today.toLocaleTimeString()}`;
    }
    setInterval(showDateInfo, 1);
}
const dateBtn = document.getElementById('date_btn');
dateBtn.addEventListener('click', run, false);

//functions to show planet arrays and update the array info on click 
let allPlanets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
function planets() {
let showPlanets = '';
    for (let i = 0; i <= 8; i++) {
        showPlanets += `${allPlanets[i]}<br>`;
    }
    document.getElementById('show_planets').innerHTML = showPlanets;

    function updateArray() { 
        let showPlanets = document.getElementById('show_planets');
        allPlanets[0] = `<strong>Mercury</strong>'s day is 58.6 Earth days.<br>`;
        allPlanets[1] = `<strong>Venus</strong>' day is 241 Earth days.<br>`;
        allPlanets[2] = `<strong>Earth day = 24 hours.</strong><br>`;        
        allPlanets[3] = `<strong>Mars</strong>' day is 24 hours and 37 minutes.<br>`;
        allPlanets[4] = `<strong>Jupiter</strong>'s day is 9.8 Earth hours.<br>`;
        allPlanets[5] = `<strong>Saturn</strong>'s day is 10.5 Earth hours.<br>`;
        allPlanets[6] = `<strong>Uranus</strong>' day is 18 Earth hours.<br>`;
        allPlanets[7] = `<strong>Neptune</strong>'s day is 19 Earth hours.<br>`;
        allPlanets[8] = `<strong>Pluto</strong>'s day is 6.4 Earth days.<br>`;
        showPlanets.innerHTML = allPlanets.join("");
    }
    const clickElement = document.getElementById('show_planets');
    clickElement.addEventListener('click', updateArray, false);
}
const planetButton = document.getElementById('planets_btn');
planetButton.addEventListener('click', planets, false);

//function to show error handling
function handleErrors() {
    let errorMessage = document.getElementById('hint');
    let userInput = document.getElementById('user_input').value;
    try {
        if (userInput == '') throw 'full of emptiness';
        if (userInput < 100) throw 'less than one benjamin';
        if (userInput > 150) throw 'more than two benjamins';
        if (isNaN(userInput)) throw 'text';
    }
    catch(err) {
        errorMessage.textContent = `User input cannot be ${err}.`;
    } 
    if (userInput > 100 && userInput < 150
        && userInput !== '' && !isNaN(userInput)) {
        errorMessage.textContent = "You've found the sweet spot!";
        errorMessage.setAttribute('style', 'font-size:1.5rem; color:#ff7676;');
    }
}
const check = document.getElementById('check_code');
check.addEventListener('click', handleErrors, false);

//function to show use of textContent rather than innerHTML for user inputs
function validate() {
    let comments = document.getElementById('comments');
    let specialChars = '<>/$&#{][}`%';

    for (let i = 0; i < comments.value.length; i++) {
        if (specialChars.indexOf(comments.value.charAt(i)) != -1) {
            alert('Evil characters detected, try again!');
            comments.focus();
        } else {
            alert('Congrats, your dream vacation will be submitted!');
        } break;
    } 
}
const submit = document.getElementById('submit');
submit.addEventListener('click', validate, false);

function showForm2() {
    let form = document.getElementsByTagName('form')[1];
    form.setAttribute('style', 'display:block;');

    let button = document.getElementById('submit');
    button.setAttribute('style', 'display:block');
}
document.getElementById('show_form2').addEventListener('click', showForm2, false);
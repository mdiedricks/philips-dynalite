// DECLARE VARIABLES
let a = 3;
let p = 2;

// DECLARE FUNCTIONS

// this function gets data
const getData = () => {
    // console.log(`Hi, I want to get data`);
    fetch('http://192.168.10.10/GetDyNet.cgi?a=3&p')
        .then(response => {
            console.log(`Response is: ${response}`);
            document.getElementById('state').innerHTML = (`a: 3, p:${response}`);
        })
}
// this function sends data
const sendData = (p) => {
    // console.log(`Hi, I want to send data`)
    fetch(`http://192.168.10.10/SetDyNet.cgi?a=3&p=${p}`,{
        method: "post"
    }).then( response => {
        console.log(`Response is: ${response}`);
    })
}
// this function is called when you click button 1
const changeStateOne = () => {
    p = 2;
    sendData(p);
    console.log(`p is equal to ${p}`)
}
// this function is called when you click button 2
const changeStateTwo = () => {
    p = 3;
    sendData(p);
    console.log(`p is equal to ${p}`)
}

// LIVE PROGRAM - the below will run live with the html

setInterval(function(){
    console.log(`Getting data...`);
    getData()
    console.log(`Data retrieved`);
}, 2000);

// EVENT-BASED PROGRAM - the below respond to events

// listen for when you click button 1
document.getElementById('btnOne').addEventListener('click', changeStateOne);
// listen for when you click button 2
document.getElementById('btnTwo').addEventListener('click', changeStateTwo);

// Author: Michael Diedricks
// Date: 01 April 2020
// 
// const setFunction = () => {
//     fetch(`http://`+inputIp+`/SetDyNet.cgi?`+`a=`+inputA+`&p=`+inputP,{
//         method: "post"
//     })
//     .then(res => res.text())
//     .then(data =>{	
//        document.getElementById('divID').innerHTML = (data);		
//     })
// }
// 
// const getFunction = () => {
//     fetch(`http://`+inputIp+`/SetDyNet.cgi?`+`a=`+inputA+`&p=`+inputP)
//     .then(res => res.text())
//     .then(data =>{	
//          document.getElementById('divID').innerHTML = (data);		
//      })
// }


// Recall preset (set)
// CGI request - P or PRESET
// Requred Params - A / C,J,F
/**
 * recallPreset takes strings as argument
 * the data returned is added to a user defined div
 * @param {string} inputIp - ip address must be a string
 * @param {string} inputA - area input as a string
 * @param {string} inputP - preset input as a string
 * @param {string} divId - div ID as a string
 * 
 */

const recallPreset = (inputIp, inputA, inputP, divId) => {
    fetch(`http://${inputIp}/SetDyNet.cgi?a=${inputA}&p=${inputP}`,{
        method: "post"
    })
}
exports.recallPreset = recallPreset;

// Request current preset (get)
// CGI request - P or PRESET
// Requred Params - A / C,J,F
/**
 * recallPreset takes strings as argument
 * the data returned is added to a user defined div
 * @param {string} inputIp - ip address must be a string
 * @param {string} inputA - area input as a string
 * @param {string} inputP - preset input as a string
 * @param {string} divId - div ID as a string
 * 
 */

const requestPreset = (inputIp, inputA, inputP, divId) => {
    fetch(`http://${inputIp}/SetDyNet.cgi?a=${inputA}&p=${inputP}`)
    .then(res => res.text())
    .then(data =>{	
        document.getElementById(divId).innerHTML = (data);		
    })
}
exports.requestPreset = requestPreset;


// Recall channel level (set)
// 


// Request current channel level(get)
// 


// Program/save preset (set)
// 


// Start task (set)


// Stop task (set)


// Pause task (set)


// Enable event (set)


// Disable event (set)


// Trigger event (set)


// Read task port value (get)


// Write on task port (set)


// Write on sub-task port (set)


// Nudge up (set)


//  Nudge down (set)


// Ramp level (set)

// stop fade (set)


// Get temperature (get)


// Set Temperature set-point (set)


// Get temperature set-point (get)


// Get DALI ballast runtime status (get)


// Set the preset offset (set)


// Set reply time out (set)


// Get reply time out (get)


// Set task register (set)


// Get task register (get)


// Set task accumulator (set)


// Get task accumulator (get)


// Area (set)


// Area (get)


// Join (set)


// Join (get)


// Channel number (set)


// Channel number (get)


// Number of physical channels (get)


// Box number (set)


// Box number (get)


//  Device Code (set)


//  Device Code (get)



// Fade time (set)
// CGI request F of FADE - required




//PDEG => Device Properties => Ethernet Applications
//Set -> Authentification required for -> None
//Set -> CGI Timeout -> 5ms  

// User Variables
let areaStart = 2;
let areaStop = 5;
let fetchPolling = 8000; 
let PdegIP = 'http://192.168.0.132/';

// Number for presets in each area in order areaStart -> areaStop 
// EG - area 2 has 9 presets, area 3 has 2 presets, area 4 has 3 presets, area 5 has 38 presets
var presets = [9,2,3,38]

// Program Variables
let areaVar = areaStart;
var webElement = 'btn';

// On Request change Preset for web
const sendData = ((Area,Preset) => {
    fetch(PdegIP + 'SetDyNet.cgi?a=' + Area + '&f=0&p=' + Preset,{
	        method: "post"
		}).then( response => {        
    })
	areaVar = Area;
})

// Polling status of displayed presets for indivitual areas
setInterval(function(){
   		fetch(PdegIP + 'GetDyNet.cgi?a=' + areaVar )
			.then(response => response.text())
				.then (data =>{	
					document.getElementById('stateA' + areaVar).innerHTML = (data);		
	})
	areaVar++;
	if (areaVar > areaStop){areaVar = areaStart;}
}, fetchPolling);

//Set all the web inputs  
for (let a = areaStart, b = 0; a <= areaStop; a++, b++) {  
	for (let p = 1; p <= presets[b]; p++) {
		webElement = 'btnA'+a+'P'+p;
		document.getElementById(webElement).addEventListener('click', function () {sendData(a,p)});
	}	
}




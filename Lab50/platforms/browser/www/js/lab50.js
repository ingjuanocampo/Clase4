document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {


/*    console.log(device.cordova);
    console.log(device.model);
    console.log(device.platform);
    console.log(device.uuid);
    console.log(device.version);
*/
onClickInfo(); 




}


function onClickInfo(){

var listView= document.getElementById('list-data');  

    console.log(device.cordova);
    console.log(device.model);
    console.log(device.platform);
    console.log(device.uuid);
    console.log(device.version);

    listView.innerHTML=
    		'<li><b>device</b>' + device.cordova + '</li>' +

    		'<li><b>device</b>' + device.model + '</li>' +
    		'<li><b>device</b>' + device.platform + '</li>' +
    		'<li><b>device</b>' + device.uuid + '</li>' +
    		'<li><b>device</b>' + device.version + '</li>'; 

}

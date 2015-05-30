document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {


/*    console.log(device.cordova);
    console.log(device.model);
    console.log(device.platform);
    console.log(device.uuid);
    console.log(device.version);
*/

}

function onClickCamera(){
	
			navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
		    destinationType: Camera.DestinationType.DATA_URL
		});

		function onSuccess(imageData) {
		    var image = document.getElementById('myImage');
		    image.src = "data:image/jpeg;base64," + imageData;
		}

		function onFail(message) {
		    alert('Failed because: ' + message);
		}

}


function onClickGalery(){

	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
	    destinationType: Camera.DestinationType.FILE_URI });

	function onSuccess(imageURI) {
	    var image = document.getElementById('myImage');
	    image.src = imageURI;
	}

	function onFail(message) {
	    alert('Failed because: ' + message);
	}


}


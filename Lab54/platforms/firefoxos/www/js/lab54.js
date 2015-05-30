var details = Lawnchair({name:'details', adapter:'dom'}, function(event){});
var currentpos=0; 



$(document).on('pagecreate', '#home', function(){

	details.all(function(data){
		for(var i = 0; i < data.length; i++) {
			
			var id = data.length + 1;

			$('#id').val(id);

			$('#show-list').append(
				'<li>ID: ' + data[i].value.id + ', Nombre' + data[i].value.name + ', Descripción' + data[i].value.description + '</li>'  
			);
		}

		$('#show-list').listview('refresh');
	});

	$('#button-save').bind('click', function(event){
		var obj = {
			id: $('#id').val(),
			name: $('#name').val(),
			description: $('#description').val()
		};

		// Salvando el objeto en este caso en el 'DOM' que es localStorage
		details.save({key:'list' + obj.id, value: obj});

		refreshList(); 

		/*details.all(function(data){

        $('#show-list').empty();

        var id;

		for(var i = 0; i < data.length; i++) {

            if (i === 0){
                id = 1;
            } else {
                id = data.length + 1;
            }

			$('#id').val(id);

			$('#show-list').append(
				'<li>ID: ' + data[i].value.id + ', Nombre' + data[i].value.name + ', Descripción' + data[i].value.description + '</li>'  
			);
		}

		$('#show-list').listview('refresh');




	});	*/	
});


	function refreshList(){
				details.all(function(data){

        $('#show-list').empty();

        var id;

		for(var i = 0; i < data.length; i++) {

            if (i === 0){
                id = 1;
            } else {
                id = data.length + 1;
            }

			$('#id').val(id);

			$('#show-list').append(
				'<li>ID: ' + data[i].value.id + ', Nombre' + data[i].value.name + ', Descripción' + data[i].value.description + '</li>'  
			);
		}

		$('#show-list').listview('refresh');




	});
	}

	/*$("show-list").delegate('li', 'click', function () {
    console.log( $(this).index() );

		});*/

	$("#show-list").on("click", "li", function() {
	    console.log( $(this).index() );
	    showAlertDelete($(this).index()); 
	});





function onConfirm(buttonIndex) {
    alert('You selected button ' + buttonIndex);

    console.log(details); 

    details.remove(1, function() {
            		refreshList(); 
            		console.log(currentpos);
            // 0
        }); 



}


function showAlertDelete(pos){
	currentpos=pos; 

	navigator.notification.confirm(
    'You are the winner!', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Game Over',           // title
    ['Restart','Exit']     // buttonLabels

);

}






});
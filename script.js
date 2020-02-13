$(function(){

		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();

		        reader.onload = function (e) {
		            $('#blah').attr('src', e.target.result);
		        }

		        reader.readAsDataURL(input.files[0]);
		    }
		}

		$("#imgInp").change(function(){
		    readURL(this);
		});



$(document).ready(function () {

    var x = null;

    //Make element draggable
    $(".drag").draggable({
        helper: 'clone',
        cursor: 'move',
        tolerance: 'fit',
		stack: '.drag',
		revert: "invalid"
    });

    $("#droppable").droppable({

        drop: function (e, ui) {

            if ($(ui.draggable)[0].id != "") {
                x = ui.helper.clone();
                ui.helper.remove();
                

            x.draggable({             
                //helper: 'original',
                containment: '#droppable',
                tolerance: 'fit',
				stack: '.drag'
            });

            x.resizable({
             
              animate: true,
              //aspectRatio: 16 / 9,

              helper: "ui-resizable-helper",
              handles: "n, e, s, w, nw, ne, sw,se"
            });
            x.appendTo('#droppable');
        }

        }
    });


});

$(document).mousedown(function(e) {            
if( $(e.target).is("#droppable .drag img") ) { // if this then the big book one works as the image is picking up the click       
    $(e.target).parent().find(".ui-resizable-handle").show(); // as img is sibling to handles, you need to get the parent, then do the find. 
	$("#tools").show();
}
else {
    //$("#droppable").find(".ui-resizable-handle").hide();
	//$("#tools").hide();
}

});


	$(function(){
	    $('#flip').click(function(e){
			$('#droppable .img').addClass('drag2');
	    });
	});

})
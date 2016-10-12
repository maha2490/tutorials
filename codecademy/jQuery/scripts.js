// scripts.jss
$(document).ready(function(){
    
	// to do list ____________________________
    $("#button").click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $(".list").append('<div class="item">' + toAdd + '</div>');
    });    
    $(document).on('click', '.item', function() {
        $(this).remove();
    });


    // changing panel ________________________
    $(".pull-me").click(function(){
        $(".panel").slideToggle("slow");    
    });    
    
});
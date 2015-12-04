//directly to menu toggle
$(document).ready(function(){
	$("#nav a").click(function(e){
		e.preventDefault();
		var n = $("#menu ul");
		
		if(n.is(":visible")) {
			n.slideUp();
		} else {
			n.slideDown();
		}
	});

});

/*for a click and drop down from menu to toggle

$(document).ready(function() {
	
		
    //Menu Open Seasame Action    
    $('#nav a').click(function(e) {
        $('#menu ul').slideToggle();
        $(this).find('span:hidden').show().siblings().hide();
    });

 
});

$(window).resize(function() {
  if ($(window).width() > 1000) {
      $('#nav a').css('display','none');
      $('#menu ul').show();
  }
  else {
      $('#nav a').css('display','block');
      $('#menu ul').hide();
  }
});*/










	
	
	
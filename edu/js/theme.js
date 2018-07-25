jQuery(document).ready(function($) {
	var sum = 0, getPrice;

	var getTotal = function(price) {
		$(price).each(function(e) {
			getPrice = $(this).find(".price").text();
			getPrice = getPrice.replace(/,/g, "");
			sum += parseInt(getPrice);
		});
	}

	getTotal(".course-info");
	
	

	
	$(".payment-total .sum").text(sum);

	$(".btn-trash").on("click", function(e) {
		e.preventDefault();
		$(this).closest(".course-info").remove();
		setTimeout(function() {
			getTotal(".course-info");
			sum = sum.toLocaleString();
			sum = sum.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
			console.log(sum);
		}, 100);
	});


	sum = sum.toLocaleString();
	sum = sum.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");


	
	//-------- RESPONSIVE VERTICAL MENU -------

    var dropdown = $("#menu .dropdown-toggle");
    var dropdownTxt = dropdown.text();

    dropdown.closest('li').append("<span>"+dropdownTxt+"</span>");
    dropdown.remove();

    setTimeout(function() {
        var submemu_link = $(".dropdown-submenu > a.mm-btn_next").attr("href");                
        $(".dropdown-submenu a.nav-link").attr("href", submemu_link);
    }, 1000);
    
    
    //call function    
    $('#menu').mmenu();

    $(".navbar-toggler").on("click", function() {
    	if($(".navbar").hasClass("mm-menu_opened")) {
    		$(".navbar").removeClass("mm-menu_opened");
    		$("html").removeAttr('class');
    		$(".mm-slideout").removeAttr('style');
    	} else {
    		$(".navbar").addClass("mm-menu_opened");
    		$("html").addClass("mm-wrapper_opened mm-wrapper_blocking mm-wrapper_background mm-wrapper_opening");
    	}
    });

    
    // -------MAGIC LINE ANIMATION -------- //

    var $el, leftPos, newWidth;
    
    //add magic line
    $(".desktop-menu .navbar-nav").append("<li id='magic-line'></li>");

    /* Cache it */
    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".desktop-menu .navbar-nav .active").width())
        .css("left", $(".desktop-menu .navbar-nav .active a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $(".desktop-menu .navbar-nav li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });


});
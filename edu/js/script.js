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


});
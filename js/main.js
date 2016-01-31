//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Sunny Yuen
//////////////////////////////////////////////////

$( document ).ready(function() {
    
	var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
	
	
	// allows call-to-action text to differ on any id-ed buttton 
	var viewText0 = $('#view0').text();
	var viewText1 = $('#view1').text();
	var viewText2 = $('#view2').text();
	var viewText3 = $('#view3').text();
	// call-to-action text after button is clicked
	var hideDetails = 'Hide Details';
	
	
	$('#login').click(function() {
  		$('div.user-info').removeClass('user-info');
		$('#login-form').addClass('details');
		// read that it's better to use .text instead of .html
		$('span.user-fullname').text(' ' + userInfo.firstName + ' ' + userInfo.lastName);
	});
	 

	$('.view-details').click(function() {
		// checks string matches original, toggles 
		$.fn.toggleText = function(t1, t2){
  		if (this.text() == t1) this.text(t2);
  		else this.text(t1);
  		return this;
		};
		// individually selects show/hide more details & toggles button msg
		if (this.id == 'view0') {
			$('#detail0').toggleClass('details');
			$(this).toggleText(viewText0, hideDetails);
		} else if (this.id == 'view1') {
			$('#detail1').toggleClass('details');
			$(this).toggleText(viewText1, hideDetails);
		} else if (this.id == 'view2') {
			$('#detail2').toggleClass('details');
			$(this).toggleText(viewText2, hideDetails);
		} else if (this.id == 'view3') {
			$('#detail3').toggleClass('details');
			$(this).toggleText(viewText3, hideDetails);
		}	
	});
	
	$('button.vote').click(function() {
			
		function calPercent() {
			// keeps track of the total
			voteCounts.total = voteCounts.great + voteCounts.greatest;
			// formula for getting the percentage
			var greatPercent = (((voteCounts.great) / voteCounts.total) * 100) + '%';
			var greatestPercent = (((voteCounts.greatest) / voteCounts.total) * 100) + '%';
			// use of .css instead of .attr b/c is cleaner w/ css controling the style of markup
			$('.great-progress').css('width', greatPercent);
			$('.greatest-progress').css('width', greatestPercent);
			
		};
			//checks value of data-vote and add 1 to either great/est count
		if ($(this).attr('data-vote') == 'great') {
			++voteCounts.great;
			// console.log('great vote count: ' + voteCounts.great);
			calPercent();
		} 
		
		else {
			++voteCounts.greatest;
			// console.log('greatest vote count: ' + voteCounts.greatest);
			calPercent();
			
		}	
	});
});

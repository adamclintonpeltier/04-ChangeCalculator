$(function() {
	$("button").click(function(){
		var cost = $('#cost').val();
		var moneyGiven =  $('#payment').val();

		// Converts everything into cents.
		cost = cost * 100;
		moneyGiven = moneyGiven * 100;

		var change = moneyGiven-cost;
		
		var dollars = Math.floor(change/100);


		// Remainging change less than one dollar is broken down in coin amounts 
		change = change % 100;
		

		var quarters = Math.floor(change/25);
		change = change % 25;

		var dimes = Math.floor(change/10);
		change = change % 10;

		var nickels = Math.floor(change/5);
		change = change % 5;

		var pennies = change;

		
		$('#dollars').text(dollars);

		$('#quarters').text(quarters);

		$('#dimes').text(dimes);

		$('#nickels').text(nickels);

		$('#pennies').text(pennies);

		})
});
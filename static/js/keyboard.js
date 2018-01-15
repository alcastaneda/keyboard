var whiteKeys = ["C","D","E","F","G","A","B"]
var posOne = ["","","","","","",""]

$("#keyboard div p").on("click", function(){
	var lol = $(this).html();
	console.log(lol);

	if(whiteKeys.indexOf(lol)>-1){
		var index= whiteKeys.indexOf(lol);
		$('').css();
	}
});
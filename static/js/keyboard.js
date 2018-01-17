var whiteKeys = ["C","D","E","F","G","A","B"]
var positionWhiteKeys = ["top:9rem, left:8rem;","top:7.5rem, left:10rem;","top:5rem, left:8rem;"]
var positionBlackKeys = ["top:6.5rem, left:8rem;"]

$("#keyboard div p").on("click", function(){
	var lol = $(this).html();
	console.log(lol);

	if(whiteKeys.indexOf(lol)>-1){
		var index= whiteKeys.indexOf(lol);
		$('').css();
	}
});
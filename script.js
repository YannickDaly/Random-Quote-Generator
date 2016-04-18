
$( document ).ready(function(){
	var quoteDiv = "";
	var authorDiv = "";
	var quoteText = "";
	var authorText = "";
	createQuote();
	
	$("#newQuote").on("click", function(){
		
		createQuote();
		
	});
	
	$("#twitterButton").on("click", function(){
			
		    var myUrl = 'https://twitter.com/intent/tweet?text=' + quoteDiv + ' ' + authorDiv;
    window.open(myUrl);
    return false;
 	 });

function createQuote(){
	
	  var output = $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
      type: 'GET', 
      data: {}, 
      dataType: 'json',
      success: function(data) {
        quoteDiv = data.quote;
        authorDiv = data.author;
			  
				document.getElementById('quotes').innerHTML = quoteDiv;
        document.getElementById('authors').innerHTML = authorDiv;
				
			$('#quotes').text(quoteDiv);
			$('#authors').text(authorDiv);
			
			},

			beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "Wrgz48BPkemshTCTN3kpfs1DjvoJp1wZIFEjsnd5VoADWTdQQC");
				

      }
			
 });
		
};
});
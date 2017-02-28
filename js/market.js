$(document).ready(function(){
	var kupnam = document.getElementById('kupnam');
	var x = document.getElementsByClassName("kupoprclass");
	var milano65add = document.getElementById('milano65add');
	var milano65remove = document.getElementById('milano65remove');
	var milano65count = document.getElementById('milano65count').innerHTML;
	var milano65countjs = 0;
	var milano90add = document.getElementById('milano90add');
	var milano90remove = document.getElementById('milano90remove');
	var milano90count = document.getElementById('milano90count').innerHTML;
	var milano90countjs = 0;
	var milano120add = document.getElementById('milano120add');
	var milano120remove = document.getElementById('milano120remove');
	var milano120count = document.getElementById('milano120count').innerHTML;
	var milano120countjs = 0;

	$(kupnam).click(function(){
		$(x).fadeOut( "slow", function() {
    // Animation complete.
  });
	});

	$(x).click(function(){
		alert("asd");
	});

	$(milano65add).on("click", function(){
		milano65countjs ++;
		document.getElementById("milano65count").innerHTML = milano65countjs;
	});
	
	$(milano65remove).on("click", function(){
		if (milano65countjs != 0) {		
		milano65countjs --;
		document.getElementById("milano65count").innerHTML = milano65countjs;
	}});

	$(milano90add).on("click", function(){
		milano90countjs ++;
		document.getElementById("milano90count").innerHTML = milano90countjs;
	});
	
	$(milano90remove).on("click", function(){
		if (milano90countjs != 0) {		
		milano90countjs --;
		document.getElementById("milano90count").innerHTML = milano90countjs;
	}});

	$(milano120add).on("click", function(){
		milano120countjs ++;
		document.getElementById("milano120count").innerHTML = milano120countjs;
	});
	
	$(milano120remove).on("click", function(){
		if (milano120countjs != 0) {		
		milano120countjs --;
		document.getElementById("milano120count").innerHTML = milano120countjs;
	}});

	/* market js may Rick help me*/

	

});
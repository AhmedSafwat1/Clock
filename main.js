var myclock =  document.getElementById('clock'),
	clockunu =  document.getElementsByClassName('clock-num'),
	myrout = 30,
	myspantime = document.querySelectorAll('.clock-num span'),
	mysend = document.getElementById('secnd'),
	myminute = document.getElementById('minute'),
	myhour  = document.getElementById('hour');
for(i=0;i<12;i++) {
	clockunu[i].style. transform = "rotate("+ myrout + "deg)"
	myspantime[i].style. transform = "rotate(-"+ myrout + "deg)"
	myrout = myrout+30;
}
/*start the coding for tim,e*/

function myclockf () {
	"use strict";
	var mydata =  new Date(),
		hour = mydata.getHours(),
		min = mydata.getMinutes(),
		secnd =mydata.getSeconds();
	console.log(secnd*6);
	mysend.style.transform = "rotate("+ secnd * 6 + "deg)";
	myminute.style.transform = "rotate("+( min * 6 + secnd/10) + "deg)";
	myhour.style.transform = "rotate("+hour * 30 + "deg)";
	setTimeout(myclockf,500)
	
}
myclockf()  
var popbackground="black"; //specify backcolor or background image for pop window
var windowtitle="Image Window";  //pop window title

function detectexist(obj) {
	return (typeof obj !="undefined");
}

function popupImage(imgpath, popwidth, popheight, textdescription) {

	function getpos() {
		leftpos=(detectexist(window.screenLeft))? 
			screenLeft+document.body.clientWidth/2-popwidth/2 : 
			detectexist(window.screenX)? screenX+innerWidth/2-popwidth/2 : 0;
		toppos=(detectexist(window.screenTop))? 
			screenTop+document.body.clientHeight/2-popheight/2 : 
			detectexist(window.screenY)? screenY+innerHeight/2-popheight/2 : 0;
		if (window.opera) {
			leftpos-=screenLeft;
			toppos-=screenTop;
		}
	}

	getpos();
	var winattributes='width='+popwidth+',height='+popheight+',resizable=yes,left='+leftpos+',top='+toppos;
	var bodyattribute=(popbackground.indexOf(".")!=-1)? 'background="'+popbackground+'"' : 'bgcolor="'+popbackground+'"';
	if (typeof popupWindow=="undefined" || popupWindow.closed)
		popupWindow=window.open("","",winattributes);
	else {
		getpos(); //uncomment these 2 lines if you wish subsequent popups to be centered too
		popupWindow.moveTo(leftpos, toppos);
		popupWindow.resizeTo(popwidth+30, popheight+30);
	}
	popupWindow.document.open();
	popupWindow.document.write('<html><title>'+windowtitle+'</title><body '+bodyattribute+'><img src="'+imgpath+'" style="margin-bottom: 0.5em"><br />'+textdescription+'</body></html>');
	popupWindow.document.close();
	popupWindow.focus();
}

function PopupCenter(pageURL, title,w,h) {
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}

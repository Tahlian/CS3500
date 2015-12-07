var AvesSaves = [];

function getNames()
{
	var s = getCookie("AvesSaves");
	if (s != "") {
	AvesSaves = s.split("|"); }
	updateList(AvesSaves);
}

function setNames()
{
	if (AvesSaves.length) {
		var s = AvesSaves[0]; } else {
		var s = ""; }
	for (var i = 1; i < AvesSaves.length; i++)
	{
		s += "|" + AvesSaves[i];
	}
	setCookie("AvesSaves", s, 2000);
}

function updateList(saveList)
{
	//console.log("TEST");
	console.log(saveList);
	var x = document.getElementById("saves");
	for (var i = x.length; i >= 0; i--)
	{
		//console.log(i);
		x.options.remove(i);
	}
	for (i = 0; i < saveList.length; i++)
	{
		var c = document.createElement("option");
		c.text = saveList[i];
		c.value = saveList[i];
		c.id = saveList[i];
		x.options.add(c, i);
	}
}

function getSelectedSave()
{
	return document.getElementById("saves").options[document.getElementById("saves").selectedIndex].value;
}

function Load()
{
	var x = document.getElementById("saves");
	if (x.length > 0)
	{
		var s = getSelectedSave();
		loadModel(s);
	}
}

function Save()
{
	var x = document.getElementById("saveInput");
	var list = document.getElementById("saves");
	if (x.value != "")
	{
		var repeat = 0;
		saveModel(x.value);
		for (i = 0; i < AvesSaves.length; i++)
		{
			if (AvesSaves[i] === x.value) {
				repeat = 1; }
		}
		if (repeat === 0) {
			AvesSaves[AvesSaves.length] = x.value; }
		AvesSaves.sort();
		updateList(AvesSaves);
		list.selectedIndex = list.options.namedItem(x.value).index;
		x.value = "";
		setNames();
	}
}

function deleteSave()
{
	var list = document.getElementById("saves");
	if (list.length > 0)
	{
		var x = list.options[list.selectedIndex].value;
		for (var i = 0; i < list.length; i++)
		{
			if (AvesSaves[i] == x)
			{
				AvesSaves.splice(i, 1);
			}
		}
		deleteModel(x);
		updateList(AvesSaves);
		setNames();
	}
}

function deleteModel(s)
{
        delCookie(s + "red");
        delCookie(s + "green");
        delCookie(s + "blue");
}


function saveModel(s)
{
	setCookie(s + "red", document.getElementById("red" ).innerHTML, 2000);
	setCookie(s + "green", document.getElementById("green" ).innerHTML, 2000);
	setCookie(s + "blue", document.getElementById("blue" ).innerHTML, 2000);
}

function loadModel(s)
{
	document.getElementById("red" ).innerHTML = getCookie(s + "red");
	document.getElementById("green" ).innerHTML = getCookie(s + "green");
	document.getElementById("blue" ).innerHTML = getCookie(s + "blue");
}


function getCookie(NameOfCookie)
{

// First we check to see if there is a cookie stored.
// Otherwise the length of document.cookie would be zero.

if (document.cookie.length > 0) 
{ 

// Second we check to see if the cookie's name is stored in the
// "document.cookie" object for the page.

// Since more than one cookie can be set on a
// single page it is possible that our cookie
// is not present, even though the "document.cookie" object
// is not just an empty text.
// If our cookie name is not present the value -1 is stored
// in the variable called "begin".

begin = document.cookie.indexOf(NameOfCookie+"="); 
if (begin != -1) // Note: != means "is not equal to"
{ 

// Our cookie was set. 
// The value stored in the cookie is returned from the function.

begin += NameOfCookie.length+1; 
end = document.cookie.indexOf(";", begin);
if (end == -1) end = document.cookie.length;
return unescape(document.cookie.substring(begin, end)); } 
}
return null; 

// Our cookie was not set. 
// The value "null" is returned from the function.

}

function setCookie(NameOfCookie, value, expiredays) 
{

// Three variables are used to set the new cookie. 
// The name of the cookie, the value to be stored,
// and finally the number of days until the cookie expires.
// The first lines in the function convert 
// the number of days to a valid date.

var ExpireDate = new Date ();
ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));

// The next line stores the cookie, simply by assigning 
// the values to the "document.cookie" object.
// Note the date is converted to Greenwich Mean time using
// the "toGMTstring()" function.

document.cookie = NameOfCookie + "=" + escape(value) + 
((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
}

function delCookie (NameOfCookie) 
{

// The function simply checks to see if the cookie is set.
// If so, the expiration date is set to Jan. 1st 1970.

//if (getCookie(NameOfCookie)) {
document.cookie = NameOfCookie + "=" +
"; expires=Thu, 01-Jan-70 00:00:01 GMT";
//}
}

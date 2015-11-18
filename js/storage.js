var saveNames = [];

function getNames()
{
	var s = getCookie("saveNames");
	if (s != "") {
	saveNames = s.split("|"); }
	updateList(saveNames);
}

function setNames()
{
	if (saveNames.length) {
		var s = saveNames[0]; } else {
		var s = ""; }
	for (var i = 1; i < saveNames.length; i++)
	{
		s += "|" + saveNames[i];
	}
	setCookie("saveNames", s, 2000);
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
		for (i = 0; i < saveNames.length; i++)
		{
			if (saveNames[i] === x.value) {
				repeat = 1; }
		}
		if (repeat === 0) {
			saveNames[saveNames.length] = x.value; }
		saveNames.sort();
		updateList(saveNames);
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
			if (saveNames[i] == x)
			{
				saveNames.splice(i, 1);
			}
		}
		deleteModel(x);
		updateList(saveNames);
		setNames();
	}
}

function deleteModel(s)
{
        delCookie(s + "moose");
        delCookie(s + "wolves");
        delCookie(s + "alpha");
        delCookie(s + "beta");
        delCookie(s + "gamma");
        delCookie(s + "delta");
        delCookie(s + "increment");
        delCookie(s + "time");
}


function saveModel(s)
{
	setCookie(s + "moose", document.getElementById("mooseInput" ).value, 2000);
	setCookie(s + "wolves", document.getElementById("wolvesInput" ).value, 2000);
	setCookie(s + "alpha", document.getElementById("alphaInput" ).value, 2000);
	setCookie(s + "beta", document.getElementById("betaInput" ).value, 2000);
	setCookie(s + "gamma", document.getElementById("gammaInput" ).value, 2000);
	setCookie(s + "delta", document.getElementById("deltaInput" ).value, 2000);
	setCookie(s + "increment", document.getElementById("incrementInput" ).value, 2000);
	setCookie(s + "time", document.getElementById("timeInput" ).value, 2000);
}

function loadModel(s)
{
	document.getElementById("mooseInput" ).value = getCookie(s + "moose");
	document.getElementById("wolvesInput" ).value = getCookie(s + "wolves");
	document.getElementById("alphaInput" ).value = getCookie(s + "alpha");
	document.getElementById("betaInput" ).value = getCookie(s + "beta");
	document.getElementById("gammaInput" ).value = getCookie(s + "gamma");
	document.getElementById("deltaInput" ).value = getCookie(s + "delta");
	document.getElementById("incrementInput" ).value = getCookie(s + "increment");
	document.getElementById("timeInput" ).value = getCookie(s + "time");
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

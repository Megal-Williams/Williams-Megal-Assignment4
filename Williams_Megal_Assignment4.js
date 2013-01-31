/* SDI 1301
Week 4 Activity: Project 4
Megal Williams
Libraries */

//JavaScript Library
var myLibrary = function(){

	//---String Problem 1 (1): Does a string follow a phone number pattern.
	function valPhone(number){
		var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			if (phoneFormat.test(number)) {
				return true;
			} else {
				return false;
			};
	};

	//---String Problem 2 (2): Does a string follow a email address pattern.
	function valEmail(email){
		var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			if (emailFormat.test(email)){
				return true;
			} else {
				return false;
			};
	};

	//---String Problem 3 (3): Is the string a URL?.
	function valUrl(url){
		var urlFormat = /((ftp|https?):\/\/)?(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/;	
			if (urlFormat.test(url)){
				return true;
			} else {
				return false;
			};
	};

	//---String Problem 4 (4): Title-case a string.
	function splitTitleCase(string) {
    	var test = string.split(" ");
    		for(var i=0,l=test.length; i<l; i++) {
	    		test[i] = test[i].substr(0,1).toUpperCase() + (test[i].length > 1 ? test[i].substr(1).toLowerCase() : " "); 
            };
            return test.join(" ");
    };

	//---String Problem 5 (5): Change separator.
	function changeSep (string,separator){
		var test = /\W/g;
		var newStr = string.replace (test, separator);
		return newStr;
	};

	//---Number Problem 1 (6): Specific number of decimal places
	function numDecimals (currency){
		var decFixed = currency.toFixed(2);
		return decFixed;
	};

	//---Number Problem 2 (7): Fuzzy-match a number: is the number above or below a number within a certain percent?
	//Makeup: Number conditional & math, deliverable 1
	//Makeup: AND and OR operators, deliverable 2
	function blurMatch (number,compare,percentage){
		var numCompare = (number/compare) * 100;
			if ((number >= compare && numCompare >= percentage) || (number < compare && numCompare < percentage)){ 
				return false;
			} else {
				return true;
			};
	};

	//---Number Problem 3 (8): Find the number of hours or days difference between two dates.
	function daysUntil(date1, date2) {
    	var today = date1,
    		compareDate = date2;
    	var one_day = 1000 * 60 * 60 * 24;
    		console.log(Math.ceil((compareDate.getTime() - today.getTime()) / (one_day)) + " Days");
    }; 
        
    //---Number Problem 4 (9): Given a string version of a number such as "42", return the value as an actual Number, such as 42.
    function retAsNum (number){
	    var convert  = parseInt(number);
	    return convert;
    };
    
    //---Array Problem 1 (10): Find the smallest value in an array that is greater than a given number.
    var smValArray = function (array,givenNum, error) {
		if (givenNum >= array[0] && givenNum < array[array.length-1]) {
			array.push(givenNum);
				array.sort(function(a,b){return a-b;}); //Makeup: coding/completeness(encapsulation), deliverable 3
					var smValue = array[array.lastIndexOf(givenNum) + 1];
			return smValue;
		} else {
			return error;
		};
	};

	//---Array Problem 2 (11): Find the total value of just the numbers in an array.
	function arrValNumber(array){
		value = 0;
		for (var i = 0; i < array.length; i++){
			var newValue = parseInt(array[i]);
			if(!isNaN(newValue)){
				value += newValue;
			};
		};
		return value;
	};

	//---Array Problem 3 (12): Return the array sorted by the value of the key
	function arrValSort (array, key){
		var sortValues = array;
		sortValues.sort(function(a,b){return a[key] - b[key]});
		return sortValues;
	};

	//---Returns
	return {
		"valPhone": valPhone,
		"valEmail": valEmail,
		"valUrl": valUrl,
		"splitTitleCase": splitTitleCase,
		"changeSep": changeSep,
		"numDecimals": numDecimals,
		"blurMatch": blurMatch,
		"daysUntil": daysUntil,
		"retAsNum": retAsNum,
		"smValArray": smValArray,
		"arrValNumber": arrValNumber,
		"arrValSort": arrValSort
	};	
};

var newLib = new myLibrary();

//Problem 1 Call:
console.log (newLib.valPhone("404-452-4331"));

//Problem 2 Call:
console.log (newLib.valEmail("megal.williams@gmail.com"));

//Problem 3 Call:
console.log (newLib.valUrl("http://www.test.com"));

//Problem 4 Call:
console.log (newLib.splitTitleCase("scalable data infrastructures"));

//Problem 5 Call:
console.log (newLib.changeSep("a,b,c","/"));

//Problem 6 Call:
console.log (newLib.numDecimals(2.1));

//Problem 7 Call:
console.log (newLib.fuzzMatch(10,20,10));

//Problem 8 Call:
newLib.daysUntil(
	new Date(2012, 09, 19),
	new Date(2013, 09, 19)
);

//Problem 9 Call:
console.log (newLib.retAsNum("42"));

//Problem 10 Call:
console.log (newLib.smValArray([6.8,6.9,7.1,7.2],7,"None Greater"));

//Problem 11 Call:
console.log (newLib.arrValNumber([10,10,"test1",10,20,"test2", true]));

//Problem 12 Call:
console.log (newLib.arrValSort ([{a:2},{a:3},{a:1}],"a"));



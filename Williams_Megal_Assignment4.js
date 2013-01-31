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




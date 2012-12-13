/* Megal WIlliams
SDI 1212
Project 4 
This Project is for extra MAKEUP: credit.*/

// String Library
var StringLibrary = function () {
	// Checks for a valid phone number
	// Returns boolean
	var isPhoneNumUS = function (str) {
		var re = /\d{3}-\d{3}-\d{4}/;
		return re.test(str);
	};
	// Checks for a valid email address
	// Returns boolean
	var isEmailAddr = function (str) {
		var re = /^\w+@[\w.\-]+\.[A-Za-z]{2,3}$/;
		return re.test(str);
	};
	// Checks for a valid URL
	// Returns boolean
	var isUrl = function (str) {
		var re = /^(?:http|https):/;
		return re.test(str);
	};
	// Capitalize the first character of each word in a string
	// Returns modified string with the first letter capitalized in each word
	var splitStrUpper = function (str) {
		var split = str.split(" ");
		var result = "";
		for (var i = 0, j = split.length; i < j; i++) {
			var spNew = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
			result = result.concat(spNew + " ");
		};
		return result;
	};
	// Changes the separator to a new given separator ex. a,b,c -> a/b/c
	var swapSeparator = function (str,newSep) {
		var re = /\W/g;
		return str.replace(re,newSep);
	};

	return {
		"isPhoneNumUS" : isPhoneNumUS,
		"isEmailAddr" : isEmailAddr,
		"isUrl" : isUrl,
		"splitStrUpper" : splitStrUpper,
		"swapSeparator" : swapSeparator

	};
};

// Array Library
var ArrayLibrary = function () {
	// Smallest value in array greater than a given number
	// null is returned if the number is not within the range of numbers in the array
	var smValGNumInArray = function (array,num) {
		array.sort(function(a,b){return a-b;});
		if (num >= array[0] && num < array[array.length-1]) {
			array.push(num);
			array.sort(function(a,b){return a-b;});
			var result = array[array.lastIndexOf(num) + 1];
			return result;
		} else {
			return null;
		};
	};
// Add up and total only numbers in an array
	// edited to not use !isNaN because a string number ex. "10" would return as a number not a string
	var totalValNumInArray = function (array) {
		var total = 0;
		for (var i = 0, j = array.length; i < j; i++) {
			if (array[i]/1 === array[i]) {
				total += array[i];
			};
		};
		return total;
	};
	// Sort objects in an array by a specific keys value that each object contains.
	var sortKeyByValInArray = function (array,givenKey) {
		return (array.sort(function(a,b){return a[givenKey] - b[givenKey];}));
	};
	// Finds index of duplicate items in an array *My own addition to the list
	var dupInArray = function (findItem,array) {
		var holdIndex = [], index;
		for (var i = 0, j = array.length; i < j; i++) {
			if (array[i] === findItem) {
				index = array.indexOf(array[i],i);
				holdIndex.push(index);
			};
		};
		return holdIndex;
	};

	return {
		"smValGNumInArray" : smValGNumInArray,
		"lrgValLNumInArray" : lrgValLNumInArray,
		"totalValNumInArray" : totalValNumInArray,
		"sortKeyByValInArray" : sortKeyByValInArray,
		"dupInArray" : dupInArray
	};
};

/* Test Area

Loop speed testing
using jsperf.com to test speed
http://jsperf.com/fors-vs-while/10 */

// String Tests
console.log("String Tests");
var stringLib = StringLibrary();
console.log(stringLib.isPhoneNumUS("404-452-4331"));
console.log(stringLib.isEmailAddr("test@test.com"));
console.log(stringLib.isUrl("http://test.com"));
console.log(stringLib.splitStrUpper("Megal Williams testing test"));
console.log(stringLib.swapSeparator("a,b,c","/"));
console.log(" ");

// Array Tests
console.log("Array Tests");
var arrayLib = ArrayLibrary();
var numList = [1,5,9,10,12,2,4,8];
console.log(arrayLib.smValGNumInArray(numList,1));
console.log(arrayLib.lrgValLNumInArray(numList,6));
var randomList = [10,"apple","orange",10,20,"10"];
console.log(arrayLib.totalValNumInArray(randomList));
var arrayObjects = [{a:6},{a:1},{a:8},{a:2},{a:3},{a:5},{a:4},{a:7},{b:3},{b:5},{b:1},{b:4},{b:2},{b:6},{c:3},{c:5},{c:1},{c:4},{c:2},{c:6}];
console.log(arrayLib.sortKeyByValInArray(arrayObjects,"a"));
var arrayList = ["Tim","Angel", 1050, 1050, 1050, "Steven",1050,30,10];
console.log(arrayLib.dupInArray(1050,arrayList));



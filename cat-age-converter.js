
// This program converts a human age into cat years
// The conversion rate is 25 cat years per year for the first two years
// and 4 cat years per year for every year after that

var myAge = 14; // The age of the human to be converted
var earlyYears = 2; // The number of years a human is considered a kitten

// Calculate the number of cat years in the early years
earlyYears *= 25;

// Calculate the number of cat years in the later years
var laterYears = myAge - 2;
laterYears *= 4;

// Calculate the total number of cat years
var catYears = earlyYears + laterYears;

// Get the name of the human to be converted
var myName = "Winner";

// Print out the result
console.log("Your name is " + myName + ", You are " + myAge + " in human years and " + catYears + " in cat years.")

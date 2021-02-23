/*
DESCRIPTION:
In this challenge, you are curious about how old you would be in dog years.
You are expected to write JavaScript code that will convert any human age 
to dog years. When a user enters a human age into the calculator and pressed 
‘convert me to dog years’, the new dog years age should show up in the space 
below it.

On average, a dog’s first year on the planet worth is the equivalent of 10.5 
human years.

event listeners, getElementById, operators

*/

// Write your code here 👇

// Get unit value elements from the DOM
const unitOne = document.querySelector("#unit-1-value");
const unitTwo = document.querySelector("#unit-2-value");

// Get unit elements for conversion from the DOM 
const convertOne = document.querySelector("#convert-1");
const convertTwo = document.querySelector("#convert-2");



// Conversion functions 


function ageConversionOne() {
    // Get input values 
    let unitOneValue = parseFloat(unitOne.value);
    let unitTwoValue = parseFloat(unitTwo.value);

    // Get conversion units
    let convertOneUnit = convertOne.value;
    let convertTwoUnit = convertTwo.value;

    console.log(unitOneValue, unitTwoValue);
    console.log(convertOne.value, convertTwo.value);

   
    // Conversion calculations (Calculate unitTwoValue)
        // Human years (unitOneValue) to Dog years (unitTwoValue)
        if (convertOneUnit === "human-years" && convertTwoUnit === "dog-years") {
             num = (unitOneValue / 10.5).toFixed(2);
             unitTwo.value = num.toString();
        }
        // Human years to Dog months
        if (convertOneUnit === "human-years" && convertTwoUnit === "dog-months") {
            num = ((unitOneValue / 10.5) * 12).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Human years to Dog weeks
        if (convertOneUnit === "human-years" && convertTwoUnit === "dog-weeks") {
            num = ((unitOneValue / 10.5) * 52).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Human years to Dog days
        if (convertOneUnit === "human-years" && convertTwoUnit === "dog-days") {
            num = ((unitOneValue / 10.5) * 365).toFixed(2);
            unitTwo.value = num.toString();
        }
        
        // Dog years to Dog months
        if (convertOneUnit === "dog-years" && convertTwoUnit === "dog-months") {
            num = (unitOneValue * 12).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog years to Dog weeks
        if (convertOneUnit === "dog-years" && convertTwoUnit === "dog-weeks") {
            num = (unitOneValue * 52).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog years to Dog days
        if (convertOneUnit === "dog-years" && convertTwoUnit === "dog-days") {
            num = (unitOneValue * 365).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog years to Human years
        if (convertOneUnit === "dog-years" && convertTwoUnit === "human-years") {
            num = (unitOneValue * 10.5).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog months to Dog years
        if (convertOneUnit === "dog-months" && convertTwoUnit === "dog-years") {
            num = (unitOneValue / 12).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog months to Dog weeks
        if (convertOneUnit === "dog-months" && convertTwoUnit === "dog-weeks") {
            num = ((unitOneValue / 12) * 52).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog months to Dog days
        if (convertOneUnit === "dog-months" && convertTwoUnit === "dog-days") {
            num = ((unitOneValue / 12) * 365).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog months to Human years
        if (convertOneUnit === "dog-months" && convertTwoUnit === "human-years") {
            num = ((unitOneValue / 12) * 10.5).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog weeks to Dog years
        if (convertOneUnit === "dog-weeks" && convertTwoUnit === "dog-years") {
            num = (unitOneValue / 52).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog weeks to Dog months
        if (convertOneUnit === "dog-weeks" && convertTwoUnit === "dog-months") {
            num = ((unitOneValue / 52) * 12).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog weeks to Dog days
        if (convertOneUnit === "dog-weeks" && convertTwoUnit === "dog-days") {
            num = ((unitOneValue / 52) * 365).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog weeks to Human years
        if (convertOneUnit === "dog-weeks" && convertTwoUnit === "human-years") {
            num = ((unitOneValue / 52) * 10.5).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog days to Dog years
        if (convertOneUnit === "dog-days" && convertTwoUnit === "dog-years") {
            num = (unitOneValue / 365).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog days to Dog months
        if (convertOneUnit === "dog-days" && convertTwoUnit === "dog-months") {
            num = ((unitOneValue / 365) * 12).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog days to Dog weeks
        if (convertOneUnit === "dog-days" && convertTwoUnit === "dog-weeks") {
            num = ((unitOneValue / 365) * 52).toFixed(2);
            unitTwo.value = num.toString();
        }
        // Dog days to Human years 
        if (convertOneUnit === "dog-days" && convertTwoUnit === "human-years") {
            num = ((unitOneValue / 365) * 10.5).toFixed(2);
            unitTwo.value = num.toString();
        }
        // If both units match
        if (convertOneUnit === convertTwoUnit) {
            unitTwo.value = unitOne.value;
        }
}

function ageConversionTwo(){
     // Get input values 
    let unitOneValue = parseFloat(unitOne.value);
    let unitTwoValue = parseFloat(unitTwo.value);

    // Get conversion units
    let convertOneUnit = convertOne.value;
    let convertTwoUnit = convertTwo.value;

    console.log(unitOneValue, unitTwoValue);
    console.log(convertOne.value, convertTwo.value);

   
    // Conversion calculations (Calculate unitOneValue)
    // Human years (unitTwoValue) to Dog years (unitOneValue)
    if (convertTwoUnit === "human-years" && convertOneUnit === "dog-years") {
            num = (unitTwoValue / 10.5).toFixed(2);
            unitOne.value = num.toString();
    }
    
    // Human years to Dog months
    if (convertTwoUnit === "human-years" && convertOneUnit === "dog-months") {
        num = ((unitTwoValue / 10.5) * 12).toFixed(2);
        unitOne.value = num.toString();
    }
    
    // Human years to Dog weeks
    if (convertTwoUnit === "human-years" && convertOneUnit === "dog-weeks") {
        num = ((unitTwoValue / 10.5) * 52).toFixed(2);
        unitOne.value = num.toString();
    }
    // Human years to Dog days
    if (convertTwoUnit === "human-years" && convertOneUnit === "dog-days") {
        num = ((unitTwoValue / 10.5) * 365).toFixed(2);
        unitOne.value = num.toString();
    }
    
    // Dog years to Dog months
    if (convertTwoUnit === "dog-years" && convertOneUnit === "dog-months") {
        num = (unitTwoValue * 12).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog years to Dog weeks
    if (convertTwoUnit === "dog-years" && convertOneUnit === "dog-weeks") {
        num = (unitTwoValue * 52).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog years to Dog days
    if (convertTwoUnit === "dog-years" && convertOneUnit === "dog-days") {
        num = (unitTwoValue * 365).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog years to Human years
    if (convertTwoUnit === "dog-years" && convertOneUnit === "human-years") {
        num = (unitTwoValue * 10.5).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog months to Dog years
    if (convertTwoUnit === "dog-months" && convertOneUnit === "dog-years") {
        num = (unitTwoValue / 12).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog months to Dog weeks
    if (convertTwoUnit === "dog-months" && convertOneUnit === "dog-weeks") {
        num = ((unitTwoValue / 12) * 52).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog months to Dog days
    if (convertTwoUnit === "dog-months" && convertOneUnit === "dog-days") {
        num = ((unitTwoValue / 12) * 365).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog months to Human years
    if (convertTwoUnit === "dog-months" && convertOneUnit === "human-years") {
        num = ((unitTwoValue / 12) * 10.5).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog weeks to Dog years
    if (convertTwoUnit === "dog-weeks" && convertOneUnit === "dog-years") {
        num = (unitTwoValue / 52).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog weeks to Dog months
    if (convertTwoUnit === "dog-weeks" && convertOneUnit === "dog-months") {
        num = ((unitTwoValue / 52) * 12).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog weeks to Dog days
    if (convertTwoUnit === "dog-weeks" && convertOneUnit === "dog-days") {
        num = ((unitTwoValue / 52) * 365).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog weeks to Human years
    if (convertTwoUnit === "dog-weeks" && convertOneUnit === "human-years") {
        num = ((unitTwoValue / 52) * 10.5).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog days to Dog years
    if (convertTwoUnit === "dog-days" && convertOneUnit === "dog-years") {
        num = (unitTwoValue / 365).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog days to Dog months
    if (convertTwoUnit === "dog-days" && convertOneUnit === "dog-months") {
        num = ((unitTwoValue / 365) * 12).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog days to Dog weeks
    if (convertTwoUnit === "dog-days" && convertOneUnit === "dog-weeks") {
        num = ((unitTwoValue / 365) * 52).toFixed(2);
        unitOne.value = num.toString();
    }
    // Dog days to Human years 
    if (convertTwoUnit === "dog-days" && convertOneUnit === "human-years") {
        num = ((unitTwoValue / 365) * 10.5).toFixed(2);
        unitOne.value = num.toString();
    }
    // If both units match
    if (convertTwoUnit === convertOneUnit) {
        unitOne.value = unitTwo.value;
    }
}

// Add event listeners to input & select dropdown

unitOne.addEventListener("keyup", ageConversionOne); 
unitTwo.addEventListener("keyup", ageConversionTwo);
convertOne.addEventListener("change", ageConversionTwo);
convertTwo.addEventListener("change", ageConversionOne);


/*
DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. use the input value and convert it into dog years on 'click'
3. display the result in the h1 tag

STRETCH GOALS:
- Can you convert your age into dog years, months and days? 
- Can you improve the overall design?
*/

//Function to validate num1 and num2 and sends an error alert if necessary
function validateinput(num1, num2) {
    //Makes sure the numbers are not empty
    if(num1 == "") {
        alert("Error: Please enter a number in the first box.");
        return false;
    }
    else if(num2 == "") {
        alert("Error: Please enter a number in the second box.");
        return false;
    }

    //Makes sure the numbers are numbers and not words/letters (NaN instead of ParseInt because the numbers I assume do not have to be whole)
    else if(isNaN(parseFloat(num1))) {
        alert("Error: The first parameter (" + num1 + ") is not a number");
        return false;
    }
    else if(isNaN(parseFloat(num2))) {
        alert("Error: The second parameter (" + num2 + ") is not a number");
        return false;
    }

    //You can not divide a number by zero
    else if(num2 == 0) {
        alert("Error: Can not divide by 0.");
        return false;
    }

    //Otherwise divides the numbers
    else {
        dividenumbers(num1,num2);
        return true;
    }
}

//Divides num1 by num2
function dividenumbers(num1, num2) {
    //Changes the "result" html element to the result
    var result = document.getElementById("result");
    //Checks if result is null (for the jest test file)
    if(result != null) {
        //divides two numbers
        result.innerText = "Result is: " + num1/num2;
    }
    return num1/num2;
}

//Exports the two functions
module.exports = { validateinput: validateinput, dividenumbers: dividenumbers }

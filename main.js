var ints = process.argv.slice(2);  // Array of integers from input

// Iterates once for each integer given as input
for(var i = 0; i < ints.length; i++)
{
    var place = 1;

    // Find which place the first digit is in the integer (one's, ten's, hundred's, etc...) 
    while(place * 10 <= ints[i]) 
    {
        place *= 10;
    }

    // Process each individual digit in the integer
    for(place; place >= 1; place /= 10)
    {
        var digit = ints[i] / place; // Integer division rounds down, so 355 / 100 = 3
        ints[i] -= digit * place;    // Remove first digit from ints[i]
        outputDigit(digit); // Print the verbose digit 
    }

    // Print a comma after each integer as long as it's not the last integer
    if(i + 1 != ints.length)
    {
        process.stdout.write(",");
    }
}

function outputDigit(digit)
{
    // Print a digit from 0-9 in its verbose form
    switch(digit)
    {
        case 0:
            process.stdout.write("Zero");
            break;
        case 1:
            process.stdout.write("One");
            break;
        case 2:
            process.stdout.write("Two");
            break;
        case 3:
            process.stdout.write("Three");
            break;
        case 4:
            process.stdout.write("Four");
            break;
        case 5:
            process.stdout.write("Five");
            break;
        case 6:
            process.stdout.write("Six");
            break;
        case 7:
            process.stdout.write("Seven");
            break;
        case 8:
            process.stdout.write("Eight");
            break;
        case 9:
            process.stdout.write("Nine");
            break;
        default:
            process.stdout.write("Error: digit > 9");
            break;
    }
}
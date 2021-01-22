//https://github.com/Tamanna216/javascript


function megaFriend(friend) {

    var max = friend[0];
    var maxLength = friend[0].length;

    for (i = 1; i < friend.length; i++) {
        var element = friend[i];
        var elementLength = element.length;
        if (elementLength > maxLength) {
            maxLength = elementLength;
            max = element;
        }
    }
    return max;
}



function kilometerToMeter(kilometer){
    if(kilometer > 0){
      var meter = kilometer*1000;
      return meter;
    }
    else if(kilometer == 0){
      return 0;
    }
    else{
       return "meter cannot be negative";
    }
  
} 



function budgetCalculator(watch, phone, laptop) {
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        var total = watch*50 + phone*100 + laptop*500;
        return total;
    }

    else {
        return "number of items cannot be negative" ;
    }

}


function hotelCost(day) {
    var cost;
    if (day >= 0 && day <= 10) {
        cost = day * 100;
        return cost;
    }

    else if (day >= 11 && day <= 20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
        return cost;
    }
    else if (day > 20) {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
        return cost;
    }
    else if (day < 0) {
        cost = "Day can't be negative."
        return cost;
    }
}



/*var friend = megaFriend(["a","klmnopy","abdcdcd", "ab", "abd",  ]);
console.log(friend);

var budget = budgetCalculator(-2, 2, 2);
console.log(budget);

var meter = kilometerToMeter(-50);
console.log(meter);

var result = hotelCost(-5494);
console.log(result);
*/
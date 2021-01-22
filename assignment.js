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


/*var friend = megaFriend(["a","klmnopy","abdcdcd", "ab", "abd",  ]);
console.log(friend);

var budget = budgetCalculator(-2, 2, 2);
console.log(budget);

var meter = kilometerToMeter(-50);
console.log(meter);
*/


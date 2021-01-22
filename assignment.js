                    // kilometer to meter (Problem-1)

function kilometerToMeter(km){
    if(km < 0){
        return "Distances can't be negative value."
    }
    else{
        var meter = km * 1000;
    }
    return meter;
}


                    //   budget calculator (Problem-2)

function budgetCalculator(watch,phone,laptop){
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;  
    if(watch < 0 || phone < 0 || laptop < 0){
        return "Quantity can't be negative value."
    }
    else{
     var watchBudget = watch * watchPrice;
     var phoneBudget = phone * phonePrice;
     var laptopBudget = laptop * laptopPrice;
     var totalBudget = watchBudget + phoneBudget + laptopBudget;
    }
    return totalBudget;
}


                        // hotel cost (Problem -3)

function hotelCost(days){
    var totalCost = 0;
    if(days <= 0){
        return "You have to stay at least 1 day in the hotel!"
    }
    else if(days <= 10){
        totalCost = days * 100;
    }
    else if(days <= 20){
        var first10DaysCost = 10 * 100;
        var remainingDays = days - 10;
        var remainingDaysCost = remainingDays * 80; 
        totalCost = first10DaysCost + remainingDaysCost;
    }
    else{
        var first10DaysCost = 10 * 100;
        var second10DaysCost = 10 * 80;
        var remainingDays = days - 20;
        var remainingDaysCost =remainingDays * 50;
        totalCost = first10DaysCost + second10DaysCost + remainingDaysCost;    
    }
    return totalCost;
}

                        // mega friend (Problem-4)

function megaFriend(FriendNames){
    var largestName = FriendNames[0];
    for(var i=0; i<FriendNames.length; i++){
        var name = FriendNames[i];
        if(name.length > largestName.length){
            largestName = name;
        }
    }
    return largestName;
}

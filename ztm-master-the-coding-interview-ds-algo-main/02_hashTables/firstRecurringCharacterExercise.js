//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    let obj = {}
    for (let index = 0; index < input.length; index++) {
        // console.log(input[index]);
		if (!obj[input[index]]) {
			obj[input[index]] = 1;
		} else {
			obj[input[index]] = obj[input[index]] + 1;
		}

        if (obj[input[index]] > 1) {
            return input[index];
		}
	}
    return undefined
}

console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
function reverse(str) {
	if (str.length < 1 || typeof str !== "string") {
		return "wrong input";
	}
	const reversal = [];
	const eachChar = str.split("");
	for (let index = str.length - 1; index >= 0 ; index--) {
		reversal.push(eachChar[index]);
	}

	return reversal.join("");
}

console.log(reverse("Timbits Hi"));

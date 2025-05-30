function mergeSortedArrays(array1, array2) {
	if (array1.length < 1) {
		return array2;
	}
	if (array2.length < 2) {
		return array1;
	}

	let mergedArray = [];
	let i = 0;
	let j = 0;
	let array1Item = array1[i];
	let array2Item = array2[j];
	console.log(array1Item);
	console.log(array2Item);
	while (array1Item || array2Item) {
		if (array2Item === undefined || array1Item <= array2Item) {
			mergedArray.push(array1Item);
			i++;
			array1Item = array1[i];
		} else {
			mergedArray.push(array2Item);
			j++;
			array2Item = array2[j];
		}
	}
	return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));

// ~ O(n logn) - O(n ** 2)

function partition(array, pivot) {
    let left = [], center = [], right = [];
    for (let x of array) {
        if (x < pivot) {
            left.push(x);
        } else if (x === pivot) {
            center.push(x);
        } else {
            right.push(x);
        }
    }
    return [left, center, right];
}

function quicksort(array) {
    if (array.length < 2) {
        return array;
    } else {
        const pivotArr = [array[0], array[Math.floor(array.length / 2)], array[array.length - 1]].sort()
        let pivot = pivotArr[1];
        let [left, center, right] = partition(array, pivot);
        return [...quicksort(left), ...center, ...quicksort(right)];
    }
}

// console.log(quicksort([3, 7, 9, 14, 1, 2, 5]))
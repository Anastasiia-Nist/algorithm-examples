// O(n logn)
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const left = mergeSort(array.slice(0, Math.floor(array.length / 2)));

    const right = mergeSort(array.slice(Math.floor(array.length / 2)));

    const result = new Array(array.length).fill(0);

    // merge result
    let l = 0, r = 0, k = 0;
    while (l < left.length && r < right.length) {

        if (left[l] <= right[r]) {
            result[k] = left[l];
            l++;
        } else {
            result[k] = right[r];
            r++;
        }
        k++;
    }

    while (l < left.length) {
        result[k] = left[l];
        l++;
        k++;
    }
    while (r < right.length) {
        result[k] = right[r];
        r++;
        k++;
    }

    return result;
}

// or

function mergeSort(arr, left, right) {
    if (left + 1 >= right) {
        return;
    }

    const mid = Math.floor((right + left) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid, right);

    const merged = merge(arr, left, mid, right);

    for (let i = 0; i < merged.length; i++) {
        arr[left + i] = merged[i];
    }
    return arr
}

function merge(arr, left, mid, right) {
    const leftArr = arr.slice(left, mid);
    const rightArr = arr.slice(mid, right);
    const result = new Array(leftArr.length + rightArr.length).fill(0);
    let l = 0,
        r = 0,
        k = 0;

    while (l < leftArr.length && r < rightArr.length) {
        if (leftArr[l] <= rightArr[r]) {
            result[k] = leftArr[l];
            l++;
        } else {
            result[k] = rightArr[r];
            r++;
        }
        k++;
    }

    while (l < leftArr.length) {
        result[k] = leftArr[l];
        l++;
        k++;
    }
    while (r < rightArr.length) {
        result[k] = rightArr[r];
        r++;
        k++;
    }

    return result;
}

// console.log(mergeSort([3, 6, 8, 10, 1, 2, 1]));
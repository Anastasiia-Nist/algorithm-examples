// O(logn)
// input: sorted array
function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);

        if (arr[mid] < x) {
            low = mid + 1;
        } else if (arr[mid] > x) {
            high = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4));

// O(logn)
// input: broken sorted array
function brokenSearch(arr, k) {
    const n = arr.length;

    if (k > arr[n - 1] && k < arr[0]) return -1;

    let left = 0, right = n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === k) {
            return mid;
        }

        if (arr[left] <= arr[mid]) {
            if (arr[left] <= k && k < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (arr[mid] < k && k <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}
// console.log(brokenSearch([19, 21, 100, 101, 5, 9, 12], 5));
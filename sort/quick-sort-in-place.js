// ~ O(n logn) - O(n ** 2)

function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function compare(element1, element2) {
    return element1 <= element2;
}

function partition(array, low, high) {
    const pivot = array[high];
    let left = low;
    let right = high - 1;

    while (left <= right) {

        while (left <= right && compare(array[left], pivot)) {
            left++;
        }

        while (left <= right && !compare(array[right], pivot)) {
            right--;
        }

        if (left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }

    swap(array, left, high);
    return left;
}

function quickSort(array, low, high) {
    if (low < high) {
        const pivotIndex = partition(array, low, high);
        quickSort(array, low, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, high);
    }
}

const arr = [2, 4, 6, 4, 4, 2, 0, 0];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

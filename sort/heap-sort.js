function compare([loginA, solvedA, penaltyA], [loginB, solvedB, penaltyB]) {
    if (solvedA !== solvedB) {
        return solvedB - solvedA;
    }
    if (penaltyA !== penaltyB) {
        return penaltyA - penaltyB;
    }
    return loginA.localeCompare(loginB);
}

function siftUp(heap, index) {
    if (index === 1) {
        return;
    }

    const parentIndex = Math.floor(index / 2);
    if (compare(heap[parentIndex], heap[index]) > 0) {
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        siftUp(heap, parentIndex);
    }
}

function siftDown(heap, index) {
    const left = 2 * index;
    const right = 2 * index + 1;

    if (left >= heap.length) {
        return;
    }

    let indexLargest = left;

    if (right < heap.length && compare(heap[right], heap[left]) < 0) {
        indexLargest = right;
    }

    if (compare(heap[indexLargest], heap[index]) < 0) {
        [heap[index], heap[indexLargest]] = [heap[indexLargest], heap[index]];
        siftDown(heap, indexLargest);
    }
}

function popMax(heap) {
    const result = heap[1];
    heap[1] = heap[heap.length - 1];
    heap.pop();
    siftDown(heap, 1);
    return result;
}

function heapAdd(heap, key) {
    heap.push(key);
    const index = heap.length - 1;
    siftUp(heap, index);
}

function heapSort(array) {
    let heap = [null];

    for (let item of array) {
        heapAdd(heap, item);
    }

    let sortedArray = [];
    while (heap.length > 1) {
        let max = popMax(heap);
        sortedArray.push(max);
    }
    return sortedArray;
}

// const input = [
//     ["alla", 4, 100],
//     ["gena", 6, 1000],
//     ["gosha", 2, 90],
//     ["rita", 2, 90],
//     ["timofey", 4, 60]
// ];

// console.log(heapSort(input));
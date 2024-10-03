function isBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;

    if (root.value <= min || root.value >= max) {
        return false;
    }

    return (
        isBST(root.left, min, root.value) &&
        isBST(root.right, root.value, max)
    );
}

// function test() {
//     const tree = {
//         value: 10,
//         left: {
//             value: 5,
//             left: {
//                 value: 2,
//                 left: null,
//                 right: null
//             },
//             right: {
//                 value: 7,
//                 left: null,
//                 right: null
//             }
//         },
//         right: {
//             value: 15,
//             left: null,
//             right: {
//                 value: 21,
//                 left: null,
//                 right: null
//             }
//         }
//     };
//     const result = isBST(tree);
//     console.log(result);
// }

// test();
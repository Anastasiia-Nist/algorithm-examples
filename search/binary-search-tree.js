function findNode(root, value) {

    if (root == null) {
        return null;
    }
    if (value < root.value) {
        return findNode(root.left, value);
    }
    if (value == root.value) {
        return root;
    }
    if (value > root.value) {
        return findNode(root.right, value);
    }
}

function findNode(root, value) {
    while (root !== null) {
        if (value < root.value) {
            root = root.left;
        } else if (value > root.value) {
            root = root.right;
        } else {
            return root;
        }
    }
    return null;
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
//                 value: 20,
//                 left: null,
//                 right: null
//             }
//         }
//     };
//     const result = findNode(tree, 2);
//     console.log(result)
// }

// test();

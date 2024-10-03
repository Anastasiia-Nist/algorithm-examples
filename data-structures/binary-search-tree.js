class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(root, value) {
        if (root === null) {
            return new Node(value);
        }
        if (value < root.value) {
            root.left = this._insert(root.left, value);
        } else {
            root.right = this._insert(root.right, value);
        }
        return root;
    }

    findMaxValueNode(node = this.root) {
        while (node.right) {
            node = node.right
        }
        return node
    }

    remove(value) {
        this.root = this._remove(this.root, value);
    }

    _remove(root, value) {
        if (root === null) {
            return null;
        }
        if (value < root.value) {
            root.left = this._remove(root.left, value);
        } else if (value > root.value) {
            root.right = this._remove(root.right, value);
        } else if (root.value === value) {
            if (root.left === null && root.right === null) {
                return null;
            }
            if (root.left === null) {
                return root.right;
            }
            if (root.right === null) {
                return root.left;
            }
            const maxValueNode = this.findMaxValueNode(root.left);
            root.value = maxValueNode.value;
            root.left = this._remove(root.left, root.value);
        }
        return root;
    }

    findNode(value) {
        return this._findNode(this.root, value);
    }

    _findNode(root, value) {
        if (root === null) {
            return null;
        }
        if (value < root.value) {
            return this._findNode(root.left, value);
        } else if (value > root.value) {
            return this._findNode(root.right, value);
        } else {
            return root;
        }
    }

    calculateHeight(node = this.root) {
        if (node === null) return -1;
        const leftHeight = this.calculateHeight(node.left);
        const rightHeight = this.calculateHeight(node.right);
        return 1 + Math.max(leftHeight, rightHeight);
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
    }

    findNode(value) {
        let current = this.root;
        while (current !== null) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return current;
            }
        }
        return null;
    }

    setParent(parent, current, newNode) {
        if (parent === null) {
            return newNode;
        }

        if (parent.left === current) {
            parent.left = newNode;
        } else if (parent.right === current) {
            parent.right = newNode;
        }

        return null;
    }

    removeMaxNode(parent) {
        let current = parent.left;
        // Если сразу левый дочерний элемент является листом
        if (current.right === null) {
            parent.left = current.left;
            return current;
        }

        let prev = parent;
        while (current.right !== null) {
            prev = current;
            current = current.right;
        }

        prev.right = current.left;

        return current;
    }

    remove(value) {
        if (this.root === null) {
            return;
        }

        if (this.root.value === value && this.root.left === null && this.root.right === null) {
            this.root = null;
            return;
        }

        let current = this.root;
        let parent = null;

        while (current !== null && current.value !== value) {
            parent = current;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        if (current === null) {
            return;
        }
        // Если узел является листом
        if (current.left === null && current.right === null) {
            this.setParent(parent, current, null);
            return;
        }
        // Если только один дочерний узел
        if (current.left === null || current.right === null) {
            let child = current.left ?? current.right;
            this.setParent(parent, current, child);
            return;
        }
        // Если два дочерних узла
        if (current.left !== null && current.right !== null) {
            let maxNode = this.removeMaxNode(current);
            current.value = maxNode.value;
        }
    }

    calculateHeight(node = this.root) {
        if (node === null) return -1;
        let leftHeight = this.calculateHeight(node.left);
        let rightHeight = this.calculateHeight(node.right);
        return 1 + Math.max(leftHeight, rightHeight);
    }
}
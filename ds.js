//create a linked list
function LinkedList() {
    this.head = null;
    this.tail = null;
}
//create a node
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}
//create a stack of nodes
function StackNode(value, next) {
    this.value = value;
    this.next = next;
}
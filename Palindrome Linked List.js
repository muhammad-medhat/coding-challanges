/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 class ListNode{
    constructor(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
    }
}
class LinkedList {
    constructor(head = null) {
        // if(head === null){
        //     this.head = head
        // } else {
        //     this.head = head[0]
        // }
        this.head=head
    }

    size(){
        let c = 0
        let node = this.head
        while (node){
            c++
            node = node.next
        }
        return c
    }
    clear(){
        this.head = null;
    }
    getLast(){
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
    getFirst(){
        return this.head;
    }
    push(i){
        let node = new ListNode(i, null)
        const n = this.getLast()
        if(n == undefined){
            this.head = node
        } else{
            n.next = node

        }
    }
    traverse(fun){
        let retNode = new ListNode()
        if(this.head == undefined){
            retNode=null
        } else {
            retNode = this.head
            fun(retNode)
        }
        return tranerse(retNode.next)
    }
}


 var isPalindrome = function(head) {
    const linkedList  = new LinkedList(head)
    for(let i=0; i<= head.length; i++){
        const node = new ListNode(head[i])
        linkedList.next = node
    }
    

    // const rev = Array.from(head).slice().reverse()
    // console.log('org', typeof(head))
    console.log(linkedList)
};
const list = new LinkedList()
// list.traverse(console.log)

const l = [1,2,2,1]
//construct the link3d list
l.forEach(i=>{
    list.push(i)
    //debugger
})

isPalindrome([1,2,2,1,3])
isPalindrome([1,2,2,1])



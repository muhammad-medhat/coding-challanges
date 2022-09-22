/**
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
 */

 const stack = []
 stack.push(1)
 console.log(stack);
 stack.push(2)
 console.log(stack);
 stack.push(3)
 console.log(stack);
 stack.push(4)
 console.log(stack);
 stack.pop()
 console.log(stack);

 const parentheses = [
    { ')': '('},
    { ']': '['},
    { '}': '{'},
 ]
 
 const isEqual = (s1, s2)=>{
    // const ret = s1.localeCompare(s2)
    //true if 0
    return s1 === s2
 }
 
 function isValidParentheses(str){
    if(str || str.length !==0){
        const allowed = '()[]{}'
        debugger
        const strStack = Array.from(str)
        // console.log(strStack);
        Array.from(str).forEach((c, i) => {
            if(allowed.includes(c)){
                // console.log(c);
                const cc = strStack.pop()
                if(cc === parentheses.find(x=>isEqual(x,c))){
                    console.log(`${cc} is found and it must be opened ${c} `);
                }

            } else {
                return false
            }
        }) 
    } else {
        return false
    }
 }

isValidParentheses('()[]{}')
isValidParentheses('hgkjhbfc')
isValidParentheses('(([]))')


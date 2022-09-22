var romanToInt = function(s) {
    const symbols = {
        I: { value: 1, 
            before:[
                {V: {value:4}}, 
                {X: {value:9}}
            ]},

        V: { value: 5},

        X: { value: 10, 
            before:[
                {L: {value:40}}, 
                {C: {value:90}}
            ]},
        L: { value: 50},
        C: { value: 100, 
            before:[
                {D: {value:400}},
                { M: {value:900}}
            ]},
        D: { value: 500},
        M: { value: 1000},
    }
    const getValue = (c) => {
        return c.value
    }

    let [ret, i] =[0, 0]
    console.log(s);
    console.log(symbols);
debugger
    // if(['V', 'L', 'D'].includes(s)){

    // }


    // Array.from(s).forEach((c, i)=>{
    //     console.log(s[i]);
    //     console.log(s[i+1]);
    //     console.log(symbols[c]);
    //     console.log(symbols[c].before);
    //     console.log(symbols[c].before.map(ch=>{return ch == c}) );

    //     if(symbols[c].before){
    //         ret+=symbols.c.before[s[i+1]]
    //     } else{
    //         ret+= symbols[c].value
    //     }
    // })
};
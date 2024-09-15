function add (num1, num2) {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        let element = arguments[i];
        sum = sum + element;
    }
   return sum;
}


let result = add(13, 23, 23, 23)
console.log(result)
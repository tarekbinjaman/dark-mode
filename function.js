function evenify(friends_Age) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        evenify_all(num)
    }
}

function evenify_all (num) {
    if(num % 2 == 0) {
        console.log(num, 'Is even')
    }
    else {
        console.log(num, 'Is odd')
    }
}

let nums = [12, 34, 23, 34, 23]
let friends_Age = [33, 23, 25, 26, 22]
evenify(friends_Age)
function explain_callback(name, age, task) {
    console.log('hello ', name)
    console.log('Your age is ', age)
    task()
}

function eatNow (){
    console.log('Vat khao tarpor hat dhow')
}

function gosolkor(){
    console.log('Gosol koro')
}

explain_callback('Sogir uddin', 15, eatNow)
explain_callback('Tarek Bij jaman', 23, gosolkor)
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback: 'You are old enough to drive' `but if not 18 give another feedback stating to wait for the number of years, he needs to turn 18.`

let age = parseInt(prompt('enter your age'))
let minimum = 18 - age
if(age >= 18){
    console.log('you are old enough to drive')
}else{
    console.log('you are let with ' + minimum + ' years to drive')
}

console.log('------------------------------------------------------')
// Compare the values of myAge and yourAge using if … else Based on the comparison and log the result to console stating who is older (me or you). Us prompt(“Enter your age:”) to get the age as input

let me = 25
let you = prompt('i am older than you? enter your age')
let diference = you - me
if(me < you){
    console.log('you are ' + diference + ' years older than me')
}else if(you < me){
    console.log('i am older than you')
}else if(me == you){
    console.log('we are same years old')
}else{
    console.log('invalid value')
}

console.log('------------------------------------------------------')
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// ● usingif else
// ● ternary operator.

let a = 4 
let b = 3

if(a > b){
    console.log('a is greater than b')
}else{
    console.log('a is less than b')
}

let x = 4 > 3

x
? console.log('a is greater than b')
: console.log('a is less than b')

console.log('------------------------------------------------------') 
//  Check if the season is Autumn, Winter, Spring or Summer. If the user input is :  
// September,October or November,the season is Autumn.  December,Januaryor February, the season is Winter. 
// March,April or May, the season is Spring 
// June,July orAugust, the season is Summer


let Autumn = ['september', 'october', 'november']
let Winter = ['december', 'january', 'february']
let Spring = ['march', 'april', 'may']
let Summer = ['june', 'july', 'august']

let y = prompt('what season is?')
switch(true){
case Autumn.includes(y.toLowerCase()):
    console.log('is autumn season')
    break;
case Winter.includes(y.toLowerCase()):
    console.log('is winter season')
    break;
case Spring.includes(y.toLowerCase()):
    console.log('is spring season')
    break;
 default:
    console.log('is summer season')
}

console.log('------------------------------------------------------')

let grade = prompt('insert your grade: ')
switch(true){
 case grade >= 80  && grade<= 100:
    console.log('your grade is A')
    break;
 case grade >= 70 && grade <= 79:
    console.log('your grade is B')
    break;
 case grade >= 60 && grade <= 69:
    console.log('your grade is C')
    break;
 case grade >= 50 && grade <= 59:
    console.log('your grade is D')
    break;
 case grade <= 49:
    console.log('your grade is F')
    break;
 default:
    console.log('invalid grade value')
}

// let die1 = Math.floor(Math.random() * 6) + 1;
// let die2 = Math.floor(Math.random() * 6) + 1;
// let die3 = Math.floor(Math.random() * 6) + 1;
// let die4 = Math.floor(Math.random() * 6) + 1;
// let die5 = Math.floor(Math.random() * 6) + 1;
// let die6 = Math.floor(Math.random() * 6) + 1;
// let die1 = rollDie(6);
// let die2 = rollDie(20);
// let die3 = rollDie(12);
// let die4 = rollDie();
// let die5 = rollDie();
// let die6 = rollDie();

function singSong() {
    console.log('Do')
    console.log('re')
    console.log('me')
    
}
singSong()

function greet(firstName , lastName){
    // console.log(`first Name is : ${firstName}`)
    // console.log('Hi')
    console.log(`Hey there , ${firstName} ${lastName}`)
  
}
function repeat(str , numTimes){
    let result = ';'
for(let i = 0 ; i < numTimes; i++){
    result += str ;
}
console.log(`${result}`);
}

function add(x , y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    return x + y;
    
}
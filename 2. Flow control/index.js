const age=18;
//debugger; //ca sa se execute pas cu pas
if (age<18){
    console.log("You are under aged.")
}
else{
    console.log("You are an adult.")
}
const people=["Bogdan", "Mihai", "Andreea","Ovidiu"]
for (let i=0;i<people.length;i++){
    console.log(people[i]); //iteram printr-un array
}
for (let i=people.length;i>=0;i--){
    console.log(people[i]); //iteram printr-un array invers -de la coada spre inceput
}
let number=3;
// while (number<10){
//     console.log(number);
//     number++;
// }
// do {
// number++;
// console.log(number);

// }
// while(number<=10);

switch(number){
    case 1:console.log("Number este 1"); break;
    case 2:console.log("Number este 2"); break;
default : console.log("Number este de fapt " +number);
}



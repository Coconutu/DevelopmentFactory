function displayPersonDetails(myName,age,email){ //putem redenumi functia apasand F2
    console.log(`My name is ${myName}`)
    console.log(`My age is ${age}`)
    console.log(`My enail adress us is ${email}`)
}
displayPersonDetails("Daniel",41,"test@test.com"); //facem call pentru functie

function function1(callback){
    console.log("Processing");
    callback()
}
function1(()=>{console.log("Functia a fost executata");});
//arrow function

((myname)=>{
    console.log(myname); //se autoexecuta daca punem paranteza rotunda la inceput si la sfarsit ()
})();
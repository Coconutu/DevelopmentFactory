// let p2=new Person("Daniel","Sebastian",new Date("13-12-1983")); //da eroare deoarece clasele nu sunt hoisted
class Person{
  // #firstName; //facem campurile private cu diez in fata #firstName
  // #lastName;
  // #dateOfBirth;
  constructor(firstName,lastName,dateOfBirth){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dateOfBirth=dateOfBirth;
  }
    calculeazaVarsta(){
      return new Date().getFullYear()-this.dateOfBirth.getFullYear();
    }

}
let p=new Person("Mihai","Popescu",new Date("12-12-2023"));
console.log(p.calculeazaVarsta());

// min 1:40

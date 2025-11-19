class Person{
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
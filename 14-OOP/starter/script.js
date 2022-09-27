'use strict';
const Person= function(firstName,birthYear){
    this.firstName=firstName;
    this.birthYear=birthYear;
};

class PersonCL {
    constructor (firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;
    }
    ///method will be added to .prototype
    calcAge(){
        console.log(2037-this.birthYear);
    }
};
const jessica=new PersonCL('jassica',2000);
jessica.calcAge();
const shivam=new PersonCL('shivam',2002);
shivam.calcAge();
PersonCL.prototype.greed=function(){
    console.log(`hey ${
        this.firstName
    }`);
};
shivam.greed();
///////////////////////////////////////
const account={
    owner: 'jons',
    movement:[100,200,400],
get latest(){
    return this.movement.slice(-1).pop();
},
set latest(mov){
    this.movement.push(mov);
    }
};
account.latest=90;



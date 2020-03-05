//call employee class from other file
const Employee = requires("./employee.js");


class Manager extends Employee {
  
    constructor(name, id, email, officeNumber){
       
        super(name, id, email);
     
        this.officeNumber = officeNumber;
    }

  
    getOfficeNumber(){
        return this.officeNumber;
    }

 
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;
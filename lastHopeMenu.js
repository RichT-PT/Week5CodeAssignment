class Member {
    constructor(name, role) { //For future projects, I would like to add a status option. maybe an option window to pick
                              //one of  a few selections like 'Active, inactive, probationary and suspended.
        this.name = name; 
        this.role = role; 

    } 
}

class Operations {
    constructor(name) { 
        this.name = name; 
        this.members = []; 
    }

}


class Menu {
    constructor() {
        this.operations = []; 
        this.selectedOperations = null;// still not 100% sure why we call on this function with the this.selectedOperations.(object property here) instead
                                       //of calling the object property directly like this.name hope to get clarification on this
    }

    start() {
        let selection = this.showMainMenuOptions(); 

        while(selection != 0) {  //I really wanted the case 5 in the funstionality but I spent too much time
                                             // on the project and had to abandon the concept until a later date
     //       if (selection == 0){
            switch (selection) {
                case '1':
                    this.createOperations(); 
                    break;
                case '2':
                    this.viewOperations(); 
                    break;
                case '3':
                    this.deleteOperations(); 
                    break;
                case '4':
                    this.displayOperations(); 
                //     break;
                // case '5':
                //     this.viewAllMembers();
                default:
                    selection = 0; 
            }
            selection = this.showMainMenuOptions(); 
    //   }else{
    //       window.alert('Invalid Response!' + showMainMenuOptions);
        }

        alert ('Goodbye!'); 
    }


    showMainMenuOptions () { // creates the main menu. My original program focused on the members which
        //proved to be problematic to match the functionality outlined in the instructions. I scraped that whole code
        return prompt(`     
            0) Exit
            1) Create an Operation
            2) View an Operation
            3) Delete an Operation 
            4) Display all Operations
            
        `);
    //    5) View all members //did not get this function to operate. wanted to view all the properties
    // for all members added in all positions. will revisit
    }

    showOperationsMenuOptions() { //for this model, I would have prefered to have a selection window
                                    //with only two options for operations but I had trouble fitting 
                                    //that into the scope of the project  
        
        return prompt(`
            0) Back
            1) Add a Member
            2) Remove a Member
            3) View Members
        
        `);
    }

    displayOperations() { 
        let OpString = '';  
        for (let i = 0; i < this.operations.length; i++) { 
            OpString += i + ') ' + this.operations[i].name + '\n'; 
        }
        alert(OpString); 
    }

    createOperations (){ 
        let name = prompt('Enter name for a new Operation:'); 
        this.operations.push(new Operations (name)); 
  //      console.log(this.operations);
    }

    viewOperations (){ 
        let string2 = "";
        for(let i = 0; i < this.operations.length; i++){
            string2 += i + ') ' + this.operations[i].name + '\n';//wanted the to display the actual index and available selections to choose from
        }
        let index = prompt('Enter the index of the Operation that you wish to view:\n' + string2);
        if (index > -1 && index < this.operations.length) { 
            this.selectedOperations = this.operations[index]; 
            let description = 'Operation Name: ' + this.selectedOperations.name + '\n'; 

            for (let i = 0; i < this.selectedOperations.members.length; i++) {  
                description += i + ') ' + this.selectedOperations.members[i].name + ' - ' + this.selectedOperations.members[i].role + '\n';
            }
            let selection = this.showOperationsMenuOptions (description); 
            switch (selection) { 
                case '1':
                    this.addMember(); 
                    break;
                case '2':
                    this.removeMember();
                    break;
                case '3':
                    this.viewMembers();
                     
            }
        }
    }
    deleteOperations() { // I am proud that I was able to add this small bit of code here to display the operations and their index so the user 
                        // can confirm what they want to delete.
        let string = "";
        for(let i = 0; i < this.operations.length; i++){
            string += i + ') ' + this.operations[i].name + '\n';//wanted the to display the actual index and available selections to choose from
        }
        let index = prompt ('Enter the the index of the Operation that you wish to remove:\n' + string); 
        if (index > -1 && index < this.operations.length) { 
            this.operations.splice(index, 1); 
        }
    }
    addMember  () { 
        let name = prompt('Enter name for new Member that you wish to add to Operation:'); 
        let role = prompt('Enter role for that Member:'); 
        this.selectedOperations.members.push(new Member(name, role));
        console.log(this.operations)
        
    }

    removeMember () { //same as delete operations, I love being able to visually see the member to be deleted instead of guessing at the index on a blank window
        let string3 = "";
        for(let i = 0; i < this.selectedOperations.members.length; i++){//would not run with this.member.length
            string3 += i + ') ' + this.selectedOperations.members[i].name + '\n';//wanted the to display the actual index and available selections to choose from
        }
        let index = prompt('Enter the index number of the Member that you wish to remove from shift:\n' + string3); 
        if (index > -1 && index < this.selectedOperations.members.length) { 
            this.selectedOperations.members.splice(index, 1); 
        } 
    }
    viewMembers(){
        let string3 = "";
        for(let i = 0; i < this.selectedOperations.members.length; i++){//would not run with this.member.length
            string3 += i + ') ' + this.selectedOperations.members[i].name + '\n';//wanted the to display the actual index and available selections to choose from
        }
        window.alert(string3);
        
    }
    // viewAllMembers(){//trying to make a menu option to display all members names and their role.  seems like that's not stored. I think I need to build an array to house all the
    //                             //stored names and roles to do it
        
    //     let string3 = [];
    //     let string4 = [];
    //     for(let i = 0; i < this.selectedOperations.members.length; i++){//would not run with this.member.length
    //         string3 += i + ') ' + this.selectedOperations.members[i].name + '\n';//wanted the to display the actual index and available selections to choose from
           
    //     }
    //     window.alert(Object.values(string3));
            
}
    
//}

let menu = new Menu(); //I hope you enjoyed my code. Have a wonderful day!!!
menu.start(); 
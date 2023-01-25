class Member {
    constructor(name, role) { 
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
        this.selectedOperations = null;
    }

    start() {
        let selection = this.showMainMenuOptions(); 

        while(selection != 0) {  
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
                    break;
                case '5':
                    this.viewAllMembers();
                default:
                    selection = 0; 
            }
            selection = this.showMainMenuOptions(); 
    //   }else{
    //       window.alert('Invalid Response!' + showMainMenuOptions);
        }

        alert ('Goodbye!'); 
    }


    showMainMenuOptions () { 
        return prompt(`
            0) Exit
            1) Create an Operation
            2) View an Operation
            3) Delete an Operation 
            4) Display all Operations
            5) View all members
        `);
    }

    showOperationsMenuOptions() { 
        
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
    deleteOperations() { 
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

    removeMember () { 
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
    viewAllMembers(){//trying to make a menu option to display all members names and their role.  seems like that's not stored. I think I need to build an array to house all the
                                //stored names and roles to do it
        
        let string3 = [];
        let string4 = [];
        for(let i = 0; i < this.selectedOperations.members.length; i++){//would not run with this.member.length
            string3 += i + ') ' + this.selectedOperations.members[i].name + '\n';//wanted the to display the actual index and available selections to choose from
        }
        window.alert(string3);    
}
    
}

let menu = new Menu(); 
menu.start(); 
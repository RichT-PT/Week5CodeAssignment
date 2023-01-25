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
                default:
                    selection = 0; 
            }
            selection = this.showMainMenuOptions(); 
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
        `);
    }

    showOperationsMenuOptions(shiftInfo) { 
        
        return prompt(`
            0) Back
            1) Add an Member
            2) Remove an Member
            --------------------
            ${shiftInfo} 
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
                description += i + ') ' + this.selectedOperation.members[i].name + ' - ' + this.selectedOperation.members[i].role + '\n';
            }
            let selection = this.showOperationsMenuOptions (description); 
            switch (selection) { 
                case '1':
                    this.addMember(); 
                    break;
                case '2':
                    this.removeMember(); 
            }
        }
    }
    deleteOperations() { 
        let index = prompt ('Enter the the index of the role that you wish to remove:'); 
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
        let index = prompt('Enter the index number of the Member that you wish to remove from shift:'); 
        if (index > -1 && index < this.selectedOperations.Members.length) { 
            this.selectedOperations.Members.splice(index, 1); 
        } 
    }

}

let menu = new Menu(); 
menu.start(); 
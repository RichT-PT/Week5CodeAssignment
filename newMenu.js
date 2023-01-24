class Members{
    constuctor(name, phoneNumber){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.dateJoined;
        this.status= status;
        this.role = role;
        this.training   = [];
    }
    describe(){
        return `${this.name} is currently ${this.status}, 
        ${this.name} joined WTDRR on ${this.dateJoined} 
        and serves as ${this.role} and can be reached at ${this.phoneNumber}`;
    }
}
class Roles{
    constructor(diveOperations,surfaceSupport){
        this.diveOperations = [];
        this.surfaceSupport = [];
    }
}
class Main_Menu{                        //
    constructor(){
        this.members = [];
        this.selectedMember = null;

    }
    start(){
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch(selection){
                case '1':
                    this.createMember();
                    break;
                case '2':
                    this.viewMember();
                    break;
                case '3':
                    this.deleteMember();
                    break;
                case '4':
                    this.displayAllMembers();
                    break;
                case '5':
                    this.updateMember();
                    break;
                default:
                    selection = 0;
        }
        selection = this.showMainMenuOptions();
    }
    alert('goodbye');
}
showMainMenuOptions(){
    return prompt(`
    0) Exit
    1) Create New Member
    2) View Member
    3) Delete Member
    4) Display Members
    5) Update Member
    `);
    
}
}
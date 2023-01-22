class Member {
    constructor(firstName, lastName, phoneNumber, status, role){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.status = [];
    this.certificationLevel = [];
    this.role = [];
    }

    describe(){
        return `${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber} is a ${this.status} and serves as a ${this.role}`;
    }
}
class Department{
    constructor(name){
        this.name = name;
        this.members = [];
    }
    addMember(member){
        if(member instanceof Member){
            this.members.push(member);

        }else{
            throw new error(`you must choose a valid member: ${member}`);
        }

    }
    describe(){
        return `${this.name} has ${this.members.length} members.`;
    }
}
class Menu{
    constructor()   {
        this.departments = [];
        this.selectedDepartment = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
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
                    this.displayMembers();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('goodbye!');
    }
    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new member
        2) view member
        3) delete member
        4) display all members
        `);
    }
    showDepartmentMenuOptions(departmentInfo){
        return prompt(`
        0) back
        1) create member
        2) delete member
        ${departmentInfo}
        `);
    }
    displayMembers(){
        let memberString = '';
        for (let i = 0; i < this.members.length; i++){
            memberString += i + ')' + this.members[i].name + '\n';

        }
        alert(memberString);
    }

    createDepartment(){
        let name = prompt('Enter name for new department: ');
        this.departments.push(new Department(name));
        
    }
    viewDepartment(){
        let index = prompt('Enter the index of the team you wish to view: ');
        if (index > -1 && index < this.departments.length) {
            this.selectedDepartment = this.departments[index];
            let description = 'Department name: ' + this.selectedDepartment.name + '\n';
            for(let i = 0; i < this.selectedDepartment.members.length; i++){
                description =+ i + ')' + this.selectedDepartment.members[i].name
                + ' - ' + this.selectedDepartment.members[i].role + '\n';
            }
            let selection = this.showDepartmentMenuOptions(description);
            switch (selection){
                case '1':
                    this.createMember();
                    break;
                case '2':
                    this.deleteMember();
                
                    
            }
        }
        
    }


}
let menu = new Menu();
menu.start();
//let member = new Dive_Team_Member ();



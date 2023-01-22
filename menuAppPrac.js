class Members{
    constructor(name, phoneNumber, status){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.status = status;
    }
}
class DiveOperations{
    constructor(name, phoneNumber, status){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.status = status;
        this.certificationLevel = certificationLevel;
        this.dateJoined = dateJoined;
    }
    describe(){
        return `${this.name} ${this.phoneNumber} ${this.status}`;
    }
}
class Surface_Support{
    constructor(name, phoneNumber, status){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.status = status;
        this.certificationLevel = certificationLevel;
        this.dateJoined = dateJoined;
    }
    describe(){
        return `${this.name} ${this.phoneNumber} ${this.status}`;
    }
}
class Training{
    constructor(aboveWater, belowWater){
        this.sonar = [];
        this.tender = [];
        this.comms = [];
        this.hazMat = [];
        this.boatOperator = [];
        this.searchPatterns = [];
        this.bodyRecovery = [];
        this.liftBagOperations = [];
        this.evidencePreservation = [];
        this.cpr = [];
        this.emergencyProcedures = [];
        this.diverKitting [];

    }
}
class Menu{
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
    4) Update Member Info
    `);
}

}
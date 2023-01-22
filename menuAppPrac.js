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
        this.certifyingAgency = this.certifyingAgency;
    }
    describe(){
        return `${this.name} is a ${this.status} member of WTDRR, joined on ${this.dateJoined}
        is currently certified as ${this.certificationLevel} with ${this.certifyingAgency} and can be reached at ${this.phoneNumber}`;
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
        return `${this.name} is a ${this.status} member of WTDRR since ${this.dateJoined} and has been
        trained in the following areas ${trainingArray}`;
    }
    
}
let trainingArray = [];
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
        this.diverKitting = [];

    }
}
trainingArray.push(trainingInput);
if()

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
class Menu{//training menu. multiple selection menu 'click all that apply' or 1,2,3,4 with the last 
    // option to submit and exit
    constructor(){
        this.trainingArray = [];
        this.selectedTraining = null;
    }
    start(){
        let selection = this.showTrainingMenuOptions();
        //want this menu to populate all training options and allow multiple check marks or yes/no
    }
}
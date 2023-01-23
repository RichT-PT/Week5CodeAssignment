class Members{//overall members to populate, will include, diveroperations, suface support and others
    constructor(name, phoneNumber, status){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.status = status;
    }
}
class DiveOperations{//these members will also appear in Members above, these have unique properties
    constructor(name, phoneNumber, status){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.status = status;
        this.certificationLevel = certificationLevel;
        this.dateJoined = dateJoined;
        this.certifyingAgency = this.certifyingAgency;
        this.trainedIn = [];
    }
    describe(){
        return `${this.name} is a ${this.status} member of WTDRR, joined on ${this.dateJoined}
        is currently certified as ${this.certificationLevel} with ${this.certifyingAgency} and can be reached at ${this.phoneNumber}`;
    }
}
class Surface_Support{//will also show up in Members
    constructor(name, phoneNumber, status){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.status = status;
        this.dateJoined = dateJoined;
        this.areaTrainedIn = [];
    }
    describe(){
        return `${this.name} is a ${this.status} member of WTDRR since ${this.dateJoined} and has been
        trained in the following areas ${trainingArray}`;
    }
    
}//would like to have a menu that displays all the training, you can click on individual training and get a list of all members trained in that entry
//let trainingArray = [];//would like these to appear as a list in each members profile. would like the
                      //menu for this to be able to accept more than one entry             
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
let trainingArray = [];
let crudeArray = [];     //would like to print the response below and just take enter to move into next line
window.prompt(`Please type a 'y' for yes or 'n' for no to indicate whether you have trained in the following areas/n`);
let response1 = prompt(`Tender: `);
let response2 = prompt(`Communications:`);
let response3 = prompt(`Hazardous materials:` );
let response4 = prompt(`Boat Operations:`);
let response5 = prompt(`Search Patterns:`);
let response6 = prompt(`Body Recovery:`);
let response7 = prompt(`Lift Bag Operations:`);
let response8 = prompt(`Evidence Preservation:`);
let response9 = prompt(`CPR certified within the last 2 years:`);
let response10 = prompt(`In house Emergency Procedures:`);
let response11 = prompt(`Diver Kitting and gear set up:`);
let response12 = prompt(`Sonar:`);
// loop to gather the responses from the above prompts convert them to lowercase and compare to acceptable response else n/a
crudeArray.push(response1, response2, response3, response4, response5, response6, response7, response8, response9, response10, response11, response12);
//if()


const lower = [];

for (const element of crudeArray) {
  lower.push(element.toLowerCase());
}
for(let i = 0; i < lower.length; i++){
    if(lower[i] === 'y' || lower[i] === 'n' ){
        trainingArray.push(lower[i]);
    }else{
        trainingArray.push('N/A');
    }
}

console.log(lower);
console.log(crudeArray);
console.log(trainingArray);

 //  if(crudeArray[i].toLowerCase === 'y' || crudeArray[i].toLowerCase === 'n'){//ran with this code
//   if(answer === 'y' || answer === "n"){
   
  //       trainingArray.push(crudeArray[i]);
   
   //  }else{ trainingArray.push ("N/A")};



//console.log('output training array ' + trainingArray);
//console.log('output crude array ' + crudeArray);
//this.areaTrainedIn.push(trainingArray);
//console.log(this.areaTrainedIn);


class Menu{                        //
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
class Training_Menu{//training menu. multiple selection menu 'click all that apply' or 1,2,3,4 with the last 
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
// Menu app

class Player {
    constructor(name, position){
        this.name = name;
        this.position = position;

    }
    describe(){
        return `${this.name} plays ${this.position}.`;
    }
}
class Team {
    constructor(name){
        this.name = name;
        this.players = [];
    }
    addPlayer(player){
        if(player instanceof Player){
            this.players.push(player);
        }else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);

        }
    }
    describe(){
        return `${this.name} has ${this.player} players.`;
    }
}

class Menu {
    constructor(){
        this.teams = [];
        this.selectedTeam = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection) {
                case `1`:
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeam();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }
    showMainMenuOptions(){
        return prompt(`
            0) exit
            1) create new team
            2) view team
            3) delete team
            4) display all teams
        `);
    }
    showTeamMenuOptions(teamInfo){
        return prompt(`describe(){
            return `${this.name} ${this.phoneNumber} ${this.status}`;
        }w team: ');
        this.teams.push(new Team(name));
    }
    viewTeam(){
        let index = prompt('Enter the index of the team you wish to view: ');
        if (index > -1 && index < this.teams.length){
            this.selectedTeam = this.teams[index];
            let discription = 'Team Name: ' + this.selectedTeam.name + '\n';
            for(let i = 0; i < this.selectedTeam.players.length; i++){
                description += i + ') ' + this.selectedTeam.players[i].name + 
                ' - ' + this.selectedTeam.players[i].position + '\n';

            }
            let selection = this.showTeamMenuOptions(description);
            switch (selection){
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
            }
        }
    }
}
let menu = new Menu();
menu.start();
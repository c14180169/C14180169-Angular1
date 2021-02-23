import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  turn = 1;
  player = '0';
  instruction = "GAME TURN -> ";
  instruction1 = "PLAYER TURN -> ";
  instruction3 = "PLAYER" + this.player + "WIN";

  board = [
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*']
    ];

  input1 = "";
  input2 = "";

  changePlayer(){
    if(((this.turn - 1) % 2) == 0) {
      this.player = '0';
    }
    else{
      this.player = '1';
    }
  }

  pickAnswer(){
    if(this.input1 != "" && this.input2 != ""){
      var temp1 = +this.input1;
      var temp2 = +this.input2;
      this.board[temp1][temp2] = this.player;
    
      this.input1 = "";
      this.input2 = "";

      this.turn++;
      this.changePlayer();
    }
    else {
      this.instruction = "INPUT FIELD STILL EMPTY...";
    }
  }

  

  
}

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
  win = false;
  instruction = "GAME TURN -> ";
  instruction1 = "PLAYER TURN -> ";
  instruction3 = "PLAYER " + this.player + " WIN";
  instruction4 = "";

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
      if(this.board[temp1][temp2] != '*'){
         this.instruction4 = "COORDINATE OCCUPIED";
      }
      else if(temp1 > 5 || temp2 > 5){
        this.instruction4 = "INPUT FIELD CANT MORE THAN 5";
      }
      else{
        this.board[temp1][temp2] = this.player;
        

        this.checkWin();
        this.turn++;
        this.changePlayer();
      }
      
      this.input1 = "";
      this.input2 = "";
      this.instruction4 = "";
    }
    else {
      this.instruction4 = "INPUT FIELD STILL EMPTY...";
    }
  }

  checkWin(){
    for(var i=0;i<5;i++){
      var score0 = 0;
      var score1 = 0;
      var score00 = 0;
      var score11 = 0;

      for(var j=0;j<5;j++){
        if(this.board[i][j] == '0'){
          score0++;
        }
        else if(this.board[i][j] == '1'){
          score1++;
        }

        if(this.board[j][i] == '0'){
          score00++;
        }
        else if(this.board[j][i] == '1'){
          score11++;
        }
      }
      if(score0 == 4 || score1 == 4 || score00 == 4 || score11 == 4){
        this.win = true;
      }
    }
  }

  

  
}

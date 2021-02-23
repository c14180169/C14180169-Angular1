import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  turn = 1;
  player = '0';
  instruction = "GAME TURN -> ";
  instruction1 = "PLAYER TURN -> ";
  instruction3 = "";
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
    this.instruction4 = "";
    if(this.input1 != "" && this.input2 != ""){
      var temp1 = +this.input1 - 1;
      var temp2 = +this.input2 - 1;

      if(temp1 > 5 || temp2 > 5){
        this.instruction4 = "INPUT FIELD CANT MORE THAN 5 OR LESS THAN 0";
      }
      else if(this.board[temp1][temp2] != '*'){
         this.instruction4 = "COORDINATE OCCUPIED";
      }
      else{
        this.board[temp1][temp2] = this.player;

        this.checkWin();
        this.turn++;
        this.changePlayer();
      }
      
      this.input1 = "";
      this.input2 = "";

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
        this.instruction3 = "PLAYER " + this.player + " WIN , GAME RESET IN 5 SECONDS";
        setTimeout(()=>{this.resetGame()},5000);
      }
    }
  }

  resetGame(){
    this.turn = 1;
    this.player = '0';
    this.instruction = "GAME TURN -> ";
    this.instruction1 = "PLAYER TURN -> ";
    this.instruction3 = "PLAYER " + this.player + " WIN";
    this.instruction4 = "";

    this.board = [
      ['*', '*', '*', '*', '*'],
      ['*', '*', '*', '*', '*'],
      ['*', '*', '*', '*', '*'],
      ['*', '*', '*', '*', '*'],
      ['*', '*', '*', '*', '*']
    ];

    this.input1 = "";
    this.input2 = "";
  }

  

  
}

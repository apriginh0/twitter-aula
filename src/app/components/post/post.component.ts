import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  tweetMessage:string = "";
  tweetMaxLegth: number = 210;
  tweetRemain: number = this.tweetMaxLegth;

  sendTweet(){
    alert(this.tweetMessage)
  }

  changeTweet(){
    this.tweetRemain = 240 - this.tweetMessage.length;
  }
}

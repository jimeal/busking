var videoIdArray=['xL92hZOrdlM','zn4eDx1zG8g','MJVAwjVmtIc'];

var ytplayers={};

function loadPlayer(ids){
  //인수로 받은 배열을 for in문으로 돌린다
  for(var i in ids){
    var videoId=ids[i],
    playerId = "player_"+videoId;
    playerId = new YT.Player(
      playerId,{
      //처음의 인수에 삽입하고 싶어 HTML요소의 id를 지정한다
        width:"880",
        height:"200",
        videoId:videoId
      }
    );
  
    //YT.Player객체를 저장하는
    ytplayers[videoId]=playerId;
  }
}

loadPlayer(videoIdArray);
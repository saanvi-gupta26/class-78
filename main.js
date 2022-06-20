
var reasons = [
  "Dad",
  "Me",
  "Mom",

];
var images = [
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFWJW9f2df8ibmWPwTui-rpByNkBffoOJ80g&usqp=CAU",
  "https://w7.pngwing.com/pngs/665/604/png-transparent-baby-boss-boy-character-illustration-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-child-toddler-boy.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LcEVcyZ-Ien9ulvh-WBZrOTa6lm8gNnk6A&usqp=CAU"
];

var i = 0;
function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
  document.getElementById("album").src = images[i];
  i++;
  document.getElementById("audio").play();
 
}




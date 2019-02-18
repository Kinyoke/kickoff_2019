var lerghtBtn = document.getElementsByClassName('side-btn');
var contTabs = document.getElementsByClassName('tabed');
var contBtn  = document.getElementsByClassName('tablink');
var contBtn2  = document.getElementsByClassName('tablink2');
var content = document.getElementsByClassName('tabcontent');
var slideIndex = 0;


$(document).ready(function() {
    // body...
  
  $(".defaultOpen:first").click();
});       

window.onclick = function(e) {
  // body...


  //redirect to read news

  var readMore = document.getElementsByClassName("news-item");

  for (var i = readMore.length - 1; i >= 0; i--) {
    if (e.target == readMore[i]) {
      window.location.href = "http://127.0.0.1/kickoff/html/morenews.html";
    }
  }


  for (var i = lerghtBtn.length-1; i >= 0; i--) {
      if (e.target == lerghtBtn[i]) {      
          if (lerghtBtn[i] == lerghtBtn[1]) {      
              contTabs[0].style.display = "none";  
              contBtn[0].style.display = "none";
              contBtn[1].style.display = "none";
              contBtn[2].style.display = "none";
              contBtn[3].style.display = "block";
              contBtn[3].click();
              contBtn[4].style.display = "block";
              contBtn[5].style.display = "block";   
              contTabs[1].style.display = 'block';
              content[3].style.display = 'block';
          }else if (lerghtBtn[i] == lerghtBtn[0]){
              contBtn[0].style.display = "block";
              contBtn[0].click();
              contBtn[1].style.display = "block";
              contBtn[2].style.display = "block";
              contBtn[3].style.display = "none";
              contBtn[4].style.display = "none";
              contBtn[5].style.display = "none"; 
              contTabs[0].style.display = 'block';
              content[0].style.display = 'block';
          }else if (lerghtBtn[i] == lerghtBtn[2]) {
              contTabs[2].style.display = "none";        
              contBtn2[0].style.display = "none";
              contBtn2[1].style.display = "none";
              contBtn2[2].style.display = "none";
              contBtn2[3].style.display = "none";
              contBtn2[4].style.display = "block";
              contBtn2[4].click();
              contBtn2[5].style.display = "block";
              contBtn2[6].style.display = "block";
              contBtn2[7].style.display = "block";     
              contTabs[3].style.display = 'block';
              content[10].style.display = 'block';
          }else if (lerghtBtn[i] == lerghtBtn[3]){
              contBtn2[0].style.display = "block";
              contBtn2[0].click();
              contBtn2[1].style.display = "block";
              contBtn2[2].style.display = "block";
              contBtn2[3].style.display = "block";
              contBtn2[4].style.display = "none";
              contBtn2[5].style.display = "none";
              contBtn2[6].style.display = "none";
              contBtn2[7].style.display = "none";
              contTabs[2].style.display = 'block';
              content[6].style.display = 'block';
          }     
        }
      }
    }


  var more_match = false;
  $("#more-match-list").click(function(){
    if (!more_match) { $(".match-list").css({"transition":"1s","height":"645px"}); $("#more-match-list").css({"display":"none"});  $("#minus-match-list, #back-up").css({"display":"block"});  more_match = true; }
  });

  $("#less-match-list, #minus-match-list").click(function(){
     if(more_match){ $(".match-list").css({"transition":"2s","height":"140px"}); $("#more-match-list").css({"display":"block"}); $("#minus-match-list, #back-up").css({"display":"none"}); more_match = false; }
  });

  var more_score = false;
  $("#more-score-list").click(function(){
    if (!more_score) { $(".live-score").css({"transition":"0s","height":"100%"}); $("#more-score-list").css({"display":"none"});  $("#less-score-list, #back-up1").css({"display":"block"}); more_score = true; }
  });

  $("#less-score-list, #back-up1").click(function(){
    if (more_score) { $(".live-score").css({"transition":"0s","height":"155px"}); $("#more-score-list").css({"display":"block"});  $("#less-score-list, #back-up1").css({"display":"none"}); more_score = false; }
  });


   $("#more-news-score").click(function(){
    if (!more_score) { $(".live-score-news").css({"transition":"0s","height":"100%"}); $("#more-news-score").css({"display":"none"});  $("#less-news-score, #back-up-news").css({"display":"block"}); more_score = true; }
  });

  $("#less-news-score, #back-up-news").click(function(){
    if (more_score) { $(".live-score-news").css({"transition":"0s","height":"620px"}); $("#more-news-score").css({"display":"block"});  $("#less-news-score, #back-up-news").css({"display":"none"}); more_score = false; }
  });

//more news content
  var more_news = true;

  $("#view-more-btn").click(function() {
    // body...
    if (more_news) { $(".All_news").css({"height":"100%"}); $(".news-cluster2").css("display","block"); $("#txt-i").text("VIEW LESS"); more_news = false; }
    else{ $(".All_news").css({"height":"2040px"}); $(".news-cluster2").css("display","none"); $("#txt-i").text("VIEW MORE"); more_news = true; }
  });

  



showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("advert");
  for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function openTable(tName,elmnt,color) {
  var i, tabcontent, tablinks2;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 6; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablink2");
  for (i = 0; i < tablinks2.length; i++) {
      tablinks2[i].style.backgroundColor = "";
  }
  document.getElementById(tName).style.display = "block";
  elmnt.style.backgroundColor = color;
  elmnt.style.color = "rgb(230,230,230)";           
}

function openContent(tName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  } 
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.Color = "black";
  }
  document.getElementById(tName).style.display = "block";
  elmnt.style.backgroundColor = color;
  elmnt.style.color = "rgb(230,230,230)";
}







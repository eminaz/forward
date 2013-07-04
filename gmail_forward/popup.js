
document.addEventListener('DOMContentLoaded', function () {
//chrome.browserAction.onClicked.addListener(function (tab) {
  var the_code=
   'var myDataRef = new Firebase("https://forward.firebaseio.com"); var table1 = document.body.getElementsByClassName("adn ads")[0].getElementsByTagName("table")[0].innerText; '
  +'var body_text=document.body.getElementsByClassName("adn ads")[0].getElementsByClassName("ii")[0].innerText; '
  +'var email_title=document.body.getElementsByClassName("hP")[0].innerText;'
  +'var items=document.body.getElementsByClassName("adn ads")[0].getElementsByTagName("table")[2].getElementsByTagName("span")[0].getElementsByTagName("span");'
  +'var sender_name=document.body.getElementsByClassName("adn ads")[0].getElementsByTagName("table")[1].getElementsByTagName("span")[0].getAttribute("name");'
  +'var sender_email=document.body.getElementsByClassName("adn ads")[0].getElementsByTagName("table")[1].getElementsByTagName("span")[0].getAttribute("email");'
  +'var email_recipients = []; '
  +'for(var i=0;i<items.length;i++){var item = {recipient_name:items[i].getAttribute("name"),recipient_email:items[i].getAttribute("email")}; email_recipients.push(item);};'
  +'myDataRef.push({title: email_title, email:table1, body: body_text, sender_name: sender_name, sender_email: sender_email, email_recipients:email_recipients}, function(err){'
  +'myDataRef.on("value", function(snapshot) {var objects = snapshot.val(); for(var last in objects){};'
  +' setTimeout(function(){'
  +'var meteor_url="https://forward.meteor.com/"+last;  $.ajax({type: "GET",url: meteor_url });'
  +'},3000)' 
  +'}); });';

  chrome.tabs.executeScript(null,{code:the_code},function(){ 
      document.getElementById('front_text').innerHTML="Sent";
  });

});










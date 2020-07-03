document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "A Developer","CS Engineer","Princy D'silva"," "];
    
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       //document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
       document.getElementById("nameChange").innerHTML = text.substring(0, i+1) ;
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

  function disableSubmitBtn(){
    document.getElementById("submitBtn").disabled = true;
  }

  function enableSubmitBtn(){
    document.getElementById("submitBtn").disabled = false;
  }

  document.getElementById("myForm").addEventListener("submit",(event)=>{
    
    event.preventDefault();
    sendMail();
    
  });

function sendMail(){

  disableSubmitBtn();

  const email = document.getElementById("email").value.trim();
  const name = document.getElementById("name").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const body = document.getElementById("body").value.trim();

  if(email.length == 0 || name.length == 0 || subject.length == 0 || body.length == 0){
    alert("Fill all the required feilds to proceed");
    enableSubmitBtn();
    return;
  }else if(!validateEmail(email)){
    alert("Enter a valid email");
    enableSubmitBtn();
    return;
  }else if(name.length > 200){
    alert("Name character limit exceeded. Max 200 character.");
    enableSubmitBtn();
    return;
  }else if(subject.length > 1000){
    alert("Subject character limit exceeded. Max 1000 character.");
    enableSubmitBtn();
    return;
  }else if(body.length > 10000){
    alert("Body character limit exceeded. Max 10000 character.");
    enableSubmitBtn();
    return;
  }else{
    sendMailToPrincy(email, name, subject, body);
  }
}

function validateEmail(inputText){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.match(mailformat)){
      return true;
  }else{
      return false;
  }
}

function sendMailToPrincy(email, name, subject, body){
  var HttpClient = function() {
      this.get = function(aUrl, aCallback) {
      var anHttpRequest = new XMLHttpRequest();
      anHttpRequest.onreadystatechange = function() { 
          if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
              aCallback(anHttpRequest.responseText);
      }
      anHttpRequest.open( "GET", aUrl, true ); 
      anHttpRequest.send( null ); 
      }
  }
  var theurl='https://script.google.com/macros/s/AKfycby7p8iHu52z1gGZXO9SPvrwbWKRrDIB6epaax_uK2EQ6kHaF0U/exec?name=' + name +"&email=" + email + "&subject=" + subject + "&body=" + body;
  var client = new HttpClient();
  client.get(theurl, function(response) { 
      var response1 = JSON.parse(response);
      var responseStatus = response1.status ;

      alert("Thanks for sending response.");
      enableSubmitBtn();
      document.getElementById("email").value = "";
      document.getElementById("name").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("body").value = "";

  }); 
}
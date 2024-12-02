// Generate random integers 
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  var M = randInt(300, 600);
  var N = randInt(100, 300 );
  var K = randInt(0, 100);
  document.querySelector('#total').textContent = M.toString();
  document.querySelector('#takeback').textContent = N.toString();
  document.querySelector('#give').textContent = K.toString();
  
  var T = N+K;
  var S = N-K;
  document.querySelector('[value = "1"]').nextSibling.nodeValue=M.toString() + "-" + N.toString() + "+" + K.toString();
  document.querySelector('[value = "2"]').nextSibling.nodeValue=M.toString() + "-" + N.toString() + "-" + K.toString();
  document.querySelector('[value = "3"]').nextSibling.nodeValue=M.toString() + "-" + "("+N.toString() + "+" + K.toString()+")";
  document.querySelector('[value = "4"]').nextSibling.nodeValue=M.toString() + "-" + "("+N.toString() + "-" + K.toString()+")";
  
  function changeStyle(e){
      e.preventDefault();
      var classname = this.getAttribute("class");
      alert("clicked class"+classname);
      if (classname == "answer"){
          this.setAttribute("class", "answer selected");
      }else{
          this.setAttribute("class", "answer");
      } 
      this.animate([{transform:'rotate(0deg)'},{transform:'rotate(10deg)'}],{duration:3000, fill:'forwards'});
  }
  var answerlist = document.getElementsByClassName('answer');
  for(var i = 0; i<4; i++){
      answerlist[i].addEventListener('click', changeStyle,false);
  }
  
function divOne() {
  var words
  var letters = [' Hi there', ' How are you?', ' where are you from?', ' what are you doing?', ' It is amazing how JavaScript can do crazy things!'];
  words += letters[Math.floor (Math.random() * letters.length)];
  document.getElementById('div1').innerHTML = words;
}

function divTwo() {
   var color = '#';
   var letters = ['67D09C','06F7DE','F7C106','F77F06','F73206','583988','F506E7','06F539', '45660B', '09F7D1'];
   color += letters[Math.floor(Math.random() * letters.length)];
   document.getElementById('div2').style.background = color;
    }

function divThree() {
      var color = '#';
      var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0', '333', '298E4'];
      color += letters[Math.floor(Math.random() * letters.length)];
      document.getElementById('div3').style.background = color;
      }

function divFour() {
       var color = '#';
       var letters = ['67D09C','06F7DE','F7C106','F77F06','F73206','583988','F506E7','06F539', '45660B', '09F7D1'];
       color += letters[Math.floor(Math.random() * letters.length)];
       document.getElementById('div4').style.background = color;
        }
function divFive() {
      var color = '#';
      var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0', '333', '298E4'];
      color += letters[Math.floor(Math.random() * letters.length)];
      document.getElementById('div5').style.background = color;
      }

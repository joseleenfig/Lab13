function start(){
    // A variable for button on. 
var button = document.getElementById('Cchange1');
var button2 = document.getElementById('Cchange2');
// a command that says when button is clicked run the function'change'//
button.onclick = change1;
button2.onclick = change2;

}
//function that change style elements// 
function change1 (){
    // For styling the page.
    document.getElementById('change1').style.fontSize= changeInFontSize + 'px';
    document.getElementById('change1').style.font='times'
    document.getElementById('change1').style.color='pink';

}

//function that change style elements// 
function change2 (){
    // For styling the page.
    document.getElementById('change2').style.fontSize= changeInFontSize + 'px';
    
}

// color for header//
document.getElementById('change3').style.color='Red';


// a command that states when the window loads, run the function 'start'//
  window.onload = start;

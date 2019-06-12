function submitAnswers() {
    var total = 8 ;
    var score = 0;
    
    //get user input
    var q1 = document.forms["HPquizform"]["q1"].value;
    var q2 = document.forms["HPquizform"]["q2"].value;
    var q3 = document.forms["HPquizform"]["q3"].value;
    var q4 = document.forms["HPquizform"]["q4"].value;
    var q5 = document.forms["HPquizform"]["q5"].value;
    var q6 = document.forms["HPquizform"]["q6"].value;
    var q7 = document.forms["HPquizform"]["q7"].value;
    var q8 = document.forms["HPquizform"]["q8"].value;
    
    //validation
    for( var i = 1 ; i<=total ; i++)
        {
            if(eval('q'+i)== null || eval('q'+i) == ' '){
                alert('You missed some questions!');
                return false;
            }
        }
        
   var answers=["2","2","3","2","2","2","4","1"];
   
   if(q1 == answers[0]){
       score++;
   }
    if(q2 == answers[1]){
       score++;
   }
    if(q3 == answers[2]){
       score++;
   }
    if(q4 == answers[3]){
       score++;
   }
    if(q5 == answers[4]){
       score++;
   }
    if(q6 == answers[5]){
       score++;
   }
    if(q7 == answers[6]){
       score++;
   }
    if(q8 == answers[7]){
       score++;
   }
    
    alert('You scored '+score+' out of '+total);
}
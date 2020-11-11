function check () {
    var c = 0
    var w = 0
    var answer1 = document.getElementsByName('q1');
    var answer2 = document.getElementsByName('q2');
    var answer3 = document.getElementsByName('q3');
// question 1
    for (var i = 0; i < answer1.length; i++) {
        if (answer1[i].checked) 
        {
            if (answer1[i].value == "Super Mario World") {
                c++
            } else {
                w++
            } 
        } 
    } 
// question 2
    for (var i = 0; i < answer2.length; i++) {
    if (answer2[i].checked) 
    {
        if (answer2[i].value == "Famicom") 
            {
            c++
            } else
            {
             w++    
            } 
        } 
    } 
// question 3
 
    alert(`you got ${c} answers correct and ${w} answers wrong!`)
} //end of check function
function check () {
    var c = 0
    var w = 0
    var radios = document.getElementsByName('a');
    var radios2 = document.getElementsByName('b');
    
// question 1
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) 
        {
            if (radios[i].value == "a") {
                c++
            } else {
                w++
            } 
        } 
    } 
// question 2
    for (var i = 0; i < radios2.length; i++) {
    if (radios2[i].checked) 
    {
        if (radios2[i].value == "f") 
            {
            c++
            } else
            {
             w++    
            } 
        } 
    } 
    alert(`you got ${c} answers correct and ${w} answers wrong!`)
} //end of check function
function changeColor()
{    
    document.getElementsByTagName("li").style.color=("pink");
}

function check() {
    var c = 0
    var w = 0
    var radios = document.getElementsByName('q1');
    var radios2 = document.getElementsByName('q2');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == "Super Mario World") {
                c++
            } else {
                w++
            }
        }
    }
    for (var i = 0; i < radios2.length; i++) {
        if (radios2[i].checked) {
            if (radios2[i].value == "f") {
                c++
            } else {
                w++
            }
        }
    }

    // alert(`you got ${c} answers correct and ${w} answers wrong!`);

    // SHOW MODAL
    showModal(c, w);

} //end of check function

function showModal(c, w) {
    var mod = document.getElementById('myModal');
    mod.innerHTML = `you got ${c} answers correct and ${w} answers wrong!`;
    mod.innerHTML += '<button onclick="hideModal()">Close</button>'
    mod.setAttribute('style', 'display: block;');
}

function hideModal() {
    var mod = document.getElementById('myModal');
    mod.setAttribute('style', 'display: none;');
}
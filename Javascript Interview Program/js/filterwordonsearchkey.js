
var str = "Manish satish sonya monya test temper";

function searchword() {
    debugger;
    var input = document.getElementById('input1').value;
    var spltstr = str.split(" ");
    var resultval = spltstr.filter(x => x.includes(input)).join(' ');
}


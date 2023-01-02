//your code here

function addValue(val) {
    var value = document.getElementById('input').value;
    // value = value*10 + val;
    value += val;
    document.getElementById('input').value = value;
    console.log(value);
}

function clearValue() {
    document.getElementById('input').value = "";
}

function answer() {
    var str = document.getElementById('input').value;
    document.getElementById('input').value = eval(str);
}
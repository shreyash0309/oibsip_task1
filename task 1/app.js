function ANS(val) {
    var m = document.getElementById('result');
    m.value += val;
 }
 function Result() {
    var x = document.getElementById('result').value;
    var y = eval(x);
    document.getElementById('result').value = y;
 }
 function Clear() {
    var klear = document.getElementById('result');
    klear.value = '';
 }
 function Del() {
    var ans = document.getElementById('result');
    ans.value = ans.value.slice(0,-1);
 }
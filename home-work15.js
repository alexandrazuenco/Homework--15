var x;
var n;

function pow(x, n)
{
    var result=1;
    for(var i=0;i<n;i++) {result*=x;}
    return result;
}

x=prompt("x?", "");
n=prompt("n?", "");
if (n<0)
{
    alert("степень "+n+" не поддерживается, введите целую степень, большую 0");
}
else
{
    alert(pow(x, n));
}
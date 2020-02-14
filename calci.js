//function Enter(input, character) {
//        console.log(this.firstChild.nodeValue);
//	if(input.value == null || input.value == "0")
//		input.value = character
//	else
//		input.value += character
//}
//
//
//function sin(form) {
//	form.display.value = Math.sin(form.display.value);
//}
//function cos(form) {
//	form.display.value = Math.cos(form.display.value);
//}
//
//function tan(form) {
//	form.display.value = Math.tan(form.display.value);
//}
//
//function exp(form) {
//	form.display.value = Math.exp(form.display.value);
//}
//
//function ln(form) {
//	form.display.value = Math.log(form.display.value);
//}
//function sqrt(form) {
//	form.display.value = Math.sqrt(form.display.value);
//}
//function deleteChar(input) {
//	input.value = input.value.substring(0, input.value.length - 1)
//}
//
//var val = 0.0;
//function percent(input) {
//  val = input.value;
//  input.value = input.value + "%";
//}
//
//function changeSign(input) {
//	if(input.value.substring(0, 1) == "-")
//		input.value = input.value.substring(1, input.value.length)
//	else
//		input.value = "-" + input.value
//}
//
//function compute(form) {
//  
//    form.display.value = eval(form.display.value);
//  }
//
//
//
//function checkNum(str) {
//	for (var i = 0; i < str.length; i++) {
//		var ch = str.charAt(i);
//		if (ch < "0" || ch > "9") {
//			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
//				&& ch != "(" && ch!= ")" && ch != "%") {
//				alert("invalid entry!")
//				return false
//				}
//			}
//		}
//		return true
//}
function userProcessEntry(thisbtn){
    document.getElementById('display').value +=thisbtn.value;
}
function clearEntry(){
    document.getElementById('display').value=0;
}
function equal(){
 var x = document.getElementById('display').value;
document.getElementById('display').value=eval(x);
}
function backEntry(){
   var y =document.getElementById('display').value;
    y=y.substr(0,y.length-1);
    document.getElementById('display').value=y;
}
function sci(thisbtn){
var z = thisbtn.value;
    var userentry = eval(document.getElementById('display').value);
    if(z=="sin"){
         document.getElementById('display').value=Math.sin(userentry);
    }
    if(z=="PI"){
        document.getElementById('display').value=userentry*Math.PI;
    }
    if(z=="cos"){
        document.getElementById('display').value=Math.cos(userentry);
    }
     if(z=="tan"){
        document.getElementById('display').value=Math.tan(userentry);
    }
    if(z=="ln")
        {
             document.getElementById('display').value=Math.log10(userentry);
        }
    
}
function multiplier()
{
   var k= document.getElementById('display').value;
    document.getElementById('display').value=eval(100*k);
}
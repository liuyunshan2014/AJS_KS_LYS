// JavaScript Document
$(function(){
var a=0;
var $arr=$(".hideme").parent();
console.log($arr[3]);
var $num=$arr.eq(3).find('a');
console.log($num);
$num.click(function(){
	a+=1;
	console.log(a);
	if(a%2==0)
{
	$(".hideme").hide();
}
if(a%2==1)
{
	$(".hideme").show();
}
});

if(a%2==0)
{
	$(".hideme").hide();
}

/*var b=0;

var $arr2=$(".ys5");
console.log($arr2[0]);
var $num2=$arr2.eq(0).find('a');
console.log($num2);
$num2.click(function(){
    b+=1;
	console.log(b);
	if(b%2==0)
{
	$("#clickhide").show();
}
if(b%2==1)
{
	$("#clickhide").hide();
}
});
if(b%2==0)
{
	$("#clickhide").show();
}*/

});
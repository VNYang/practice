
	let sHtml = "";
	sHtml = "<table>";
	for(let i = 1;i <= 9;i++){
		sHtml += "<tr>";
		for(let j = 1;j <= i;j++){
			sHtml += "<td>" + i + "x" + j + "=" + i*j +"</td>";
		}
		sHtml += "</tr>";
	}
	sHtml += "</table>";
	
	function countDown(n){
		while(n-- > 0){

			console.log(n);
		}
	}
	countDown(5);

	let sdfsdf='undefined';
console.log(typeof sdfsdf);


 	var myVar;
console.log(
  myVar ?
  'myVar has a value' :
  'myVar do not has a value'
)
let result = typeof myVar;

let num = 18;
let result1 = typeof num;

console.log( result);
console.log( result1);

let str1 = "undefined";
let str2 = 'undefined'

console.log(str1 === str2)

	if(typeof myVar === "ewfwe"){
		console.log('myVar do not has a value')
	}else{
		console.log('myVar has a value')
	} 
let str8 = !undefined;
var str7 = str8;
console.log(undefined == null);

/**
 * 
 * 5 + null ->5 + Number(null) -> 5 + 0 -> 5
 * 
 * 5 + 'apple' -> '5' 
 * 
 */


let apple = {
	'颜色':'红色'
};
/* let apple = {
	color:'红色'
}; */
console.log(5 + true)

let obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log(obj[i]);
}

let obj1 = {
	x: 1,
	y: 2
  };
  let props = [];
  let g = 0;
  
  for (var p in obj1) {
	props[g++] = p;
  }
  console.log(props);
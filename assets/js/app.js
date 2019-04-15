
'use strict';

/*
document.getElementById('btn').addEventListener('click',function(){
let results = ['大吉', '吉', '小吉', '末吉', '中吉', '凶', '大凶'];
let n = Math.floor(Math.random() * results.length);
document.getElementById('result').innerHTML = results[n];
});
*/


/*let btn = document.getElementById('btn') ;
let res = ['大吉', '吉', '小吉', '末吉', '中吉', '凶', '大凶'];//結果の配列
btn.addEventListener('click',function(){
	let resLen = res.length;
	let randoNum = Math.random();
	let num = Math.floor(resLen * randoNum);
	// console.log(res[num]);
	// document.getElementById('result').textContent = res[num]; //文字のみ
	document.getElementById('result').innerHTML = `<strong>${res[num]}</strong>`; //文字のみ
});
*/

let btn = document.getElementById('btn') ;

btn.addEventListener('click',omikuji);
function omikuji(){
	let res = ['大吉', '吉', '小吉', '末吉', '中吉', '凶', '大凶'];//結果の配列
	let resLen = res.length;
	let randoNum = Math.random();
	let num = Math.floor(resLen * randoNum);
	// console.log(res[num]);
	document.getElementById('result').innerHTML = `<strong>${res[num]}</strong>`; //文字のみ
}
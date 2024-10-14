alert("В этой игре можно:Зарабатывать монеты, покупать машины, покупать апгрейды !")
let coin = 0
let apgreid = 0
let Senoirs = 0
let Middles = 0
let Juniors = 0
let apgreid2 = 0
let devolopersSkill = 0
let JustSite = 0
let Level = 0
let OpenSmall = 0
let OpenBig = 0
	
	function CoinPlus() {
		if (apgreid == 1) {
		coin++;
		coin++;
		document.getElementById('coin').innerHTML = coin 
	}
	else {
		coin++;
		document.getElementById('coin').innerHTML = coin 
	}

	if (apgreid2 == 1) {
		coin++;
		coin++;
		coin++;
		document.getElementById('coin').innerHTML = coin
	}

	}
		
function BuyLamb() {
	if (coin >= 500) {
		document.getElementById('lamb').innerHTML = '<h1>Автосалон</h1> <h2>Стоимость: 100  монет</h2> <img src="lamba.png" width="800px" height="400px"> <h2 id="buy">Куплено!</h2>  <button onclick="SellLamb()" class="SellLamb">Продать</button> '
		coin -= 500
		document.getElementById('coin').innerHTML = coin
	}
	else {
		alert("Не достаточно монет")
	}

}

function SellLamb() {
	document.getElementById('lamb').innerHTML = '<h1>Автосалон</h1> <h2>Стоимость: 500  монет</h2> <img src="lamba.png" width="800px" height="400px"> <h2 id="buy"></h2>  <button onclick="BuyLamb()" class="BuyLamb">Купить</button> '
	coin +=300
	document.getElementById('coin').innerHTML = coin
}



function BuyBmw() {
	if(coin>=200) {
		document.getElementById('bmw').innerHTML = '<h2>Стоимость: 200</h2> <img src="bmw.png" width="800px"> <h2>Куплено!</h2> <br> <button onclick="SellBmw()"class="BuyApgreid">Продать</button>'
		coin -=200
		document.getElementById('coin').innerHTML = coin
	}
	else {
		alert("Не достаточно мнет")
	}
}

function SellBmw() {
	document.getElementById('coin').innerHTML = coin
	document.getElementById('bmw').innerHTML = '<h2>Стоимость: 200</h2> <img src="bmw.png" width="800px"> <br> <button onclick="BuyBmw()" class="BuyApgreid">Купить</button>'
	coin += 150
}

function HowToPlay() {
	document.getElementById('HowToPlay').innerHTML = "Зарабатывай монеты нажимая на монетку. А за монеты покупай компании, машины и стоновись самым богатым !"
	

}

function Back() {
	document.getElementById('HowToPlay').innerHTML = ""
}

function Apgreid() {
		if (coin >=50) {
			apgreid = 1
			coin -= 50
			document.getElementById('coin').innerHTML = coin 
	}
		else {
			alert("Не достаточно монет")
	}

}

		
	






/*function OpenBisnes() {
	if (coin>=200) {
		document.getElementById('Bisnes').innerHTML = '<h2>Ваша ИТ-компания</h2> <h2 id="Level">Уровень:0</h2> <h2 id="devolopersSkill">0</h2> <h2>Купить сениор разработчика</h2> <h2></h2> <h2 id="seniors">0</h2> <img src="senior.png" width="80px" height="80px"> <button onclick="BuySenior()" class="BuySenior">+1</button> <button onclick ="DismissSenior()" class ="DismissSenior">-1</button> <h2>Нанять мидл разработчика</h2> <h2 id="middles">0</h2> <img src="middle.png" width="80px" height="80px"> <button onclick="BuyMiddle()">+1</button> <button onclick="DismissMiddle()">-1</button> <h2>Нанять джуниор разработчика</h2> <h2 id="juniors">0</h2> <img src="junior.png" height="80px" width="80px"> <button onclick="BuyJunior()">+1</button> <button onclick="DismissJunior()">-1</button> <h2>Проекты:</h2> <h2>Сделать простенький сайт</h2> <img src="site.jpg"> <h2>Требуется минимум 50 умений разрабочтиков</h2> <h2>Плата: 50 монет</h2> <button onclick="DoJustSite()">Создать</button>'
		coin-=200
		document.getElementById('coin').innerHTML = coin
	}
	else {
		alert("Не достаточно монет")
	}
}*/


function BuySenior() {
		if (coin>=60) {
		Senoirs++;
		document.getElementById('seniors').innerHTML = Senoirs
		coin-=70
		document.getElementById('seniors').innerHTML = Senoirs
		devolopersSkill+=100
		document.getElementById('devolopersSkill').innerHTML = devolopersSkill
	}
	else{
		alert("Не достаточно монет")
	}
	
}
	


function  DismissSenior() {
	if(Senoirs>0)
	Senoirs--;
	document.getElementById('seniors').innerHTML = Senoirs
	devolopersSkill-=100
	document.getElementById('devolopersSkill').innerHTML = devolopersSkill
	coin+=50
	document.getElementById('coin').innerHTML = coin
}

function BuyMiddle() {
	if (coin>=40) {
		coin-=40
		document.getElementById('coin').innerHTML = coin
		Middles++;
		document.getElementById('middles').innerHTML = Middles
		devolopersSkill+=50
		document.getElementById('devolopersSkill').innerHTML = devolopersSkill
	}
	else{
		alert("Не достаточно монет")
	}
}

function DismissMiddle() {
	if(Middles>0) {
		Middles--;
		document.getElementById('middles').innerHTML = Middles
		devolopersSkill-=50
		document.getElementById('devolopersSkill').innerHTML = devolopersSkill
		coin+=30
		document.getElementById('coin').innerHTML = coin

	}
}

function BuyJunior() {
	if(coin>=20) {
		coin-=20
		document.getElementById('coin').innerHTML = coin
		Juniors++;
		document.getElementById('juniors').innerHTML = Juniors
		devolopersSkill+=25
		document.getElementById('devolopersSkill').innerHTML = devolopersSkill
	}
	else {
		alert("Не достаточно монет")
	}
}

function DismissJunior() {
	if(Juniors>0) {
		Juniors--;
		document.getElementById('juniors').innerHTML = Juniors
		devolopersSkill-=25
		document.getElementById('devolopersSkill').innerHTML = devolopersSkill
		coin+=10
		document.getElementById('coin').innerHTML = coin
	}
}

function Apgreid2() {
	if (coin >= 100) {
		apgreid2 = 1
		coin-=100
		document.getElementById('coin').innerHTML = coin 
	}
	


}
function SwithToWhite() {
	document.getElementById('coin').innerHTML = coin
	document.getElementById('main').innerHTML = '<button onclick="SwithToBlack()">Темная/Светлая тема</button> <div class="container2"> <h1>Игра  Кликер</h1> <div class="coins"> <h2 id="coin">0</h2> </div> <div class="clicker"> <img src="coin.png" width="500px" height="500px" onclick="CoinPlus()"> </div> <div id="shop"> <div id="lamb"> <h1>Автосалон</h1> <h2>Стоимость: 500  монет</h2> <img src="lamba.png" width="800px" height="400px"> <h2 id="buy"></h2> <button onclick="BuyLamb()" class="BuyApgreid">Купить</button> <div class="bmw"> <h2>Стоимость: 200</h2> <img src="bmw.png" width="800px">  <button onclick="BuyBmw()">Купить</button?</div> </div> </div>	<div class="ApgreidShop"> <h1>Магазин Апгрейдов</h1> <h2>Стоимость: 50 монет</h2> <button onclick="Apgreid()" class="BuyApgreid">Купить апгрейд</button> <br> <h2>Стоимость: 100 монет</h2> <button onclick="Apgreid2()" class="BuyApgreid2">Купить Апгрейд № 2</button> </div> 	<div class="HowToplay"> <h2 id="HowToPlay"></h2> <button onclick="HowToPlay()" class="HowToplayButton">Как играть ?</button> <button onclick="Back()" class="BackButton"> назад(для как играть )</button> </div> <div id="Bisnes"> <h2>Стоимость: 200 монет</h2> <button onclick="OpenBisnes()">Открыть ИТ-компанию</button> </div> </div>'
	
}

/*function SwithToBlack() {
	document.getElementById('coin').innerHTML = coin
	document.getElementById('main').innerHTML = ' <button onclick="SwithToWhite()">Темная/Светлая тема</button> <div class="container"> <h1>Игра  Кликер</h1> <div class="coins"> <h2 id="coin">0</h2> </div> <div class="clicker"> <img src="coin.png" width="500px" height="500px" onclick="CoinPlus()"> </div> <div id="shop"> <div id="lamb"> <h1>Автосалон</h1> <h2>Стоимость: 500  монет</h2> <img src="lamba.png" width="800px" height="400px"> <h2 id="buy"></h2> <button onclick="BuyLamb()" class="BuyApgreid">Купить</button> <div class="bmw"> <h2>Стоимость: 200</h2> <img src="bmw.png" width="800px">  <br> <button onclick="BuyBmw()">Купить</button> </div> </div> </div>	<div class="ApgreidShop"> <h1>Магазин Апгрейдов</h1> <h2>Стоимость: 50 монет</h2> <button onclick="Apgreid()" class="BuyApgreid">Купить апгрейд</button> <br> <h2>Стоимость: 100 монет</h2> <button onclick="Apgreid2()" class="BuyApgreid2">Купить Апгрейд № 2</button> </div> 	<div class="HowToplay"> <h2 id="HowToPlay"></h2> <button onclick="HowToPlay()" class="HowToplayButton">Как играть ?</button> <button onclick="Back()" class="BackButton"> назад(для как играть )</button> </div> <div id="Bisnes"> <h2>Стоимость: 200 монет</h2> <button onclick="OpenBisnes()">Открыть ИТ-компанию</button> </div> </div>'
}*/

function DoJustSite() {
	if(devolopersSkill>=50) {
		JustSite = 1
	}
	else{
		alert("Не достаточно умений")
	}

	if(JustSite == 1) {
		coin+=50
		document.getElementById('coin').innerHTML = coin
	}
}

/*function level() {
	if(JustSite == 1) {
		Level=1
		document.getElementById('Level').innerHTML =  Level	
	}
}

level()*/
function MineCoin() {
	if(OpenSmall==1){
	coin+=15;
	document.getElementById('coin').innerHTML=coin
	}
}

function MineCoin2() {
	if(OpenBig==1)
	coin+=25;
	document.getElementById('coin').innerHTML = coin
}

function OpenSmallEatShop() {
	if(coin>=250){
		OpenSmall = 1
		coin-=250;
		window.alert("Поздровляю вы открыли бизнес");
		document.getElementById('smalleatshop').innerHTML = '<h1>Маленький продуктовый магазин</h1> <img src="smalleatshop.png" width="400px"> <h2>Бреобритено</h2> <h2>Прибыль в пол минуты:15</h2> <button onclick="CloseSmallEatShop()">Закрыть</button>'
		setInterval(MineCoin,6000);
	}
	else{
		alert("Не достаточно монет");
	}
}

function CloseSmallEatShop() {
			OpenSmall = 0
			document.getElementById('coin').innerHTML = coin
			document.getElementById('smalleatshop').innerHTML =  '<h1>Открыть маленький продуктовый магазин</h1> <img src="smalleatshop.png" width="400px"><br> <button onclick="OpenSmallEatShop()">Открыть</button>'
}
function OpenBigEatShop() {
	if(coin>=350){
		OpenBig = 1
		coin-=350;
		alert("Поздровляю с бриобритением бизнеса")
		document.getElementById('bigeatshop').innerHTML = ' <h1>Большой продуктовый магазин</h1> <imgsrc="smalleatshop.png"><h2>Бриобретино</h2> <br> <button onclick="CloseBigEatShop()">Закрыть</button> '
		setInterval(MineCoin2,6000)
	}
}

function CloseBigEatShop() {
		OpenBig = 0
		document.getElementById('coin').innerHTML = coin
		document.getElementById('bigeatshop').innerHTML = '<h1>Открыть большой магазин</h1> <h1>Стоимость:350</h1> <button onclick="OpenBigEatShop()">Открыть</button>'
}

let mas = [1,2,3,7]
console.log(mas.length)

		
		


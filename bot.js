const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
bussy = 0
miejsce = 0
Ania = 0
Beata = 0
miejsce2 = 0
andrzej = 0
punkty = 0
woda = [0,0,0,0]
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function randomNumber(minimum, maximum){
return Math.round( Math.random() * (maximum - minimum) + minimum);
}
client.once('ready', () => {
	console.log('Ready!')
});

client.on('message', message => {
	console.log(message.content);
	if (message.channel.id == 714853966999060611) {
	if (message.content === prefix +'sejf') {
		
		
		

			if (bussy === 1){
				message.channel.send('jestem zajęty! poczekaj chwilkę.');
			}else{
				message.channel.send('Zaczynamy zabawę pokaż co potrafisz!');
				soda = message.author.id
	};
			if (bussy != 1) {
				numer = [randomNumber(0,9), randomNumber(0,9), randomNumber(0,9), randomNumber(0,9)]
				bussy = 1
				console.log(numer[0] + '' + numer[1] +''+ numer[2]  +''+ numer[3] );
	}}};
if (message.channel.id == 714853966999060611) {
	if(bussy == 1){
		if(message.author.id == soda){
	if(message.content.match(/^-{0,1}\d+$/)){
		andrzej = 0
		if(message.content >= 0){
			if(message.content <= 9999){
				dat = message.content.split("");
				for (miejsce = 0; miejsce < 4; miejsce++) {
					if(dat[miejsce] == numer[miejsce]) {
						andrzej++
						woda[miejsce] = [':green_square:'];
						Ania++
						Beata = 0
						}else{
						andrzej = 0
					for(miejsce2 = 0; miejsce2 < 4; miejsce2++) {
					if(numer[miejsce2] == dat[miejsce]) {
						woda[miejsce] = [':red_square:'];
						Ania++
						Beata = 0
						break
					}else{
						if(miejsce2 == 3) {
							woda[miejsce] = [':white_large_square:'];
							Ania++
							Beata = 0
						break
						}}}};
						if(Ania == 4) {
						punkty++
						message.channel.send(woda[0] + '' + woda[1]+ '' + woda[2]+ '' + woda[3]);
						Beata = 1
						Ania = 0
						console.log('Ania')
						};
						sleep(150);
						if(Beata = 1){
							if(andrzej == 4) {
							console.log('andrzej')
							if (punkty == 1) {
								message.channel.send('O ty farciarzu zrobiłeś to za pierwszym razem!');
							}else{
							if (punkty <= 5) {
							message.channel.send('Gratuluje Otwarłeś sejf! potrzebowałeś tylko ' + punkty + ' prób!');
							}else{
							if (punkty <= 10) {
							message.channel.send('Gratuluje Otwarłeś sejf! potrzebowałeś ' + punkty + ' prób!');
							}else{
							if (punkty > 10) {
							message.channel.send('Gratuluje Otwarłeś sejf! potrzebowałeś aż ' + punkty + ' prób!');
							}}}};
							bussy = 0
							Beata = 0
							andrzej = 0
							punkty = 0
						}}};
					} else {
						message.channel.send ('liczba jest za duża! :(');
					}}else {
						message.channel.send ('liczba jest za mała :(');
		}}}}}});

client.login(token) 


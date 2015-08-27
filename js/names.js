/**
 * Raffle
 * 2012
 * https://github.com/stringham/raffle
 * Copyright Ryan Stringham
 */

//set the colors for each life, in HEX
var colors = ["#c9daf8", "#a4c2f4", "#6fa8dc","#6d9eeb","#3c78d8","#3d85c6","#1155cc","#0b5394","#1c4587", "#073763"];

var games = [
{
	name:'7 Wonders',
	Min: 2,
	Max: 7,
	Time:30,
	points:9
},{
	name:'Spades',
	Min: 4,
	Max: 4,
	Time: 60,
	points: 8.6
},{
	name:'Lords of Waterdeep',
	Min: 2,
	Max: 5,
	Time: 60,
	points: 8.4
},{
	name:'Forbidden Dessert',
	Min: 2,
	Max: 5,
	Time: 30,
	points: 8
},{
	name:'Dirty Hearts',
	Min: 8,
	Max: 16,
	Time: 60,
	points: 8
},{
	name:’Carcassonne’,
	Min:2,
	Max:6,
	Time:40,
	points:7.6
},{
	name:’Dominion’,
	Min:2,
	Max:5,
	Time:45,
	points:7.5
},{
	name:’5 Crowns’,
	Min:2,
	Max:7,
	Time:45,
	points:7.4
},{
	name:’Bohnanza’,
	Min:2,
	Max:7,
	Time:45,
	points:7.4
},{
	name:’Blokus’,
	Min:2,
	Max:4,
	Time:30,
	points:7.2
},{
	name:’Scum’,
	Min:6,
	Max:16,
	Time:30,
	points:7.2
},{
	name:’Oh Shoot’,
	Min:2,
	Max:6,
	Time:30,
	points:7.1
},{
	name:’Settlers of Catan’,
	Min:2,
	Max:4,
	Time:60,
	points:7.1
},{
	name:’Settlers: Cities and Kingdoms’,
	Min:2,
	Max:4,
	Time:90,
	points:7
},{
	name:’Mafia’,
	Min:6,
	Max:16,
	Time:20,
	points:6.8
},{
	name:’Four on the Couch’,
	Min:10,
	Max:20,
	Time:20,
	points:6.8
},{
	name:’Sequence’,
	Min:2,
	Max:6,
	Time:30,
	points:6.75
},{
	name:’Rummikub’,
	Min:2,
	Max:4,
	Time:30,
	points:6.6
},{
	name:’Mario Kart’,
	Min:2,
	Max:4,
	Time:20,
	points:6.6
},{
	name: ‘Wits and Wagers’,
	Min: 3,
	Max:15,
	Time: 45,
	points: 6.5,
},{
	name: ‘Spot it’,
	Min: 2,
	Max: 10,
	Time: 20,
	points: 6.5
},{
	name: ‘Hearts’,
	Min: 4,
	Max: 4,
	Time: 60,
	points: 6.44
},{
	name: ‘Super Mario Bros’,
	Min: 2, 
	Max: 4,
	Time: 20,
	points: 6.4
},{
	name: ‘Monopoly Deal’,
	Min: 2,
	Max: 5,
	Time: 20,
	points: 6.22
},{
	name: ‘Scattegories’,
	Min: 2,
	Max: 4,
	Time: 30,
	points: 6.22
},{
	name: ‘Canasta’,
	Min: 2,
	Max: 6,
	Time: 20,
	points: 6
},{
	name: ‘Peanuts/Nerts’,
	Min: 2,
	Max: 12,
	Time: 30,
	points: 6
},{
	name: ‘Golf’,
	Min: 2,
	Max: 8,
	Time: 20,
	points: 6
},{
	name: ‘Catch Phrase’,
	Min: 2,
	Max: 24 ,
	Time: 20,
	points: 5.8
},{
	name: ‘Munchkin’,
	Min: 2,
	Max: 8,
	Time: 45,
	points: 5.78
},{
	name: ‘Skip Bo’,
	Min: 2,
	Max: 8,
	Time: 30,
	points: 5.6
},{
	name: ‘Forbidden Island’,
	Min: 2 ,
	Max: 4,
	Time: 20,
	points: 5.5
},{
	name: ‘Sorry’,
	Min: 2,
	Max: 4,
	Time: 30,
	points: 5.4 
},{
	name: ‘Phase 10’,
	Min: 2,
	Max: 10,
	Time: 45,
	points: 5.2
},{
	name: ‘Apples to Apples’,	
	Min: 4,
	Max: 10,
	Time: 60,
	points: 3.8
},{
	name: ‘Battle of the Sexes,
	Min: 2,
	Max: 20,
	Time: 60,
	points: 3.6
}
];

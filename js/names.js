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
	name:'Small World',
	Min:2,
	Max:'5',
	Time:60,
	points:12
},{
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
	points: 9
},{
	name:'Lords of Waterdeep',
	Min: 2,
	Max: 5,
	Time: 60,
	points: 9
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
	name:'Carcassonne',
	Min:2,
	Max:6,
	Time:40,
	points:8
},{
	name:'Dominion',
	Min:2,
	Max:5,
	Time:45,
	points:7
},{
	name:'5 Crowns',
	Min:2,
	Max:7,
	Time:45,
	points:7
},{
	name:'Bohnanza',
	Min:2,
	Max:7,
	Time:45,
	points:7
},{
	name:'Blokus',
	Min:2,
	Max:4,
	Time:30,
	points:7
},{
	name:'Scum',
	Min:6,
	Max:16,
	Time:30,
	points:7
},{
	name:'Oh Shoot',
	Min:2,
	Max:6,
	Time:30,
	points:7
},{
	name:'Settlers of Catan',
	Min:2,
	Max:4,
	Time:60,
	points:7
},{
	name:'Settlers: Cities and Kingdoms',
	Min:2,
	Max:4,
	Time:90,
	points:7
},{
	name:'Mafia',
	Min:6,
	Max:16,
	Time:20,
	points:6
},{
	name:'Four on the Couch',
	Min:10,
	Max:20,
	Time:20,
	points:6
},{
	name:'Sequence',
	Min:2,
	Max:6,
	Time:30,
	points:6
},{
	name:'Rummikub',
	Min:2,
	Max:4,
	Time:30,
	points:6
},{
	name:'Mario Kart',
	Min:2,
	Max:4,
	Time:20,
	points:7
},{
	name: 'Wits and Wagers',
	Min: 3,
	Max:15,
	Time: 45,
	points: 7,
},{
	name: 'Spot it',
	Min: 2,
	Max: 10,
	Time: 20,
	points: 6
},{
	name: 'Hearts',
	Min: 4,
	Max: 4,
	Time: 60,
	points: 6
},{
	name: 'Super Mario Bros',
	Min: 2, 
	Max: 4,
	Time: 20,
	points: 6
},{
	name: 'Monopoly Deal',
	Min: 2,
	Max: 5,
	Time: 20,
	points: 6
},{
	name: 'Scattegories',
	Min: 2,
	Max: 4,
	Time: 30,
	points: 6
},{
	name: 'Canasta',
	Min: 2,
	Max: 6,
	Time: 20,
	points: 6
},{
	name: 'Peanuts/Nerts',
	Min: 2,
	Max: 12,
	Time: 30,
	points: 6
},{
	name: 'Golf',
	Min: 2,
	Max: 8,
	Time: 20,
	points: 6
},{
	name: 'Catch Phrase',
	Min: 6,
	Max: 24 ,
	Time: 20,
	points: 5
},{
	name: 'Munchkin',
	Min: 2,
	Max: 8,
	Time: 45,
	points: 5
},{
	name: 'Skip Bo',
	Min: 2,
	Max: 8,
	Time: 30,
	points: 5
},{
	name: 'Forbidden Island',
	Min: 2 ,
	Max: 4,
	Time: 20,
	points: 5
},{
	name: 'Sorry',
	Min: 2,
	Max: 4,
	Time: 30,
	points: 5
},{
	name: 'Phase 10',
	Min: 2,
	Max: 10,
	Time: 45,
	points: 5
},{
	name: 'Apples to Apples',	
	Min: 4,
	Max: 10,
	Time: 60,
	points: 3
},{
	name: 'Battle of the Sexes',
	Min: 2,
	Max: 20,
	Time: 60,
	points: 3
}
];

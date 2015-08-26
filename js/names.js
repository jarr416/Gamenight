/**
 * Raffle
 * 2012
 * https://github.com/stringham/raffle
 * Copyright Ryan Stringham
 */

//set the colors for each life, in HEX
var colors = ["#868dda", "#606ad7", "#4753d1","#2f3dda","#2232dd","#1929d7","#1624bb","#111b8d","#0d1672", "#071078"];

/*
 * If you want to have the names show up on the page without entering them into
 * the text field, you can define them here. There is an option to give names
 * points, if you don't then it defaults to one point.
 */
var games = [
{
	name:'7 Wonders',
	Min: 2,
	Max: 7,
	Time:30,
	points:7
},{
	name:'Spades',
	Min: 4,
	Max: 4,
	Time: 60,
	points: 10
},{
	name:'Lords of Waterdeep',
	Min: 2,
	Max: 5,
	Time: 60,
	points: 10
},{
	name:'Forbidden Dessert',
	Min: 2,
	Max: 5,
	Time: 30,
	points: 10
},{
	name:'Dirty Hearts',
	Min: 8,
	Max: 16,
	Time: 60,
	points: 10
}
];

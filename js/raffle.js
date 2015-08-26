/**
 * Raffle
 * 2012
 * https://github.com/stringham/raffle
 * Copyright Ryan Stringham
 */

var inProgress = false;
var size = 60;
var options = [];
function map(a, f){
	for(var i=0; i<a.length; i++){
		f(a[i], i);
	}
}
function shuffle(array) {
  return array;
}

function process(){
	var time = parseInt($('.time').val());
	var players = parseInt($('.players').val());
	var options = []
	map(games, function(game){
		if (game.Min <= players && game.Max >= players && game.Time <= time) {
			options.push(game);
		}
	});
	$('.enter-names').hide(500, function(){
		makeTicketsWithPoints();
	});
}

var ticketNames;
var ticketPoints;

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

function Ticket(name, points){
	this.name = name;
	if(typeof(points) == "number")
		this.points = points;
	else
		this.points = 1;
	this.dom = $("<div class='ticket'>").text(name);
	this.fixPosition = function(){
		var me = this;
		this.dom.css({
			'position':'absolute',
			'top': me.dom.offset().top,
			'left':me.dom.offset().left,
			'background': colors.length > me.points ? colors[me.points] : "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")" 
		});
	};
	this.decrement = function(length, callback){
		var me = this;
		this.points--;
		if(this.points == 0){
			var directions = ['up', 'down', 'left', 'right'];
			this.dom.css({'background-color':colors[0]}).hide('drop', {direction:directions[length%directions.length]}, length <= 3 ? 750 : 3000/length, function(){
				callback();
			});
			$('#participant-number').text(length - 1 + '/' + tickets.length);
		}
		else{
			this.dom.css({
				'background-color':colors.length > me.points ? colors[me.points] : "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")"
			})
			setTimeout(function() {
				callback();
			}, length == 2 ? 1000 : 3000/length);
		}
	}
}

var tickets = [];

var makeTicketsWithPoints = function(){
	tickets = [];
	$('.ticket').remove();
	map(options, function(tdata){
		var t = new Ticket(tdata.name, tdata.points);
		if(t.points > 0)
			t.dom.appendTo($('body'));
		tickets.push(t);
	});
	tickets.reverse();
	size = 40;
	$('.ticket').css('font-size', size + 'px');
	while(!elementInViewport(tickets[0].dom.get(0)) && size > 10){
		size--;
		$('.ticket').css('font-size', size + 'px');
	}

	$('#participant-number').css('width', '').text(tickets.length);
	setTimeout(function() {
		map(tickets, function(ticket){
			ticket.fixPosition();
		});
		$('body').unbind('click').click(function(){
			var width = $('#participant-number').text(tickets.length + '/' + tickets.length).width();
			$('#participant-number').css('width', width + 'px'); //keep position consistent during countdown
			pickName();
		});
	}, 500);
}

var getChoices = function(){
	var result = [];
	map(tickets, function(ticket){
		if(ticket.points > 0)
			result.push(ticket)
	});
	return result;
}

$(window).resize(function(){
	if(!inProgress)
		makeTicketsWithPoints(tickets);
});


var pickName = function(){
	inProgress = true;
	$('.ticket').unbind('click');
	$('body').unbind('click');
	
	var choices = getChoices();
	if(choices.length > 1){
		var remove = Math.floor(Math.random()*choices.length);
		choices[remove].decrement(choices.length, function(){
			pickName();
		});
	}
	else{
		choices = $(choices[0].dom);
		var top = choices.css('top');
		var left = choices.css('left');
		var fontsize = choices.css('font-size');
		var width = choices.width();
		choices.click(function(){
			inProgress = false;
			choices.animate({'font-size':fontsize,'top':top,'left':left},'slow');
			$('.ticket').show(500).unbind('click');
			setTimeout(function(){
				makeTicketsWithPoints(ticketNames, ticketPoints);
			}, 700);
		});
		choices.animate({'font-size':3*size +'px','top':(window.innerHeight/5) + 'px','left':(window.innerWidth/2 - width) + 'px'},1500, function(){
			choices.animate({'left':(window.innerWidth/2 - choices.width()/2) + 'px'}, 'slow');
		});
	}
}

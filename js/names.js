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
var imported = false;
// var imported = [
// {
// 	name:'Fred',
// 	points:2
// },{
// 	name:'Dallin',
// 	points:3
// },{
// 	name:'Ryan'
// },{
// 	name:'Paul'
// },{
// 	name:'Wade'
// },{
// 	name:'Kesler'
// },{
// 	name:'Brett'
// },{
// 	name:'Tyler'
// }
// ];

/**
 * Raffle
 * 2012
 * https://github.com/stringham/raffle
 * Copyright Ryan Stringham
 */

//set the colors for each life, in HEX
var colors = ["#ABC8E4","#628CB6","#003366","#001948","#001948","#001948","#001948"];

/*
 * If you want to have the names show up on the page without entering them into
 * the text field, you can define them here. There is an option to give names
 * points, if you don't then it defaults to one point.
 */
var imported = false;
// var imported = [
// {
// 	name:'Fred',
// 	points:2
// },{
// 	name:'Dallin',
// 	points:3
// },{
// 	name:'Ryan'
// },{
// 	name:'Paul'
// },{
// 	name:'Wade'
// },{
// 	name:'Kesler'
// },{
// 	name:'Brett'
// },{
// 	name:'Tyler'
// }
// ];


/**
 * This supports retrieving a list of names from a published google sheets.
 * It will look for a column name with first and last or just name to determine
 * the names of the entries.
 *
 * Publish the google sheets and put ?key=<google-sheets-key> for the query string
 * and the names will automatically be loaded when you load the page.
 */

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var key = getParameterByName('key');

if(key){
	var gridIds = ['1','o6d'];
	function getFromGoogle(i){
		$.ajax({ 
			url: 'https://spreadsheets.google.com/feeds/list/'+key+'/'+gridIds[i]+'/public/values?alt=json',
			type: 'get',
			dataType: "jsonp",
			error: function(){
				if(i+1 < gridIds.length)
					getFromGoogle(i+1);
			},
			timeout:5000,
			success: function(list){
				var keys = []; 
				for(var name in list.feed.entry[0])
					if(name.indexOf('gsx$') == 0)
						keys.push(name);

				var firstName = false;
				var lastName = false;
				var fullName = false;
				for(var i=0; i<keys.length; i++){
					if(keys[i].toLowerCase().indexOf('first') > 0){
						firstName = keys[i];
					}
					if(keys[i].toLowerCase().indexOf('last') > 0){
						lastName = keys[i];
					}
					if(keys[i].toLowerCase().indexOf('name') > 0){
						fullName = keys[i];
					}
				}

				var names = list.feed.entry.map(function(entry){
					var result = '';
					if(firstName && lastName) return entry[firstName].$t + ' ' + entry[lastName].$t;
					if(firstName) return entry[firstName].$t;
					if(lastName) return entry[lastName].$t;
					if(fullName) return entry[fullName].$t;
					return false;
				}).filter(function(name){
					return name;
				}).map(function(name){
					return {
						name:name
					}
				});

				if(names.length > 0){
					imported = names;
					$('.enter-names').hide();
					makeTicketsWithPoints();
				}
			}
		});
	}
	getFromGoogle(0);

}

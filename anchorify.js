// ANCHORIFY 
(function ($) {
	'use strict';
	$.fn.anchorify = function (toggleLocation) {

		var anchors = $('<p id="alpha"><a href = "#A" >A</a> | <a href = "#B">B</a> | <a href = "#C" >C</a> | <a href = "#D" >D</a> | <a href = "#E" >E</a> | <a href = "#F">F</a> | <a href = "#G" >G</a> | <a href = "#H" >H</a> | <a href = "#I" >I</a> | <a href = "#J" >J</a> | <a href = "#K" >K</a> | <a href = "#L" >L</a> | <a href = "#M" >M</a> | <a href = "#N" >N</a> | <a href = "#O" >O</a> | <a href = "#P" >P</a> | <a href = "#Q" >Q</a> | <a href = "#R" >R</a> | <a href = "#S" >S</a> | <a href = "#T" >T</a> | <a href = "#U" >U</a> | <a href = "#V" >V</a> | <a href = "#W" >W</a> | <a href = "#X" >X</a> | <a href = "#Y">Y</a> | <a href = "#Z" >Z</a></p>');

		$(toggleLocation).prepend(anchors)

		var last = 0,
			alpha = anchors.find('a'),
			glossary = $(this);

		for (var i = 0; i < alpha.length; i++) {
			var letter = alpha.eq(i).text();
			var j = 0;
			if (last > 0) {
				j = last + 1;
			}
			for (j; j < glossary.length; j++) {
				var term = glossary.eq(j);
				if (term.text().indexOf(letter) === 0) {
					last = j;
					term.attr('id', letter);
					break;
				}
			}
			if (j !== last) {
				alpha.eq(i).attr('disabled', 'disabled');
			}
		}
		
		return $(this);
	}
}(jQuery));
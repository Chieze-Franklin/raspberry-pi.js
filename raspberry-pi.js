'use strict';

var board = require("board");

module.exports = {
	CLOCK_CYCLE: 5,

	print: function(message){
		console.log(message);
	},

	GPIO: {
		BOARD: board, //TODO: this should be wrong but since (thus far) it doesnt matter I'll leave it

		IN: board.IN,
		OUT: board.OUT,

		HIGH: 3.3,
		LOW: 0,

		add_event_detect: function(pin, event, callback){
			//events: GPIO.FALLING
			//TODO: store all callbacks against the pin and event
		},
		cleanup : function(){
			//TODO: what to do?
		},
		input : function(pin){
			return board.read(pin);
		},
		output : function(pin, value){
			if(value == this.HIGH || value == this.LOW){
				board.write(pin, value);
			}  
			else{
				//TODO: what do I do?
			}
		},
		setmode : function(_board){
			//TODO: what to do?
		},
		setup : function(pin, mode){
			board.setPinMode(pin, mode);
		}
	},

	time: {
		sleep: function(seconds, callback){
			board.pause(seconds * 1000, callback);
		},
		sleepSync: function(seconds){
			board.pauseSync(seconds * 1000);
		},
		time: function(){
			return new Date();
		}
	}
};
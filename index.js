const State = require('./states/stateBase.js')
const tester = new State()
const OK = require('./states/ok.js')

exports.statesArray = []
var states = []

const fileRegex = /^[^.].+.js/

require('fs').readdirSync('./states').forEach((file) => {
	if (fileRegex.test(file) && file != "stateBase.js") {
		var toAdd = require('./states/' + file)
		console.log('Added new state: ' + toAdd.name)
		states.push(toAdd)
		exports.statesArray.push(toAdd.name)
	}
})

exports.nextElection = function(state, start) {
	for (var x in states) {
		if (states[x].name == state || states[x].abbreviation == state) {
			return states[x].nextElection(start)
		}
	}
	return
}

exports.getElections = function(options) {
	var toReturn = []
	for (var x in states) {
		if (options.state) {
			if (states[x].name != options.state && states[x].abbreviation != options.state) {
				continue
			}
		}
		var toAdd = states[x].getElections(options.after, options.before)
		for (var y in toAdd) {
			toReturn.push(toAdd[y])
		}
	}
	return toReturn
}
module.exports = class State {
	constructor(name, abbreviation) {
		this.name = name
		this.abbreviation = abbreviation
	}
	
	ocdString() {
		return "ocd-division/country:us/state:" + this.abbreviation
	}
}
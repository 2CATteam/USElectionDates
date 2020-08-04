module.exports = class State {
	constructor(name, abbreviation, electionFunction, dateFunction) {
		this.name = name ? name : "Test"
		this.abbreviation = abbreviation ? abbreviation : "test"
		if (electionFunction) this.electionCheck = electionFunction
		if (dateFunction) this.getDateObject = dateFunction
	}
	
	ocdString() {
		return "ocd-division/country:us/state:" + this.abbreviation
	}
	
	getDateObject(election, description) {
		var registration = new Date(election)
		var absentee = new Date(election)
		registration.setDate(election.getDate() - 25)
		absentee.setDate(election.getDate() - 7)
		return {
			state: this.name,
			electionDate: this.dateString(election),
			absenteeDeadline: this.dateString(absentee),
			registrationDeadline: this.dateString(registration),
			ocd_id: this.ocdString(),
			description: description
		}
	}
	
	electionCheck(date) {
		var now = new Date()
		if (this.dateTest(date, now)) {
			return this.getDateObject(now, "Test election - election today")
		} else if (this.dateTest(date, now, 7)) {
			return this.getDateObject(now, "Test election - absentee today")
		} else if (this.dateTest(date, now, 25)) {
			return this.getDateObject(now, "Test election - registration today")
		}
	}
	
	nextElection(start) {
		if (!start) start = new Date()
		var curr = new Date(start)
		var end = new Date(start)
		end.setFullYear(end.getFullYear() + 2)
		while (curr < end) {
			var toReturn = this.electionCheck(curr)
			if (toReturn) return toReturn
			curr.setDate(curr.getDate() + 1)
		}
		return
	}
	
	getElections(after, before) {
		if (!after) after = new Date()
		if (!before) {
			before = new Date(after)
			before.setYear(before.getFullYear() + 1)
		}
		var toReturn = []
		var curr = new Date(after)
		before = new Date(before)
		before = new Date(before.getFullYear(), before.getMonth(), before.getDate() + 1)
		while (curr < before) {
			var toAdd = this.electionCheck(curr)
			if (toAdd) toReturn.push(toAdd)
			curr.setDate(curr.getDate() + 1)
		}
		return toReturn
	}
	
	dateTest(a, b, offset) {
		var tester = new Date(b)
		tester.setDate(b.getDate() + (offset ? offset : 0))
		if (a.getFullYear() == tester.getFullYear()
			&& a.getMonth() == tester.getMonth()
			&& a.getDate() == tester.getDate()) {

			return true
		}
		return false
	}
	
	dateString(date) {
		return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
	}
}
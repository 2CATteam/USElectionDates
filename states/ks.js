const State = require('./stateBase.js')
module.exports = new State("Kansas", "ks", function(date) {
	if (date.getDay() != 2) return
	if (date.getFullYear() % 2 == 0) {
		switch (date.getMonth()) {
			case 5:
				if (date.getDate() < 8) {
					return this.getDateObject(date, "Primary Elections")
				}
				break
			case 10:
				if (date.getDate() > 1 && date.getDate() <= 8) {
					return this.getDateObject(date, "General Elections")
				}
				break
		}
	} else {
		//TODO: Find out how Kansas schedules their elections
	}
}, function(election) {
	var registration = new Date(election)
	var absentee = new Date(election)
	registration.setDate(election.getDate() - 21)
	absentee.setDate(election.getDate() - 7)
	return {
		state: this.name,
		electionDate: this.dateString(election),
		absenteeDeadline: this.dateString(absentee),
		registrationDeadline: this.dateString(registration),
		ocd_id: this.ocdString(),
		description: description
	}
})
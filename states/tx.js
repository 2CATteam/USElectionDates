const State = require('./stateBase.js')
module.exports = new State("Texas", "tx", function(date) {
	if (date.getDay() != 2) return
	if (date.getFullYear() % 2 == 0) {
		switch (date.getMonth()) {
			case 1:
				if (date.getDate() < 8) {
					return this.getDateObject(date, "Primary Elections")
				}
				break
			case 6:
				if (Math.ceil(date.getDate() / 7) == 2) {
					return this.getDateObject(date, "Primary Runoff Election")
				}
				break
			case 10:
				if (date.getDate() > 1 && date.getDate() <= 8) {
					return this.getDateObject(date, "Uniform Elections")
				}
				break
		}
	} else {
		//TODO: Find out how Texas schedules their local elections
	}
}, function(election) {
	var registration = new Date(election)
	var absentee = new Date(election)
	registration.setDate(election.getDate() - 29)
	absentee.setDate(election.getDate() - 11) //How can I show that it needs to be received by this date?
	return {
		state: this.name,
		electionDate: this.dateString(election),
		absenteeDeadline: this.dateString(absentee),
		registrationDeadline: this.dateString(registration),
		ocd_id: this.ocdString(),
		description: description
	}
})
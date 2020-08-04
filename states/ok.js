const State = require('./stateBase.js')
module.exports = new State("Oklahoma", "ok", function(date) {
	if (date.getDay() != 2) return
	if (date.getFullYear() % 2 == 0) {
		switch (date.getMonth()) {
			case 0:
				if (Math.ceil(date.getDate() / 7) == 2) {
					return this.getDateObject(date, "Special Elections")
				}
				break
			case 1:
				if (Math.ceil(date.getDate() / 7) == 2) {
					return this.getDateObject(date, "Board of Education Primary Elections")
				}
				break
			case 2:
				if (Math.ceil(date.getDate() / 7) == 1) {
					return this.getDateObject(date, (date.getFullYear() % 4 == 0 ? "Presidential Primary Elections" : "Special Elections"))
				}
				break
			case 3:
				if (Math.ceil(date.getDate() / 7) == 1) {
					return this.getDateObject(date, "Board of Education General Elections")
				}
				break
			case 5:
				if (date.getDate() >= 24) {
					return this.getDateObject(date, "Primary Elections")
				}
				break
			case 7:
				if (Math.ceil(date.getDate() / 7) == 4) {
					return this.getDateObject(date, "Runoff Primary Elections")
				}
				break
			case 10:
				if (date.getDate() > 1 && date.getDate() <= 8) {
					return this.getDateObject(date, "General Elections")
				}
				break
		}
	} else {
		switch (date.getMonth()) {
			case 0:
				if (Math.ceil(date.getDate() / 7) == 2) {
					return this.getDateObject(date, "Special Elections")
				}
				break
			case 1:
				if (Math.ceil(date.getDate() / 7) == 2) {
					return this.getDateObject(date, "Board of Education Primary Elections")
				}
				break
			case 2:
				if (Math.ceil(date.getDate() / 7) == 1) {
					return this.getDateObject(date, "Special Elections")
				}
				break
			case 3:
				if (Math.ceil(date.getDate() / 7) == 1) {
					return this.getDateObject(date, "Board of Education General Elections")
				}
				break
			case 4:
				if (Math.ceil(date.getDate() / 7) == 2) {
					return this.getDateObject(date, "Special Elections")
				}
				break
			case 5:
				if (Math.ceil(date.getDate() / 7) == 2) {
					return this.getDateObject(date, "Special Elections")
				}
				break
			case 6:
				if (Math.ceil(date.getDate() / 7) == 2) {
					return this.getDateObject(date, "Special Elections")
				}
				break
			case 7:
				if (Math.ceil(date.getDate() / 7) == 4) {
					return this.getDateObject(date, "Special Elections")
				}
				break
			case 8:
				if (Math.ceil(date.getDate() / 7) == 2) {
					return this.getDateObject(date, "Special Elections")
				}
				break
			case 9:
				if (Math.ceil(date.getDate() / 7) == 2) {
					return this.getDateObject(date, "Special Elections")
				}
				break
			case 10:
				if (date.getDate > 1 && date.getDate <= 8) {
					return this.getDateObject(date, "Special Elections")
				}
				break
			case 11:
				if (Math.ceil(date.getDate() / 7) == 2) {
					return this.getDateObject(date, "Special Elections")
				}
				break
		}
	}
})
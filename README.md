# THIS PACKAGE IS UNFINISHED, PLEASE CHECK BACK IN A WEEK OR TWO

# US Election Dates
An NPM package for getting election dates for each state

## About
--------------
I was looking through Oklahoma's election scheduling system one night, and I was frustrated by how needlessly complicated the scheduling of it is. Glancing around at various APIs, such as the Google Civic API, I was frustrated to see that none of the free ones seemed to be able to fix the simple problem of consistently telling when an election is going to happen in time to tell citizens to register to vote.

**Therefore,** this package is intended to predict elections for each state **well into the future.** It will NOT give detailed data like what representatives are up for elections, any state questions, etc. It DOES predict the date of elections, deadlines for voter registration, deadlines for requesting absentee ballots, and a super-simple description.

This package **will not be accurate** if a state has canceled, delayed, or otherwise changed the date of their election.

# Installation
-----------
To be honest, I don't know how this works. I think you can just run:

`npm install USElectionDates`

# Usage
-------------
The main function you should be using is `getElections([options])`.

`options` is an optional settings object, with the following parameters being recognized:

####year
	* Specify a year number to only return elections from that year.
	* Default value is any
####month
	* Specify a month number to only return elections from that month.
	* Default value is any
####after
	* A date object (Or [equivalent]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)) that all elections returned will be after
	* Default value is today
####before
	* A date object (Or [equivalent]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)) that all elections returned will be before
	* Default value is a year from today
####state
	* Specify a state to only get elections from that state
	* Can be a state's full name like `"Oklahoma"`, or a state's shortened name like `"OK"`
	* If unspecified, will return elections from all states.

This function should return an array of objects of the following form:
```
{
	state: "Oklahoma",
	electionDate: "2020-08-25",
	registerDeadline: "2020-07-31",
	absenteeDeadline: "2020-08-18",
	description: "Runoff Primary Election",
	ocd-id: "ocd-division/country:us/state:ok"
}
```
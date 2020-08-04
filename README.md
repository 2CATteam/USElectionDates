# THIS PACKAGE IS UNFINISHED, PLEASE CHECK BACK IN A WEEK OR TWO

# US Election Dates
An NPM package for getting election dates for each state

## About
--------------
I was looking through Oklahoma's election scheduling system one night, and I was frustrated by how needlessly complicated the scheduling of it is. Glancing around at various APIs, such as the Google Civic API, I was frustrated to see that none of the free ones seemed to be able to fix the simple problem of consistently telling when an election is going to happen in time to tell citizens to register to vote.

**Therefore,** this package is intended to predict elections for each state **well into the future.** It will NOT give detailed data like what representatives are up for elections, any state questions, etc. It DOES predict the date of elections, deadlines for voter registration, deadlines for requesting absentee ballots, and a super-simple description.

This package **will not be accurate** if a state has canceled, delayed, or otherwise changed the date of their election. In addition, a lot of states have weird "gotcha" things going on with their elections that this software may miss, so if you notice one, PLEASE submit an issue of GitHub, and just to be safe, whenever possible, double-check stuff with the Google Civic API.

# Installation
-----------
To be honest, I don't know how this works. I think you can just run:

`npm install USElectionDates`

# Usage
-------------
The main function you should be using is `getElections([options])`.

`options` is an optional settings object, with the following parameters being recognized:
#### after
* A date object (Or [equivalent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)) that all elections returned will be after or on.
* Default value is today
#### before
* A date object (Or [equivalent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)) that all elections returned will be before or on. Note that, if you intend to use a string, JS dates from strings is all kinds of messed up
* Default value is a year from `after`
#### state
* Specify a state to only get elections from that state
* Can be a state's full name like `"Oklahoma"`, or a state's shortened name like `"OK"`
* If unspecified, will return elections from all states.
* You can also use the 'test' state, which is set to have three elections - one with the election set to the current day, one with the registration deadline set to today, and one with the absentee deadline set to today.

This function should return an array of objects of the following form:
```
{
	state: "Oklahoma",
	electionDate: "2020-08-25",
	registerDeadline: "2020-07-31",
	absenteeDeadline: "2020-08-18",
	description: "Runoff Primary Election",
	ocd_id: "ocd-division/country:us/state:ok"
}
```

Whenever possible, the absentee ballot will show the "postmarked by" date, but for some states, like Texas, that's not possible, as they only have a "received by" date.

In addition, the package offers a few other useful features:

`nextElection(state, start)`

This function will return the next election for a given state. Specifying a state is not optional for this function, but specifying a start date is. If a start date is not specified, it will use the current date. If the specified state is invalid, it will not return anything.

`stateArray`

This is a class property that's simply an array of all available states.
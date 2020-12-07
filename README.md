# Populate an Ecoverse with data from a spreadsheet
This repository has functionality to enable the population of an Ecoverse with data from a spreadshet. The spreadsheet is a local file, in the "OpenDocument Spreadsheet" (ODS) format.

## Google Sheet Format

The spreadsheet does have a required format. An example of such a sheet is [provided in this repo](https://github.com/cherrytwist/populator/blob/develop/src/data/sample.ods). If you want to make a custom load of data into an Ecoverse then please make a copy of this sheet and fill as needed.

## Checks steps before starting:
* Ensure that the Cherrytwist Server is available, and that it (for now) has authentication disabled.
    * If you have moved it from the default location then you can make a copy of `.env.default` to creat a `.env` file and specify the location there.
* Ensure that you are able to access the spreadsheet being used - for example the [sample spreadsheet](https://github.com/cherrytwist/populator/blob/develop/src/data/sample.ods).

## Execute the population
Finally you should now be in a position to run the data population!
* Execute `npm run populate`

Now you can navigate the web client and see a sample populated Ecoverse - enjoy!


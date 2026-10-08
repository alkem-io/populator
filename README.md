<p align="center">
  <a href="https://alkem.io" target="blank"><img src="https://alkem.io/logo.png" width="400" alt="Alkemio Logo" /></a>
</p>
<p align="center"><i>Collaboration in the spaces between organisations</i></p>

# Populate a Alkemio Space with data from a spreadsheet

This repository has functionality to enable the population of a Space with data from a spreadshet. The spreadsheet is a local file, in the "OpenDocument Spreadsheet" (ODS) format.

## Spreadsheet Format

The spreadsheet does have a required format. An example of such a sheet is [provided in this repo](https://github.com/alkem-io/populator/blob/develop/alkemio-sdgs.ods).

If you want to make a custom load of data into an Space then please make a copy of this sheet and fill as needed.

## Checks steps before starting:

- Ensure that the Alkemio Server is available.

## Populating using custom locations or data file:

- Make a copy of `.env.default` to creat a `.env` file
- Edit this file to specify the values for the two environment variables:
  - **API_ENDPOINT_PRIVATE_GRAPHQL**: The server api end point location. This should be the non-interactive private end point.
  - **ALKEMIO_DATA_TEMPLATE**: The data template to use for population
  - **AUTH_ADMIN_EMAIL**: The administrator user name for accessing the server. Defaults to `admin@alkem.io`.
  - **AUTH_ADMIN_PASSWORD**: The password for the administrator.

## Execute the population

Finally you should now be in a position to run the data population!

- Execute `npm install` - to ensure the dependencies in the project are installed
- Execute `npm run populate`

Now you can navigate the web client and see a sample populated Space - enjoy!

## Updating
The populator provides the ability to separately create / update the information on the following entities:

- Organization: execute `npm run populate-organizations`
- Space with subspaces: execute `npm run populate-context`

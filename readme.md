#tboc-date-import

## Setup

`npm install`

### Create import config

{
  "spaceId": <space id>,
  "managementToken": <management token>,
  "contentFile": "import.json"
}

### (Optional) Create export config
{
  "spaceId": <space id>,
  "managementToken": <management token>,
  "contentFile": "export.json"
}

## CSV Input

Add the desired dates in the root dir, emulating the structure of `example-dates.csv`.

## Using the package

1) Convert the CSV file to JSON:

`npm run build`

2) Import the JSON into Contentful

`npm run import`
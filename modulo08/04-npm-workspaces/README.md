# NPM Workspaces #

To create a package in the string-util workspace:
`npm init -w string-util -y --scope @iug122`

To install dependencies for the string-util workspace:
`npm i -D nodemon -w string-util`
`npm i -D c8 --workspaces`

To create the date-util workspace:
`npm init -w date-util -y --scope @iug122`

To install dependencies for the date-util workspace:
`npm i -D nodemon -w date-util`
`npm i -D c8 --workspaces`

To install the string-util package in the date-util workspace:
`npm i @iug122/string-util -w date-util`

To publish all packages:
`npm publish --workspaces`
Hello. This is app which consist of list of advisors from server.

## Client

The client uses react , typescript. I deliberately did not use additional libraries or ui frameworks. I think that a programmer should know how to make a project with a minimum of libraries.
For tests, jest and react testing library are used. The application uses the rest api. However, nothing prevents it from being converted to grapq ql if necessary.
This app use server side pagination.
It has simulate a delay in returning response through a network ,
Unlimited scrolling of advisors when user scrolls to the bottom of the page and Support IE11

## Server

The client uses react , typescript. I deliberately did not use additional libraries or ui frameworks. I think that a programmer should know how to make a project with a minimum of libraries.
For tests, jest and react testing library are used. The application uses the rest api. However, nothing prevents it from being converted to grapq ql if necessary.
The server uses node js with the express framework.
You can add a database later.
endpoint: /api/advisors/?language=english&online=true&sort=asc&page=1&pagesize=10
all query parameters are not obligatory
Filters by language,status,
sort by number of reviews
pagination

## Available Scripts

client:

### `cd client`

### `npm install`

### `npm start`

You also can run tests

### `npm test`

server:

### `cd client`

### `npm install`

### `npm start`

Timestamp Microservice
=========================

The first freeCodeCamp API Project for the Back-End curriculum. 

## User Stories

* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.

## How to use?

1. Visit [https://ahead-celsius.glitch.me/](https://ahead-celsius.glitch.me/)
2. Type a unix timestamp (seconds) in the address bar: `https://ahead-celsius.glitch.me/1451606400`  
3. OR type a natural language date in the address bar: `https://ahead-celsius.glitch.me/January 1, 2016`
4. You get both as output: `{ "unix": 1451606400, "natural": "January 1, 2016" }`
5. If you put invalid input, you will receive the output: `{ "unix": null, "natural": null}`

## Tech/Framwork
* NodeJS
* Express
* [moment.js](http://momentjs.com/)
* Glitch
* Github

## Problems/Solutions
### Problem
I was having an issue processing user input and got stuck.

### Solution
I visited the express.js API guide to read up on possible solutions. I looked at `app.param` but waas confused by the routing discussion. I searched online and found a tutorial about processing GET and POST paramters. See the `Credits` section for information. Thank you Chris Sevilleja, your tutorial helped me out. 

### Problem
When passing a unix timestamp in seconds, it was displaying an incorrect natural date.

### Solution
After a good night rest, I looked at the problem again in the morning. I figured out that my API
was expecting a different input than what I defined. I set to parse a unix timestamp in miliseconds, but it should of been for a unix timestamp in seconds. I refactored the code to format and display a unix timestamp in seconds and my issue was resolved.

## API Reference

[moment.js](https://momentjs.com/docs/)  
[Express.js 4.x](https://expressjs.com/en/4x/api.html)

## Credits
Chris Sevilleja [Use ExpressJS to Get URL and POST Parameters](https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters) @sevilayha 

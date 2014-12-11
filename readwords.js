/**
 * Created by Carl Iknaian on 12/10/2014.
 */
console.time("Time to complete");
var censor = require("censorify");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad and mad text."));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day."));
console.timeEnd("Time to complete");
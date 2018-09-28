var entities = require('./Entities');
var bb8 = require('./main');
var vermon = require('vermon');

vermon.setLogLevel('debug');
vermon.use(bb8);

var n = new entities.BB8Notifier('my BB8', 'D2:2E:2E:86:20:08');
//'E7:94:DC:54:AB:B7');
//'D2:2E:2E:86:20:08');
n.notify("Some text", undefined, { command: "roll", args: [180, 0]});

exports.notifier = n;
exports.bb8 = function(command, args){
  n.notify("Some text", undefined, { command: command, args: args});
}

console.log("Examples of commands:");
console.log("n.bb8('roll', [100, 120])");
console.log("n.bb8('color', ['magenta', 0])");


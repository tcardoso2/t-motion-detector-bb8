var entities = require('./Entities');
var bb8 = require('./main');
var vermon = require('vermon');

vermon.use(bb8);

var n = new entities.BB8Notifier('my BB8', 'E7:94:DC:54:AB:B7');
//'D2:2E:2E:86:20:08');
n.notify("Some text", undefined, { command: "roll", args: [150, 200]});


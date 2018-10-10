# vermon-bb8
A plugin for vermon for controlling the Sphero BB8 via BLE, based on sphero and noble packages.

Create a local.js file:
````
profiles = {
  default: {
    SystemEnvironment: {
      command: ""
    },
    Detector: {
      name: "Any vermon Detector"
    },
    BB8Notifier: {
      name: "My BB8",
      mac: "Your:BB8:mac:address"
    }
  }
}
exports.profiles = profiles;
exports.default = profiles.default;
````

Then just run:
````
let vermon = require("vermon");
let vermonBB8 = require("vermon-bb8");

vermon.use(vermonBB8);
vermon.configure();

vermon.watch().then((environment, detectors, notifiers)=>{
	console.log(`BB8 is watching environment ${environment.name}, will react when some change happens...`);
	let BB8Notifier = notifiers[0];
	BB8Notifier.command = "roll";
	BB8Notifier.args = [150, 200];
}).catch((e)=>{
	console.error(e);
});
````

* Version History  

 ** v 0.2.3: Fixes, added example;  
 ** v 0.2.2: Simplified extending Entities, updated dependency to vermon@0.6.6;  
 ** v 0.2.1: Updated dependency to vermon@0.6.5;  
 ** v 0.2.0: Updated to vermon library (WIP), using standard shpero dependency instead of cylon;  
 ** v 0.1.2: Added cylon packages as dependencies, added first Unit tests;  
 ** v 0.1.1: Added package.json and included t-motion-detector as dependency;  
 ** v 0.1.0: Initial version;  

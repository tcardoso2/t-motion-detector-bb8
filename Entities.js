//A specialized BB8 Notifier class which reacts by doing stuff the BB8 does so well, light, roll, etc..
var t = require('t-motion-detector');
var BaseNotifier = t.Entities.BaseNotifier;

//A BB8 Notifier which reacts (notifies) in many different ways
class BB8Notifier extends BaseNotifier{

  constructor(name, macAddress) {
    super(name);
    if(macAddress){
      this.macAddress = macAddress;
    } else {
      throw new Error("'address' is a required argument, which should contain the BB8 mac address.");
    }
  }
}

exports.BB8Notifier = BB8Notifier;
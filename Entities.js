//A specialized BB8 Notifier class which reacts by doing stuff the BB8 does so well, light, roll, etc..
var ent = require('vermon').Entities;
var sphero = require('sphero');
var BaseNotifier = ent.BaseNotifier;

//A BB8 Notifier which reacts (notifies) in many different ways
let _bb8NotiInstance;
class BB8Notifier extends BaseNotifier{

  constructor(name, macAddress) {
    super(name);
    if(macAddress){
      this.macAddress = macAddress;
      this.bb8 = sphero(macAddress);
      this.connect();
      _bb8NotiInstance = this;
    } else {
      throw new Error("'address' is a required argument, which should contain the BB8 mac address.");
    }
  }

  connect(){
    this.bb8.connect(function() {
      setInterval(this.handler(), 1000);
      //To remove
      this.notify();
    });
  }

  handler(){
    //var direction = Math.floor(Math.random() * 360);
    //_bb8NotiInstance.bb8.roll(150, direction);
    if(_bb8NotiInstance.command){
      console.log("New command exists!");
      try{
        _bb8NotiInstance.bb8["command"](..._bb8NotiInstance.args);
      } catch(e){
        console.error(`Error performing command: ${e}`);
      }
      _bb8NotiInstance.command = undefined; //Reset command
    }
  }

  notify(){
    super.notify();
    this.command = "roll";
    this.args = {  }
  }
}

exports.BB8Notifier = BB8Notifier;
//A specialized BB8 Notifier class which reacts by doing stuff the BB8 does so well, light, roll, etc..
var ent = require('vermon').Entities;
var filters = require('vermon').Filters;
var sphero = require('sphero');
var BaseNotifier = ent.BaseNotifier;
var BaseFilter = filters.BaseFilter;

//A BB8 Notifier which reacts (notifies) in many different ways
let _bb8NotiInstance;
class BB8Notifier extends BaseNotifier{

  constructor(name, macAddress) {
    super(name);
    if(macAddress){
      this.macAddress = macAddress;
      this.bb8 = sphero(macAddress);
      _bb8NotiInstance = this;
      this.connect();
    } else {
      throw new Error("'address' is a required argument, which should contain the BB8 mac address.");
    }
  }

  connect(){
    this.bb8.connect(function() {
      setInterval(_bb8NotiInstance.handler, 1000);
    });
  }

  handler(){
    if(_bb8NotiInstance.command){
      console.log(`New command exists! ${_bb8NotiInstance.command}(${_bb8NotiInstance.args})`);
      try{
        _bb8NotiInstance.bb8[_bb8NotiInstance.command](..._bb8NotiInstance.args);
      } catch(e){
        console.error(`Error performing command: ${e}`);
      }
      _bb8NotiInstance.command = undefined; //Reset command
      _bb8NotiInstance.args = {};
    }
  }

  notify(text, oldState, newState, environment, detector){
    super.notify(text, oldState, newState, environment, detector);
    this.command = newState.command;
    this.args = newState.args;
  }
}

//Transforms input states into BB8 commands, based on value to filter
class BB8Filter extends BaseFilter{

  constructor(val, applyTo, defaultCommand = { command: "roll", args: [100,100]}){
    super(val, applyTo);
    this.defaultCommand = defaultCommand;
  }

  filter(newState, env, detector){
    let resultState = this.defaultCommand;
    if(newState in this.valueToFilter[newState]){
      newState.command = this.valueToFilter[newState].command;
      newState.args = this.valueToFilter[newState].args;
    }
    return resultState;
  }
}

exports.BB8Notifier = BB8Notifier;
exports.BB8Filter = BB8Filter;

let BB8Notifier = require('./Entities').BB8Notifier;

exports.id = module.id;
exports.PreAddPlugin = (vermon, factory) => {
	//Extending Entities Factory
	factory.extend({BB8Notifier});
};
exports.PostAddPlugin = () => {};
exports.ShouldStart = () => {};
exports.Start = () => {};
let entities = require('./Entities');
BB8Notifier = entities.BB8Notifier;
BB8Filter = entities.BB8Filter;

exports.id = module.id;
exports.PreAddPlugin = (vermon, factory) => {
	//Extending Entities Factory
	factory.extend({BB8Notifier, BB8Filter});
};
exports.PostAddPlugin = () => {};
exports.ShouldStart = () => {};
exports.Start = () => {};
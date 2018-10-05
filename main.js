var vermon = require('vermon');

class Config extends vermon.Config {

	constructor()
	{
		super();
		//FIXME: This is not ideal, I had to repeat the local binding because 
		//       it was defaulting to the parent one, will check for an improvement 
		//       later
		try{
          this.file = require('./local.js');
        } catch (e)
        {
          this.file = require('./config.js');
        }
	}

	bB8Address()
	{
		return "xxx";
	}
}

exports.Config = Config;
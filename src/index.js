const { Client } = require('discord.js');

class DiscordBot extends Client {
	constructor() {
		super();
	}

	async init() {
		await this.login()
			.then(() => console.log("LOGGED IN"))
			.catch((error) => console.log(error))
	}

	login(token = process.env.TOKEN) {
		return super.login(token);
	}

}

module.exports = DiscordBot
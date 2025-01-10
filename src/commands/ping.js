const discord = require("discord.js");

module.exports = {
	data: new discord.SlashCommandBuilder()
		.setName("ping")
		.setDescription("Pong!")
		.setDefaultMemberPermissions(discord.PermissionFlagsBits.ManageGuild),
	async execute(interaction) {
		interaction.reply({ content: "Pong!" })
	},
};

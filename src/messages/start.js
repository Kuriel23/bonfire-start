const discord = require("discord.js");

module.exports = async (client, message) => {
	message.delete();
	const button0 = new discord.ButtonBuilder()
		.setCustomId("regras")
		.setLabel("Regras")
		.setStyle(discord.ButtonStyle.Success);
	const button1 = new discord.ButtonBuilder()
		.setLabel("Dúvidas frequentes")
		.setURL("https://bonfire-6.gitbook.io/bonfire/basics/markdown")
		.setStyle(discord.ButtonStyle.Link);
	const button2 = new discord.ButtonBuilder()
		.setLabel("Seja um apoiador!")
		.setURL(
			"https://discord.com/channels/1321248780783325205/1321296065559007343",
		)
		.setStyle(discord.ButtonStyle.Link);
	const row = new discord.ActionRowBuilder().addComponents(
		button0,
		button1,
		button2,
	);
	const embed = new discord.EmbedBuilder()
		.setColor("#2b2d31")
		.setTitle(
			"Boas-vindas ao servidor Bonfire <:verificado:1326972763633750016>",
		)
		.setDescription(
			"Um ambiente aconchegante e saudável para os usuários do Discord. Aqui, você encontrará pessoas para conversar e jogar a qualquer horário do dia, além de ter a chance de concorrer a prêmios apenas por participar da comunidade.\n\nCaso queira chamar algum amigo para desfrutrar do servidor, utilize este convite permanente https://discord.gg/bonfire",
		)
		.setImage("https://i.imgur.com/p1rCRcW.png");
	client.channels.cache.get("1321248781697810564").send({
		content:
			"||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ https://discord.gg/bonfire",
		embeds: [embed],
		components: [row],
	});
};

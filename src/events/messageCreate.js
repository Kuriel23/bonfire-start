module.exports = async (client, message) => {
	if (message.author.bot) return;

	if (
		message.content.startsWith("b?") &&
		message.author.id === "354233941550694400"
	)
		require(`../messages/${message.content.replace("b?", "")}`)(
			client,
			message,
		).catch((err) => {
			return message.reply(err);
		});
};

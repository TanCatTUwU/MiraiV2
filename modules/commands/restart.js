module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Khởi Động Lại Bot.",
	commandCategory: "Admin bot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("⚡️ Bắt đầu quá trình khởi động lại ⚡️\n🦄 Vui lòng chờ 30s 🦄",event.threadID, () =>process.exit(1))
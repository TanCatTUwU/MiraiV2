  module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.3",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`⟬ ${global.config.PREFIX} ⟭ ⪼ ${(!global.config.BOTNAME) ? "Bot của NekOwO" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`Chào các bạn, tôi là bot của NekOwO\n\n●▬▬▬▬▬▬▬▬▬▬●\nLuật box, và bot:\nHạn chế spam, tag hoặc ăn kick ^-^\n●▬▬▬▬▬▬▬▬▬▬●
\n❛━━･❪ 𝑷𝒓𝒆𝒇𝒊𝒙 [ . ]❫･━━❜\nNhập .ad sẽ có thông tin của admin box\nMọi thắc mặc liên hệ admin https://facebook.com/Neko.Loli.VN\n⚜Admin box chat có thể dùng .help rule để xem hướng dẫn chỉnh luật box chat\n⚜Thành viên thì dùng .rule để xem luật\n◆━━━━━━━━━━━━━◆\nBot edited by NekOwO aka (also known as) TanCatT_UwU\n© NekOwO`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `join.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.allUserID.push(id);
					logger(global.getText("handleCreateDatabase", "newUser", id), "DATABASE");
				}
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "Yo {name}.\n Chào mừng {type} đã đến với box {threadName}.\nVà giờ {type} sẽ là thành viên thứ {soThanhVien} của box {threadName}\nKhi vào bạn hãy dùng .rule để xem luật box nhé \n◆━━━━━━━━━━━━━◆\n (𝕥𝕣𝕦̛̀ 𝕜𝕙𝕚 𝕢𝕥𝕧 𝕤𝕖𝕥 𝕝𝕦𝕒̣̂𝕥 𝕥𝕙𝕚̀ 𝕞𝕠̛́𝕚 𝕔𝕠́ 𝕟𝕙𝕖́)\nPhạm luật ăn kick nghe chưa ^-^" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'cậu' : 'cậu')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
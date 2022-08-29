/*
@credit ⚡️Nek0w0
@vui lòng không chỉnh sửa credit
*/
module.exports.config = {
    name: "working",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "⚡Nek0w0", 
    description: "Làm việc để có tiền, có làm thì mới có ăn",
    commandCategory: "Economy",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    }
};
module.exports.languages = {
    "vi": {
        "cooldown": "🦄💜Hãy quay lại sau: %1 phút %2 giây."      
    },
    "en": {
        "cooldown": "⚡️You're done, come back later: %1 minute(s) %2 second(s)."
    }
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};
//random coins nhận được khi làm việc ít nhất 200
var coinscn = Math.floor(Math.random() * 15700) + 2000; //random coins khi làm ở khu công nghiệp
var coinsdv = Math.floor(Math.random() * 17300) + 2000; //random coins khi làm ở khu dịch vụ
var coinsmd = Math.floor(Math.random() * 10070) + 2000; //random coins khi làm ở mỏ dầu
var coinsq = Math.floor(Math.random() * 7270) + 2000; //random coins khi khai thác quặng
var coinsdd = Math.floor(Math.random() * 18830) + 2000; //random coins khi đào đá
var coinsdd1 = Math.floor(Math.random() * 12080) + 2000; //random coins khi ăn xin

//random công việc cần làm
var rdcn = ['tuyển dụng nhân viên', 'quản lý khách sạn', 'tại nhà máy điện', 'đầu bếp tại nhà hàng', 'công nhân tại xưởng sản xuất sex toy', 'phụ hồ', 'nhân viên văn phòng', 'nông dân làm ruộng', 'ngư dân câu cá', 'thợ làm đồ thủ công', 'thợ làm đồ thủ công nhưng phèn hơn']; //random công việc khi làm ở khu công nghiệp
var work1 = rdcn[Math.floor(Math.random() * rdcn.length)];   

var rddv = ['thở sửa ống nước may mắn', 'sửa điều hoà cho chị hàng xóm', 'bú cu đa cấp', 'bán hàng đa cấp', 'phát tờ rơi', 'shipper', 'sửa máy tính cho bác hàng xóm may mắn', 'hướng dẫn viên du lịch', 'cho con bú', 'bảo mẫu trông trẻ', 'chăm sóc khách hàng', 'đòi nợ thuê', 'phò', 'xe ôm', 'diễn viên quần chúng', 'bảo kê cho đại ca', 'lao công', 'quét rác', 'sửa máy tính cho chị hàng xóm', 'quét dọn phòng cho một thằng wibu']; //random công việc khi làm ở khu dịch vụ
var work2 = rddv[Math.floor(Math.random() * rddv.length)]; 

var rdmd = ['kiếm được 1 thùng dầu', 'kiếm được 2 thùng dầu', 'kiếm được 3 thùng dầu', 'kiếm được 4 thùng dầu', 'kiếm được 5 thùng dầu', 'kiếm được 6 thùng dầu', 'kiếm được 7 thùng dầu', 'kiếm được 8 thùng dầu', 'kiếm được 9 thùng dầu', 'kiếm được 10 thùng dầu', 'kiếm được 11 thùng dầu', 'kiếm được 12 thùng dầu', 'kiếm được 13 thùng dầu', 'kiếm được 14 thùng dầu', 'kiếm được 15 thùng dầu', 'kiếm được 16 thùng dầu', 'cướp dầu', 'lấy nước đổ vô dầu rồi bán']; //random công việc khi làm ở mỏ dầu
var work3 = rdmd[Math.floor(Math.random() * rdmd.length)]; 

var rdq = ['sắt', 'vàng', 'than', 'chì', 'đồng', 'dầu', 'bạc', 'mangan', 'bạch kim', 'ruteni', 'reni', 'ruteni']; //random công việc khi khai thác quặng
var work4 = rdq[Math.floor(Math.random() * rdq.length)]; 

var rddd = ['Kim cương', 'vàng', 'than', 'ngọc lục bảo', 'sắt', 'đá bình thường', 'lưu ly', 'iridium', 'indi', 'bạc', 'Rhodium']; //random công việc khi đào đá
var work5 = rddd[Math.floor(Math.random() * rddd.length)]; 

var rddd1 = ['chủ quán bún bò', 'đại ca', 'nhân viên tiệm trà sữa', 'chủ quán cơm', 'cô bán trà đá', 'anh bán vé số', 'người ăn xin khác', 'thằng nhóc 12 tuổi', 'anh thợ cắt tóc', 'đồng nghiệp', 'chú thợ sửa điện', 'giang hồ', 'giang hồ mõm', 'thằng nghiện', 'Triệu Quân Sự vừa trốn trại', 'mẹ bạn', 'bố bạn', 'cướp', 'fuck boy', 'trap girl', 'vozer', 'wibu']; //random công việc khi ăn xin
var work6 = rddd1[Math.floor(Math.random() * rddd1.length)];


var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `🦄💜Bạn làm ${work1} ở khu công nghiệp và kiếm được ${coinscn}$` ;await Currencies.increaseMoney(event.senderID, parseInt(coinscn)); break;             
                case "2": msg = `🦄💜Bạn làm việc ${work2} ở khu dịch vụ và kiếm được ${coinsdv}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsdv)); break;
                case "3": msg = `🦄💜Bạn ${work3} tại khu mỏ dầu và bán đi rồi được ${coinsmd}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsmd)); break;
                case "4": msg = `🦄💜Bạn đào được ${work4} và thu về ${coinsq}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsq)); break;
                case "5": msg = `🦄💜Bạn đào ra ${work5} và nhận về ${coinsdd}$` ; await Currencies.increaseMoney(event.senderID, parseInt(coinsdd)); break;
                case "6": msg = `🦄💜Bạn đi ăn xin được ${work6} cho ${coinsdd1}$ `; await Currencies.increaseMoney(event.senderID, parseInt(coinsdd1)); break;
                case "7": msg = "🦄💜𝑪𝒉𝒖̛𝒂 𝒖𝒑𝒅𝒂𝒕𝒆..."; break; //thêm case nếu muốn 
                default: break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("🦄Vui lòng nhập một con số (1-6)", event.threadID, event.messageID);
            if (choose > 7 || choose < 1) return api.sendMessage("🦄Số bạn vừa nhập không có trong danh sách.", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "🦄💜Chưa update....") {
                msg = "🦄💜Coming soon....";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    //cooldownTime cho mỗi lần nhận 
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
    return api.sendMessage("🦄Đơn giản là làm việc🦄" +
                "\n\n1. Khu công nghiệp." +
                "\n2. Khu dịch vụ." +
                "\n3. Khu khai thác dầu" +
                "\n4. Khai thác quặng." +
                "\n5. Đập đá." +
                "\n6. Ăn xin." +
                "\n7. 𝑼𝒑𝒅𝒂𝒕𝒆 𝒔𝒐𝒐𝒏..." +
                "\n\n🦄💜Hãy rep tin nhắn và chọn số" //thêm hiển thị case tại đây ||  \n[number]. [Ngành nghề]" +
            , event.threadID, (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        })
    }
}

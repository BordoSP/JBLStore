var http = require('http');
var static = require('node-static');
var file = new static.Server();

var TelegramBot = require('node-telegram-bot-api');
var token = "501714885:AAF5aZil_ctUlMb1EFndRWtHfyp81ci38ag";
var bot = new TelegramBot(token, {polling: true});
var id = 355555637;

var counter = 0;

http.createServer(function(req, res) {
    file.serve(request, response);
      req.on('data', function (data) {
        var readyData = JSON.parse(data);
        var string = "Заказ №" + ++counter + "\n" + "Имя: " + readyData.name + "\n" + "Email: " + readyData.email + "\n" + "Телефон: " + readyData.telephone;
        bot.sendMessage(id, string);   
      });
}).listen(process.env.PORT || 3000);
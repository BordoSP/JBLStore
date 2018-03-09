var static = require('node-static');
var file = new static.Server();

var TelegramBot = require('node-telegram-bot-api');
var token = "token";
var bot = new TelegramBot(token, {polling: true});
var id = chat id;

var counter = 0;

require('http').createServer(function(request, response) {
    file.serve(request, response);
      request.on('data', function (data) {
        var readyData = JSON.parse(data);
        var string = "Заказ №" + ++counter + "\n" + "Имя: " + readyData.name + "\n" + "Email: " + readyData.email + "\n" + "Телефон: " + readyData.telephone;
        bot.sendMessage(id, string);   
      });

}).listen(process.env.PORT || 80);




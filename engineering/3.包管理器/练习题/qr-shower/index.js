var QRCode = require("qrcode");

QRCode.toString("I am a pony!", { type: "terminal" }, function (err, data) {
  console.log(data);
});

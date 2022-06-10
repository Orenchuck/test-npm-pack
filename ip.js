exports.getIpInfo = function() {
  var os = require('os');
  var ifaces = os.networkInterfaces();
  if (ifaces['Wi-Fi'][1].address) {
    return ifaces['Wi-Fi'][1].address;
  }
  return '0.0.0.0';
}

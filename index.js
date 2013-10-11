var snmpServer = require("node-snmp-server");

snmpServer.loadFile("example.snmpwalk");

snmpServer.events.on("listening", function () {

    console.log("loaded");

});
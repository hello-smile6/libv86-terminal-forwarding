Terminal.applyAddon(fullscreen)
var term=new Terminal();
Terminal.applyAddon(fullscreen);
term.open(document.body);
term.toggleFullScreen();
var address;
if(window.location.hash=="") {
    var address=prompt("Server address");
}
else {
    var address=window.location.hash;
}
const b=new Bugout(address);
b.on("message",function(address,message) {
    term.write(message);
});
term.on('key', key => b.rpc("key",key,function() {}));
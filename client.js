Terminal.applyAddon(fullscreen)
var term=new Terminal();
Terminal.applyAddon(fullscreen);
term.open(document.body);
term.toggleFullScreen();
const b=new Bugout(prompt("Server address"));
b.on("message",function(address,message) {
    term.write(message);
});
term.on('key', key => b.rpc("key",key,function() {}));
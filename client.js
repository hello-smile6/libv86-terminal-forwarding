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
const b=new Bugout(address,{announce: ["wss://p2p-tracker.9pfs.repl.co/","wss://p2p-tracker.glitch.me/"]});
b.on("message",function(address,message) {
    term.write(atob(message));
});
term.on('key', key => b.rpc("key",btoa(key),function() {}));

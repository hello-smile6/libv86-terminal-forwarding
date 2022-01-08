const emulator=new V86Starter({
    wasm_path: "https://cors-anywhere.9pfs.repl.co/copy.sh/v86/build/v86.wasm",
    cdrom: {
        url: "https://cors-anywhere.9pfs.repl.co/k.copy.sh/linux3.iso"
    },
    vga_bios: {
        url: "https://cors-anywhere.9pfs.repl.co/copy.sh/v86/bios/vgabios.bin"
    },
    bios: {
        url: "https://cors-anywhere.9pfs.repl.co/copy.sh/v86/bios/seabios.bin"
    },
    autostart: true,
    disable_keyboard: true,
    screen_container: document.getElementById("screen"),
    networking_relay_url: "wss://relay.widgetry.org/",
});
var term=new Terminal();
Terminal.loadAddon(fullscreen);
term.open(document.getElementById("terminal"));
const b=new Bugout();
b.on("seen",function() {})
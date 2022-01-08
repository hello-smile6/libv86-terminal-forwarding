const emulator=new V86Starter({
    wasm_path: "https://cors-anywhere.9pfs.repl.co/copy.sh/v86/build/v86.wasm",
    cdrom: {
        url: "https://cors-anywhere.9pfs.repl.co/k.copy.sh/linux3.iso"
    }
})
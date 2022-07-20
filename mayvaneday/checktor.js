/*
Tor2web blocking script
written by Vane Vander <https://mayvaneday.org>
released under MIT License
*/

let text = window.location.href;
let pet = text.includes("onion.pet");
let ws = text.includes("onion.ws");
let search = text.includes("onionsearchengine.com");
let cyber = text.includes("cyber-hub.pw");
let ly = text.includes("onion.ly");
let moe = text.includes("onion.moe");
let web = text.includes("darknet2web.com");
let gate = text.includes("torgateway.com");
let i2p = text.includes("i2p.mk16.de");
let i2p2 = text.includes("i2phides.me");
let nl = text.includes("tor2web.nl");
if ((pet === true) || (nl === true) || (i2p === true) || (ws === true) || (gate === true) || (search === true) || (i2p2 === true) || (cyber === true) || (ly === true) || (web === true) || (moe === true)) {
    window.location.replace("https://theannoyingsite.com");
}

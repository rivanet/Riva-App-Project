import { requestAppGet } from "./LauncherIpcService";

export function openUrl(url) {
    requestAppGet("shell/open", {
        "url": url
    })
}
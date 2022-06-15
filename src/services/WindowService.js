import { requestAppGet } from "./LauncherIpcService";

export function windowClose() {
    return requestAppGet("/window/close", null);
}

export function windowMinimize() {
    return requestAppGet("/window/minimize", null);
}
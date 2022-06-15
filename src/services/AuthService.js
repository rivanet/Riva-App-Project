import { requestAppGet } from "./LauncherIpcService";

/*
    rivaAuthLogin(id, password)
    login with riva account
    return value: Promise<object>
    {
        result: true|false,
        error: "error messages",
        user: 
        {
            username: "username",
            permission: "permission"
        }
    }

    'permission' can be:
        "Oyuncu",
        "Yönetici",
        "Moderatör",
        "Yardımcı",
        "Asistan",
        "Destek",
        "RVIP+",
        "RVIP",
        "MVIP+",
        "MVIP",
        "VIP+",
        "VIP",
        "YouTuber"

    'error' property is set when 'result' property is 'false'
    it tells user why the login failed. (ex: wrong password, no internet connection, server is down, etc)

    rivaAuthLogout
    logout riva account and remove account information from cache
*/

export function rivaAuthLogin(id, password) {
    return requestAppGet("/riva/auth/login", {
        "id": id,
        "password": password
    })
}

export function rivaAuthLogout() {
    return requestAppGet("/riva/auth/logout", null)
}

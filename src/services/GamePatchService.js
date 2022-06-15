import { requestAppGet } from "./LauncherIpcService";

/* 
    gamePatchStart()
    Start game patch
    return value: true|false

    If the launcher successfully started the task, it returns true
    if the launcher has already started patching, it returns false. check game status (gamePatchStatus) if this function returns false
    Since this operation is executed asynchronously, the value is returned immediately upon invocation.

    gamePatchStatus()
    Get game patch status and progress
    return value: Promise<object>
    {
        status: "idle"|"patch"|"done"|"error",
        progress:
        {
            fileName: "filename",
            fileType: "filetype",
    
            totalFileCount: 123,
            progressedFileCount: 10,
    
            percentage: 100
        },
        error: "error message"
    }
    
    if 'status' is 'error', 'error' property will be set
*/

export function gamePatchStart() {
    return requestAppGet("/game/patch/start", null)
}

export function gamePatchStatus() {
    return requestAppGet("/game/patch/status", null)
}
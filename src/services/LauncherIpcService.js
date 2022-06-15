export function requestApp(req)
{
    return new Promise((resolve, reject) => {
        window.cefQuery({
            request: req,
            persistent: false,
            onSuccess: (res) => {
                var jsonData = JSON.parse(res);
                if (jsonData.ReadyState === 4 && jsonData.Status === 200)
                    resolve(jsonData.Data);
                else
                    reject(jsonData);
            },
            onFailure: (errCode, errMessage) => {
                reject({
                    errorCode: errCode,
                    errorMessage: errMessage
                })
            }
        });
    });
}

export function requestAppGet(path, params)
{
    const req = JSON.stringify({
        "url": path,
        "parameters": params,
        "postData": null
    });
    return requestApp(req);
}

export function _debugMessage(msg)
{
    return requestAppGet("/debug/log", {
        "message": msg
    })
}
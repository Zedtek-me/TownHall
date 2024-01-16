export const wsFactory = ()=>{
    let ws = new WebSocket(`${window.location.protocol == "https" ? "wss" : "ws"}://${window.location.hostname}:9000/chat/`)
    console.log("websocket object..: ", ws)
    return ws
}
export const wsFactory = ()=>{
    let ws = new WebSocket(`${window.location.protocol == "https" ? "wss" : "ws"}://${window.location.hostname}:9000/chat/`)
    return ws
}


export const getUser = async (id)=>{
    let response = await fetch(`http://localhost:9000/get_user/${id}`)
    let data = await response.json()
    return data
}

export const getMessages = async (type, typeId, localUserId)=>{
    //gets the type messages of a user, either for group or for one on one.
    let response = await fetch(`http://localhost:9000/get_messages`, {
        method:'POST',
        data: JSON.stringify({
            message_type:type,
            type_id:typeId,
            user_id:localUserId
        }),
        headers:{
            "Content-Type":"Application/json"
        }
    })
    let data = await response.json()
    return data
}

export const createChildElementOnMessage = (element)=>{
    const locaChatContainer = null
    const childElement = `
        <div className="remoteMessage">remote message here</div>
    `
}
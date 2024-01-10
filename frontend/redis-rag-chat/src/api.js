export const SendMessage = async function(message, chatId){
    const responseMessage = await fetch(`${process.env.REACT_APP_BACKEND_URI}/chat/${chatId}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt:message
        })
    });

    return responseMessage.json();
}

export const StartChat = async function(){
    const responseMessage = await fetch(`${process.env.REACT_APP_BACKEND_URI}/chat/startChat`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'    
    })       
    return responseMessage.json();
}
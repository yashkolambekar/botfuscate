import Chat from "../models/Chat";

const saveOrUpdateChat = async (body : {
    id: Number,
}) => {

    const chatObject = constructChatObject(body);
    
    const chat = await Chat.findOne({"id" : chatObject.id});
    
    if(!chat){
        Chat.create(chatObject).then((res) => {
            console.log("created");
        }).catch((err) => {
            console.error(err);
        })
    }
}

const constructChatObject = (body: any) => {
    let object: {
        name: String | void,
        id: Number| void,
        username: String | void
    } = {
        name: "",
        id: 0,
        username: ""
    };
    if(body.first_name){
        object.name = body.first_name;
    }else{
        object.name = body.title
    }
    object.id = body.id;
    if(body.username){
        object.username = body.username;
    }
    return object;
}

const getAllChats = async () => {
    const allChats = await Chat.find({});
    console.log(allChats);
    return allChats;
}

export {saveOrUpdateChat, getAllChats};
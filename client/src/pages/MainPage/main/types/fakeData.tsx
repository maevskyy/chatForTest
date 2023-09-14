export type TfakeMessage = {
    id: string,
    text: string,
    time: string,
    isOwnMessage: boolean,
    isReadMessage: boolean,
    isLikedMessage: boolean,
}

export type TfakePersonData = {
    id: string,
    name: string,
    img: string,
    lastOnline: string,
}
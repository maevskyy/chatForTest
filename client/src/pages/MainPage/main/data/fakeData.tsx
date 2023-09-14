import { TfakeMessage, TfakePersonData} from "../types/fakeData.tsx";

export const fakePersonData: TfakePersonData = {
    id: '1',
    name: 'Zelensky',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Volodymyr_Zelensky_Official_portrait.jpg',
    lastOnline: 'last seen 5 mins ago',
};

export const fakeMessages: TfakeMessage[] = [
    {
        id: '1',
        text: 'OMG 😲 do you remember what you did last night at the work night out?',
        time: '15:34',
        isOwnMessage: true,
        isReadMessage: true,
        isLikedMessage: true,
    },

    {
        id: '2',
        text: 'OMG 😲 do you remember what you did last night at the work night out?',
        time: '15:44',
        isOwnMessage: false,
        isReadMessage: true,
        isLikedMessage: true,
    },

    {
        id: '3',
        text: 'OMG 😲 do you remember what you did last night at the work night out?',
        time: '15:52',
        isOwnMessage: true,
        isReadMessage: false,
        isLikedMessage: false,
    },

    {
        id: '4',
        text: 'OMG 😲 do you remember what you did last night at the work night out?',
        time: '15:59',
        isOwnMessage: false,
        isReadMessage: false,
        isLikedMessage: true,
    },

]
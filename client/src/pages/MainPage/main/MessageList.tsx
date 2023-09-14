import { fakeMessages} from "./data/fakeData.tsx";
import {TfakeMessage} from "./types/fakeData.tsx";
import Message from "./Message.tsx";

type Props = {};

export const MessageList = (props: Props) => {
    return (
        <ul className={'gap-[25px] flex flex-col'}>
            { fakeMessages.map((m: TfakeMessage) => (
                <Message info={m}/>
            ))}
        </ul>
    )
}
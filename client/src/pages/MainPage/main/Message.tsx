import {AiFillHeart} from 'react-icons/ai'
import {BsCheck2} from 'react-icons/bs'
import {BsCheck2All} from 'react-icons/bs'
import {TfakeMessage} from "./types/fakeData.tsx";

type Props = {
    info: TfakeMessage
};

const Message = ({ info }: Props) => {
    const { text, time, isLikedMessage, isReadMessage, isOwnMessage} = info;

    return (
        <div className={`flex flex-row ${isOwnMessage ? 'justify-start' : 'justify-end'}`}>
            <div className={`flex flex-col ${isOwnMessage ? 'bg-white' : 'bg-green'} p-[20px] rounded-[12px]`}>
                <span className={'text-[18px]'}>{text}</span>
                <div className={'flex flex-row justify-end items-center gap-[3px]'}>
                    {isLikedMessage && <AiFillHeart className={'text-red text-[16px]'}/>}
                    <span className={`${isOwnMessage ? '' : 'text-white'} flex flex-row items-center gap-[3px]`}>
                        {time} {isReadMessage ? <BsCheck2All className={'text-navy text-[20px]'}/> : <BsCheck2 className={'text-[20px]'}/>}
                    </span>

                </div>
            </div>
        </div>
    )
};

export default Message;
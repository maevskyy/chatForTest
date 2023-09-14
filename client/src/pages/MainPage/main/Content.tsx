import {BiSolidSend} from 'react-icons/bi'
import {FaRegFaceSmile} from 'react-icons/fa6'
import {MessageList} from "./MessageList.tsx";

type Props = {};

const Content = (props: Props) => {

    return (
        <main className={'flex flex-col justify-between px-[10%] pt-[10%] pb-[3%] h-screen'}>
            <MessageList/>
            <div className="flex flex-row items-center gap-[30px] h-[70px] px-[25px] bg-white rounded-[12px]">
                <FaRegFaceSmile className={'text-navy text-[40px] cursor-pointer'}/>
                <input
                    className="block w-full text-2xl h-full outline-0"
                    placeholder="Message" type="text" name="send-message"/>
                <BiSolidSend className={'text-blue text-[40px] cursor-pointer'}/>
            </div>
        </main>
    )
};

export default Content;
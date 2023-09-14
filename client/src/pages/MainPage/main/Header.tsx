import {AiOutlineSearch} from 'react-icons/ai'
import {FaPhoneAlt} from 'react-icons/fa'
import {CiMenuKebab} from 'react-icons/ci'
import {TfakePersonData} from "./types/fakeData.tsx";

type Props = {
    info: TfakePersonData
};

const Header = ({ info }: Props) => {
    const { name, img, lastOnline } = info;

    return (
        <header className={'flex h-[90px] bg-white flex-row items-center px-[20px] justify-between gap-[30px]'}>
            <section className={'flex h-[100%] w-[270px] items-center flex-row gap-[20px]'}>
                <div className={'w-[25%]'}>
                    <div className={'pt-[100%] w-[100%] relative'} >
                        <img className={'h-[100%] w-[100%] absolute top-0 left-0 object-cover rounded-[50%] cursor-pointer'}
                             src={img}/>
                    </div>
                </div>
                <div className={'flex flex-col h-[60%] justify-between'}>
                    <span className={'font-semibold text-[24px] leading-5 '}>{name}</span>
                    <span className={'font-normal text-[18px] text-navy leading-[18px]'}>{lastOnline}</span>
                </div>
            </section>
            <section className={'flex flex-row gap-[30px]'}>
                <AiOutlineSearch className={'text-[32px] text-navy cursor-pointer'}/>
                <FaPhoneAlt className={'text-[30px] text-navy cursor-pointer'}/>
                <CiMenuKebab className={'text-[32px] text-navy cursor-pointer'}/>
            </section>
        </header>
    )
};

export default Header;
import {AiOutlineSearch} from 'react-icons/ai'
import {FaPhoneAlt} from 'react-icons/fa'
import {CiMenuKebab} from 'react-icons/ci'

type Props = {};

const Header = (props: Props) => {
    return (
        <header className={'flex h-[56px] bg-white flex-row items-center px-[20px] justify-end gap-[30px]'}>
            <img className={'h-[40px] w-[40px] object-cover'} src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Volodymyr_Zelensky_Official_portrait.jpg" />
            <div className={''}>
                <span className={'font-semibold text-[16px] leading-5'}>Zelensky</span>
                <span className={'font-normal text-[14px] leading-[18px]'}>last seen 5 mins ago</span>
            </div>
            <AiOutlineSearch className={'text-[32px] text-navy'}/>
            <FaPhoneAlt className={'text-[30px] text-navy'}/>
            <CiMenuKebab className={'text-[32px] text-navy'}/>

        </header>
    )
};

export default Header;
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {};

const Header = (props: Props) => {
	return (
		<div className='px-4 py-2 flex items-center justify-between border-r w-full'>
			<RxHamburgerMenu className='text-[24px]' />
			<div className='flex gap-4 px-4 py-2 bg-[#F5F5F5] rounded-[22px] w-[80%]'>
				<AiOutlineSearch className='text-[24px]' />
				<input
					type='text'
					className=' outline-none bg-[#F5F5F5] w-[85%]'
          placeholder='Search'
				/>
			</div>
		</div>
	);
};

export default Header;

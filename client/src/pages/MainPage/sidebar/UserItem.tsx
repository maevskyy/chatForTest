import { TfakeData } from './types/fakeData';
import { FaCircleUser } from 'react-icons/fa6';
type Props = {
	info: TfakeData;
};

const UserItem = ({ info }: Props) => {
	const { img, name, lastMessage, unreadMessage } = info;

	return (
		<div className='flex justify-between px-4 py-3 items-center'>
			<div className='flex gap-4 items-center'>
				{img ? (
					<img
						src={img}
						alt='User image'
						className='w-[48px] h-[48px] rounded-full border object-cover'
					/>
				) : (
					<FaCircleUser className='text-[48px]'/>
				)}

				<div className='flex flex-col justify-between'>
					<h5 className='text-black font-semibold'>{name}</h5>
					<p className='text-sm text-navy'>{lastMessage}</p>
				</div>
			</div>
			<div className='flex flex-col gap-[7px] items-end'>
				<p className=' text-xs text-navy'>{info.time}</p>
				<div
					className={`${
						unreadMessage > 0 ? 'block' : 'invisible'
					} rounded-full w-4 h-4 flex items-center justify-center bg-green`}
				>
					<span className='text-xs text-white'>{unreadMessage}</span>
				</div>
			</div>
		</div>
	);
};

export default UserItem;

import { useState } from 'react';
import UserItem from './UserItem';
import { fakeDATA } from './data/fakeData';
type Props = {};
const UserList = (props: Props) => {
	const [error, setError] = useState(false);

	return (
		<section>
			{error ? (
				<h1>У тебя нету друзей.</h1>
			) : (
				<>
					{fakeDATA.map((user) => (
						<UserItem
							key={user.id}
							info={user}
						/>
					))}
				</>
			)}
		</section>
	);
};

export default UserList;

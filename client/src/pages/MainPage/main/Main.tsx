import Header from "./Header.tsx";
import Content from "./Content.tsx";
import {fakePersonData} from "./data/fakeData.tsx";

type Props = {};

const Main = (props: Props) => {
	return (
		<main className={` h-screen w-9/12 bg-blue flex flex-col `}>
			<Header info={fakePersonData}/>
			<Content/>
		</main>
	);
};

export default Main;

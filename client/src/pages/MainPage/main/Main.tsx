import Header from "./header/Header.tsx";
import Content from "./content/Content.tsx";

type Props = {};

const Main = (props: Props) => {
	return (
		<main className={` h-screen w-screen bg-amber-100`}>
			<Header/>
			<Content/>
		</main>
	);
};

export default Main;

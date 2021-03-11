import Header from "../compnents/Header";
import Card from "../compnents/Card";
function Home() {
	return (
		<div>
			<Header></Header>
			<div className="container">
				<div className="row py-3">
					<div className="my-2 col-12">
						<h2>New feature</h2>
					</div>
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}

export default Home;

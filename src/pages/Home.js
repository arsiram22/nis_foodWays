import Header from "../compnents/Header";
import { CardNearyou, CardPopular } from "../compnents/Card";
import { restaurants } from "../compnents/Data";
// import Dropdowns from "../compnents/Dropdowns";
function Home() {
	return (
		<div>
			<Header />
			<div className="container">
				{/* <Dropdown /> */}
				<div className="row py-3">
					<div className="my-2 col-12">
						<h2>Popular Restaurant</h2>
					</div>
					{restaurants.map((data) => {
						if (data.popular === true) {
							return <CardPopular data={data} key={data.id} />;
						}
					})}
				</div>
				<div className="row py-3">
					<div className="my-2 col-12">
						<h2>Restaurant Near You</h2>
					</div>
					{restaurants.map((data) => {
						if (data.popular === false) {
							return <CardNearyou data={data} key={data.id} />;
						}
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;

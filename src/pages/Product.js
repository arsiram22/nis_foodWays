import { useContext } from "react";
import { KeranjangContext } from "../contexts/keranjangContext";

import { Card } from "../compnents/Card";
import { products } from "../compnents/Data";

function Product() {
	const [state, dispatch] = useContext(KeranjangContext);

	const addProductToCart = (data) => {
		dispatch({
			type: "ADD_CART",
			payload: data,
		});
	};
	// console.log("login", state);
	return (
		<div>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom">
					<div className="my-2 col-12 ">
						<h2>Menu</h2>
					</div>
					<div className="row">
						{products.map((product) => (
							<div className="col-sm-3">
								<Card
									product={product}
									key={product.id}
									fromProduct={true}
									addProductToCart={addProductToCart}
								/>
							</div>
						))}
					</div>
				</div>
				{/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
			</div>
		</div>
	);
}

export default Product;

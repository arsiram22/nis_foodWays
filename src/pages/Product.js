import { CardProduct } from "../compnents/Card";
import { products } from "../compnents/Data";
function Product() {
	return (
		<div>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom">
					<div className="my-2 col-12 ">
						<h2>Menu</h2>
					</div>
					{products.map((data) => {
						if (data.partnerid === 1) {
							return <CardProduct data={data} key={data.id} />;
						}
					})}
				</div>
			</div>
		</div>
	);
}

export default Product;

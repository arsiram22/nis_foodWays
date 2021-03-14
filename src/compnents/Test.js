import { useHistory } from "react-router-dom";

const Card = ({ product, fromProduct, addProductToCart }) => {
	const history = useHistory();

	const { id, name, logo, price } = product;

	return (
		<div className="mb-3 card">
			<div className="py-2 px-2">
				<img
					src={logo}
					alt={name}
					style={{
						height: "140px",
						objectFit: "cover",
						width: "100%",
					}}
				/>
			</div>
			<div className="card-body ">
				<div
					style={{
						height: "60px",
					}}
				>
					<h5
						style={{
							fontSize: "15px",
							fontWeight: "600",
						}}
					>
						{name}
					</h5>
				</div>
				<small className="text-danger">{price}</small>
				<div className=" d-flex justify-content-center align-items-center flex-column">
					{fromProduct && (
						<button
							onClick={() => addProductToCart(product)}
							className="mt-2 btn btn-yellow btn-block"
						>
							Add To Cart
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;

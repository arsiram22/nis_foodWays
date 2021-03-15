import map from "../compnents/img/map.svg";

import { useContext } from "react";
import { KeranjangContext } from "../contexts/keranjangContext";
import { Link } from "react-router-dom";
import convertToRupiah from "../compnents/ToRupiah";

const Cart = () => {
	const [state, dispatch] = useContext(KeranjangContext);

	const deleteProductFromCart = (id) => {
		dispatch({
			type: "REMOVE_CART",
			payload: {
				id,
			},
		});
	};
	const minusProductFromCart = (id) => {
		console.log(id);
		dispatch({
			type: "MINUS_CART",
			payload: {
				id,
			},
		});
	};

	const addProductToCart = (data) => {
		dispatch({
			type: "ADD_CART",
			payload: data,
		});
	};
	console.log(state.carts);
	return (
		<>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom justify-content-center">
					{state.carts.length ? (
						<>
							<div className="my-2 col-10 ">
								<div class="mb-4">
									<h2>Geprek Bensu</h2>
								</div>
								<div class="input-group mb-3">
									<div className="col-12 px-1">
										<p> Delivery Location</p>
									</div>
									<div className="col px-0">
										<input
											type="text"
											class="form-control"
											placeholder="Search"
										/>
									</div>
									<div className="col-3 pr-0">
										<button class="btn btn-brown btn-block" type="submit">
											Select On Map
											<img src={map} alt="map" className="ml-2" />
										</button>
									</div>
								</div>
								<div class="input-group mb-3">
									<div className="col-12 px-1">
										<p>Review Order</p>
									</div>
									<div className="col-md-7 px-0">
										<table class="table">
											{state.carts.map((cart) => (
												<>
													<tr
														style={{
															borderTop: "2px solid",
														}}
													>
														<th
															rowspan="2"
															style={{
																width: "20%",
																borderBottom: "2px solid",
															}}
														>
															<img
																src={cart.logo}
																alt="menu"
																style={{
																	height: "80px",
																	width: "80px",
																	objectFit: "cover",
																}}
															/>{" "}
														</th>
														<td>{cart.name}</td>
														<td className="text-danger">
															{convertToRupiah(cart.price * cart.qty)}
														</td>
													</tr>
													<tr
														style={{
															borderBottom: "2px solid",
														}}
													>
														<td>
															<div
																class="input-group mb-3"
																style={{ width: "50%" }}
															>
																<div class="input-group-prepend">
																	{cart.qty === 1 ? (
																		<button
																			class="btn btn-outline-secondary"
																			type="button"
																			onClick={() =>
																				deleteProductFromCart(cart.id)
																			}
																		>
																			-
																		</button>
																	) : (
																		<button
																			class="btn btn-outline-secondary"
																			type="button"
																			onClick={() =>
																				minusProductFromCart(cart.id)
																			}
																		>
																			-
																		</button>
																	)}
																</div>
																<input
																	type="text"
																	class="form-control"
																	value={cart.qty}
																/>
																<div class="input-group-append">
																	<button
																		class="btn btn-outline-secondary"
																		type="button"
																		onClick={() => addProductToCart(cart)}
																	>
																		+
																	</button>
																</div>
															</div>
														</td>
														<td>
															<Link
																href="/#"
																onClick={() => deleteProductFromCart(cart.id)}
															>
																<img src="trash.svg" alt="Delete" />
															</Link>
														</td>
													</tr>
												</>
											))}
										</table>
									</div>
									<div className="col-5 pr-0">
										<table
											class="table"
											style={{
												fontFamily: "Avenir",
												fontSize: "14px",
												lineHeight: "19px",
											}}
										>
											<tr
												style={{
													borderTop: "2px solid",
												}}
											>
												<td>Subtotal</td>
												<td className="text-danger text-right">
													{convertToRupiah(getSubTotal(state.carts))}
												</td>
											</tr>
											<tr>
												<td>Qty</td>
												<td className="text-right">{sum(state.carts)}</td>
											</tr>
											<tr>
												<td>ongkir</td>
												<td className="text-danger text-right">
													{convertToRupiah(10000)}
												</td>
											</tr>
											<tr
												className="font-weight-bold text-danger "
												style={{ borderTop: "2px solid black" }}
											>
												<td>Total</td>
												<td className="text-right">
													{convertToRupiah(getTotal(state.carts, 10000))}
												</td>
											</tr>
										</table>
									</div>
								</div>
							</div>
							<div className="my-2 col-10 row px-0 ">
								<div className="col"></div>
								<div className="col-4">
									<button class="btn btn-brown btn-block" type="submit">
										Order
									</button>
								</div>
							</div>
						</>
					) : (
						<div className="col col-10">
							<h1>empty</h1>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;

const sum = (data) => {
	var sum = 0;
	data.forEach(function (obj) {
		sum += obj.qty;
	});
	return sum;
};

function getSubTotal(data) {
	var subtotal = 0;
	data.forEach(function (obj) {
		subtotal += obj.qty * obj.price;
	});
	return subtotal;
}
function getTotal(data, ongkir) {
	var subtotal = 0;
	data.forEach(function (obj) {
		subtotal += obj.qty * obj.price;
	});
	return subtotal + ongkir;
}

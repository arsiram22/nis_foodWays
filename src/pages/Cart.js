import map from "../compnents/img/map.svg";

const Cart = () => {
	return (
		<>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom justify-content-center">
					<div className="my-2 col-10 ">
						<div class="mb-4">
							<h2>Geprek Bensu</h2>
						</div>
						<div class="input-group mb-3">
							<div className="col-12 px-1">
								<p> Delivery Location</p>
							</div>
							<div className="col px-0">
								<input type="text" class="form-control" placeholder="Search" />
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
							<div className="col px-0">
								<table class="table">
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
												src="profile.jpg"
												alt="menu"
												style={{
													height: "80px",
													width: "80px",
													objectFit: "cover",
												}}
											/>{" "}
										</th>
										<td>paket geprek</td>
										<td className="text-danger">15 rb</td>
									</tr>
									<tr
										style={{
											borderBottom: "2px solid",
										}}
									>
										<td>
											<div class="input-group mb-3" style={{ width: "60%" }}>
												<div class="input-group-prepend">
													<button
														class="btn btn-outline-secondary"
														type="button"
													>
														-
													</button>
												</div>
												<input type="number" class="form-control" min="0" />
												<div class="input-group-append">
													<button
														class="btn btn-outline-secondary"
														type="button"
													>
														+
													</button>
												</div>
											</div>
										</td>
										<td>
											<a href="/#">
												<img src="trash.svg" alt="Delete" />
											</a>
										</td>
									</tr>
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
										<td className="text-danger text-right">Smith</td>
									</tr>
									<tr>
										<td>Qty</td>
										<td className="text-right">Smith</td>
									</tr>
									<tr>
										<td>ongkir</td>
										<td className="text-danger text-right">Jackson</td>
									</tr>
									<tr
										className="font-weight-bold text-danger "
										style={{ borderTop: "2px solid black" }}
									>
										<td>Total</td>
										<td className="text-right">Jackson</td>
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
				</div>
			</div>
		</>
	);
};

export default Cart;

import { AuthContext } from "../contexts/authContext";
import { transaction, order, restaurants } from "../API/Data";
import { useContext } from "react";
import { Button } from "react-bootstrap";
const Transaction = () => {
	const [state, dispatch] = useContext(AuthContext);
	return (
		<>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom justify-content-center">
					<div className="my-2 col-11 ">
						<div className="mb-4">
							<h2>Income Transaction</h2>
						</div>
						<div className="table-responsive">
							<table className="table table-hover table-bordered table-bordered-black">
								<thead>
									<tr className="table-active">
										<th style={{ width: "" }}>No</th>
										<th style={{ width: "15%" }}>Name</th>
										<th style={{ width: "30%" }}>Address</th>
										<th style={{ width: "20%" }}>Product Order</th>
										<th style={{ width: "15%" }}>Status</th>
										<th style={{ width: "15%" }}>Action</th>
									</tr>
								</thead>
								<tbody style={{ background: "#fff" }}>
									{transaction.map((trans) => (
										<tr>
											<td>{trans.id}</td>
											<td>Aris User</td>
											<td>bekasi</td>
											<td>Burger </td>
											<td
												style={{
													color: "green",
												}}
											>
												succes
											</td>
											<td>
												<img src="ok.svg" title="ok" />
											</td>
										</tr>
									))}
									<tr>
										<td>4</td>
										<td>Aris User</td>
										<td>bekasi</td>
										<td>Burger </td>
										<td>
											<p className="text-info">On The Way</p>
										</td>
										<td>
											<img src="" alt wait />
										</td>
									</tr>
									<tr>
										<td>5</td>
										<td>Aris User</td>
										<td>bekasi</td>
										<td>Burger </td>
										<td>
											<p className="text-warning">Waiting Approve</p>
										</td>
										<td>
											<div className="row col-">
												<Button size="sm" variant="danger" className="">
													Cancel
												</Button>
												<Button size="sm" variant="success">
													Approve
												</Button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Transaction;

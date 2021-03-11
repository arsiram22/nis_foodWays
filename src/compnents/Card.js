export const CardPopular = (props) => {
	const { name, logo } = props.data;
	return (
		<div className="col-md-3 mb-3">
			<div
				className="card "
				style={{
					height: "100px",
				}}
			>
				<div className="card-body">
					<div className="row">
						<div className="col-sm-4 pl-2">
							<img src={logo} alt={name} width="65px" height="65px" />
						</div>
						<div className="col-sm-8 my-auto px-3">
							<h5>{name}</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export const CardListItem = (props) => {
	return (
		<li>
			<div
				className="card-container"
				style={{
					width: "50%",
					border: "solid 3px #d3d3d3",
					margin: "10px auto",
				}}
			>
				<p>
					<strong>{props.character.name}</strong>
				</p>
				<p>{props.character.name}</p>
				<p>{props.character.name}</p>
			</div>
		</li>
	);
};

function Card() {
	return <div></div>;
}

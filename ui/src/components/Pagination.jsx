import React from "react";

const Pagination = ({ playersPerPage, totalPlayers, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalPlayers / playersPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav
			style={{
				color: "rgb(12, 167, 141)",
				marginTop: "20px",
				fontWeight: "bold",
			}}>
			<ul className="pagination">
				{pageNumbers.map((number) => (
					<li key={number} className="page-item">
						<p onClick={() => paginate(number)} className="page-link">
							{number}
						</p>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;

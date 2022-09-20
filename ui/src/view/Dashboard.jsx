import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import NavBar from "./../components/NavBar";
import Pagination from "./../components/Pagination";

const Dashboard = () => {
	const [player, setPlayer] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [playersPerPage] = useState(13);

	// const handleClick = () => {
	// 	alert("Currently under construction...");
	// };

	useEffect(() => {
		const fetchPlayers = async () => {
			setLoading(true);
			const res = await axios.get("http://localhost:8000/api/players");
			setPlayer(res.data.sort((a, b) => a.rankAllTime - b.rankAllTime));
			setLoading(false);
		};
		fetchPlayers();
	}, []);

	const indexOfLastPlayer = currentPage * playersPerPage;
	const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
	const currentPlayers = player.slice(indexOfFirstPlayer, indexOfLastPlayer);

	if (loading) {
		return <h2>We are gathering the players, please hang tight!</h2>;
	}

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="dashboard">
			{/* <NavBar /> */}
			<div style={{ display: "flex" }}>
				<input
					type="text"
					placeholder="Find a Player..."
					className="search"
					onChange={(e) => setSearchTerm(e.target.value)}
				/>

				<h2 className="dashboardTitle">NBA Top 75</h2>
				<Pagination
					playersPerPage={playersPerPage}
					totalPlayers={player.length}
					paginate={paginate}
				/>
			</div>
			<table className="table table-striped" style={{ textAlign: "center" }}>
				<thead>
					<tr>
						<th>Ranking </th>
						<th></th>
						<th>Name</th>
						<th>Height/Weight </th>
						<th>Teams Played For</th>
						<th>Positions</th>
						<th>Stats</th>
					</tr>
				</thead>
				<tbody className="tableBody">
					{currentPlayers
						.filter((player) =>
							player.fullName.toLowerCase().includes(searchTerm)
						)
						.map((players, i) => {
							return (
								<tr key={i}>
									<td
										style={{
											verticalAlign: "middle",
											fontWeight: "bold",
										}}>
										{players.rankAllTime} <br />
										{players.isActive ? "Active" : "Retired"}
									</td>
									<span style={{ textAlign: "center" }}>
										{" "}
										<br />
										<img
											src={players.imageUrlSmall}
											className="imageSmall"
											alt="imageSmall"
										/>{" "}
										<br />
										<Link
											style={{
												fontWeight: "bold",
												color: "rgb(12, 167, 141)",
											}}
											to={`/display/player/${players._id}`}>
											View Details
										</Link>
									</span>
									<td style={{ verticalAlign: "middle" }}>
										{players.fullName} <br />"{players.nickName}"{" "}
										<br />
										{/* <button id="favBtn" onClick={handleClick}>
											Favorite
										</button> */}
									</td>
									<td style={{ verticalAlign: "middle" }}>
										{players.heightFeet}'&nbsp;
										{players.heightInches}"
										<br />
										{players.weight} pounds
									</td>
									<td style={{ verticalAlign: "middle" }}>
										{players.teamPlayedForOne} <br />
										{players.teamPlayedForTwo} <br />
										{players.teamPlayedForThree}
									</td>
									<td style={{ verticalAlign: "middle" }}>
										{players.positionOne}
										{players.position} <br />{" "}
										{players.positionTwo}
									</td>
									<td style={{ verticalAlign: "middle" }}>
										{players.pointsPerGame.$numberDecimal} PTS{" "}
										<br />
										{
											players.reboundsPerGame.$numberDecimal
										} RBS <br />
										{players.assistsPerGame.$numberDecimal} AST
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;

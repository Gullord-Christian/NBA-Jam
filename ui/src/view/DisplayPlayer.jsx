import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./../components/NavBar";

const DisplayPlayer = () => {
	const [player, setPlayer] = useState([]);
	const { id } = useParams();
	const [refresh] = useState(true);

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/player/${id}`)
			.then((res) => {
				setPlayer(res.data);
			})
			.catch((err) => console.log(err));
	}, [refresh]);

	return (
		<div style={{ backgroundColor: "#dbd7d2" }}>
			<NavBar />
			<container className="displayPlayerHeader">
				<div className="conleft" style={{ width: "15%" }}>
					<img
						className="nbaLogo"
						alt="nbaLogo"
						src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
					/>
				</div>
				<div className="conright">
					<h1 className="conrightTitle">
						#{player.rankAllTime} - {player.fullName}
					</h1>
				</div>
			</container>
			<p style={{ textAlign: "center" }}>"{player.nickName}"</p>
			<div className="playerDetails">
				<p>
					{player.heightFeet} foot {player.heightInches} inches
				</p>{" "}
				-<p>{player.weight} pounds</p> -<p>{player.positionOne}</p>
				<p>{player.position}</p>
			</div>
			<img
				className="imgLrg"
				src={player.imageUrlLarge}
				alt="smallPlayerImage"
			/>{" "}
			<br />
			<p className="playerDesc">
				{player.playerDescription} <hr />
			</p>
			<div className="container">
				<div className="containerleft" style={{ width: "45%" }}>
					<h4 style={{ textAlign: "center", marginTop: "10px" }}>
						Career Statistics
					</h4>
					<hr />
					<ul>
						<li>
							{player.pointsPerGame &&
								player.pointsPerGame.$numberDecimal}{" "}
							points per game{" "}
						</li>
						<li>
							{player.reboundsPerGame &&
								player.reboundsPerGame.$numberDecimal}{" "}
							rebounds per game
						</li>
						<li>
							{player.assistsPerGame &&
								player.assistsPerGame.$numberDecimal}{" "}
							assists per game
						</li>
						<li>
							{player.fieldGoalPercentage &&
								player.fieldGoalPercentage.$numberDecimal}
							% (2 PT FG){" "}
						</li>
						<li>
							{player.threePointPercentage &&
								player.threePointPercentage.$numberDecimal}
							% (3 PT FG){" "}
						</li>
						<li>
							{player.freeThrowPercentage &&
								player.freeThrowPercentage.$numberDecimal}
							% (Free Throw){" "}
						</li>
					</ul>
				</div>
				<div className="containerright" style={{ width: "45%" }}>
					<h4 style={{ textAlign: "center", marginTop: "10px" }}>
						Career Accolades
					</h4>
					<hr />
					<ul>
						<li>{player.nbaChamps}x NBA Champion</li>
						<li>{player.mostValuablePlayer}x NBA MVP </li>
						<li>{player.allStarApps}x All Star</li>
						<li>{player.allNbaTeams}x All NBA Team</li>
						<li>{player.allDefTeams}x All Defensive Team</li>
						<li>{player.otherAwards}</li>
					</ul>
				</div>
			</div>
			<div style={{ textAlign: "center" }}>
				<a href={`${player.wikiUrl}`}>
					Learn more about {player.fullName}
				</a>
			</div>
			<br />
		</div>
	);
};

export default DisplayPlayer;

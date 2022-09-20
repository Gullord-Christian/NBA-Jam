import React from "react";

const NavBar = (props) => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarToggler"
					aria-controls="navbarToggler"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarToggler">
					<div class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="/">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/dashboard">
								Dashboard
							</a>
						</li>
						{/* <li class="nav-item">
            <a class="nav-link" href="/favorites">Favorites</a>
            </li> */}
						{/* <li class="nav-item">
							<a class="nav-link" href="/compare">
								Compare
							</a>
						</li> */}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const FrontPage = () => {
    return (
        <div className="frontPage">
            <div className="navbar">
                <navbar className="navbarleft">
                    <img
                        src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/127288/optimized_large_thumb_stage.jpg"
                        className="nbaJam"
                        alt="Logo"
                    />
                </navbar>
                <navbarright className="navbarright">
                    <h1 className="frontPageTitle">NBA Jam Stats</h1>
                    <h3 className="frontPageSubTitle">
                        Top 75 Players of All Time
                    </h3>
                    <Link to="/dashboard">
                        <button className="frontPageBtn">Enter</button>
                    </Link>
                </navbarright>
            </div>
            <div>
                <img
                    src="https://wallpaperaccess.com/full/845617.jpg"
                    className="frontImage1"
                    alt="nbaJamFrontPage"
                />
            </div>
        </div>
    );
};

export default FrontPage;

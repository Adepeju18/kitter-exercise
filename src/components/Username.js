import React from "react";
import meows from "../meows.json";

const Username = () => <div className="Username">@{meows[0].user.username}</div>;

export default Username;

import React from "react";
import PropTypes from "prop-types";

export const Counter = (props) => {
	return (
		<div className="d-flex justify-content-between h-100 bubulala">
			<div className="text-white justify-content-center bubulala">
				<i className="fa-regular fa-clock"></i>
			</div>
			<div className="dflex text-white bubulala">
				<p>{props.oneN}</p>
			</div>
			<div className="dflex text-white bubulala">
				<p>{props.twoN}</p>
			</div>
			<div className="dflex text-white bubulala">
				<p>{props.threeN}</p>
			</div>
			<div className="dflex text-white bubulala">
				<p>{props.fourN}</p>
			</div>
		</div>
	);
};

Counter.proptypes = {
	one: PropTypes.number,
	two: PropTypes.number,
	three: PropTypes.number,
	four: PropTypes.number,
};

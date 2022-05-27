import React from "react";
import PropTypes from "prop-types";

export const Timer = (props) => {
	return (
		<>
			<input
				type="text"
				className="form-control whatEver"
				placeholder="Whatever you want (number)"
				onChange={(e) => {
					props.setTheValue(e.target.value);
				}}
				value={props.theValue ? props.theValue : ""}
			/>
		</>
	);
};

Timer.propTypes = {
	theValue: PropTypes.number,
	setTheValue: PropTypes.func,
};

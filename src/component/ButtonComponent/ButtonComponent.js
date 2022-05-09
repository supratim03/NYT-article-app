import React from "react";

const ButtonComponent = ({ classValue, handleSearch, buttonText, isPrev, disabledValue }) => {

	const handleClick = () => {
		handleSearch();
	};
	return (
		<button
			className={classValue}
			onClick={handleClick}
			disabled={isPrev ? disabledValue === 0 : disabledValue < 10}
		>
			<span>
				{buttonText}
			</span>
		</button>
	);
};

export default ButtonComponent;

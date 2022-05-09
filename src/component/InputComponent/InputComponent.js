import React from "react";
import "../../styles/InputComponent.css";
const InputComponent = ({ handleInputChange, value, classValue, triggerSearch}) => {

	const handleInputOnChange = ({target: {value}}) => {
		handleInputChange(value);
	};
	const handleSearchAction = e => {
		if(e.keyCode === 13){
			triggerSearch();
		}
	};
	return (
		<input 
			className={classValue}
			placeholder="Search Article"
			onChange={handleInputOnChange}
			value={value}
			onKeyDown={handleSearchAction}
		/>
	);
};

export default InputComponent;

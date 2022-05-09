import React from "react";
import {useNavigate} from "react-router-dom";
import "../../styles/HomeContainer.css";
import InputComponent from "../../component/InputComponent/InputComponent";
import ButtonComponent from "../../component/ButtonComponent/ButtonComponent";

const HomeContainer = () => {
  const [inputVal, setInputVal] = React.useState("");
  const navigate = useNavigate();
  const handleInputChange = value => {
    setInputVal(value);
  };

  const handleSearch = () => {
    if(inputVal){
      navigate(`/search?query=${inputVal}`);
    }
  };
  return (
    <div className="search-container-wrapper">
      <div>
        <div className="intro"></div>
        <div className="logo sa-padding-top-20"></div>
      </div>
      <div className="wrapper">
        <div className="sa-padding-top-20 input-wrapper">
            <InputComponent
              handleInputChange={handleInputChange}
              value={inputVal}
              classValue="search-input search-box"
              triggerSearch={handleSearch}
            />
        </div>
        <div className="sa-padding-top-20">
            <ButtonComponent
              handleSearch={handleSearch}
              buttonText={"Search"}
              classValue="search-btn"
            />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;

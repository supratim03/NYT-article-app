import React from "react";
import "../../styles/ListShimmerComponent.css";

const ListShimmerComponent = () => {
    const prepareCards = [1, 2, 3, 4].map((element) => {
        return (
            <div className="card" key={element}>
                <div className="card-details">
                    <div>
                        <div className="comment br animate"></div>
                    </div>
                    <div>
                        <div className="comment br animate"></div>
                    </div>

                </div>

            </div>
        );
    });

    return (
        <div className="grid-container wrapper-shimmer" style={{ paddingTop: "30px" }}>
            {prepareCards}
        </div>
    );
};

export default ListShimmerComponent;

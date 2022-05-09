import React, { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import ButtonComponent from "../../component/ButtonComponent/ButtonComponent";
import InputComponent from "../../component/InputComponent/InputComponent";
import ArticleListComponent from "../../component/ArticleListComponent/ArticleListComponent";
import * as actions from "../../store/actions/searchAction";
import "../../styles/SearchContainer.css";
import ListShimmerComponent from "../../component/ListShimmerComponent/ListShimmerComponent";

const SearchContainer = ({ articleList, currentPageNumber, showShimmer, serviceUnavailable }) => {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const [inputVal, setInputVal] = useState("");
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(currentPageNumber);

	useEffect(() => {
		setInputVal(searchParams.get("query"));
		dispatch(actions.setSearchKey(searchParams.get("query")));
		dispatch(actions.getSearchResults(searchParams.get("query"), currentPage));
	}, []);

	const handleInputChange = value => {
		setInputVal(value);
	};

	const handleSearch = () => {
		if (inputVal) {
			navigate(`/search?query=${inputVal}`);
			window.location.reload();
		}
	};

	const handlePrevPage = () => {
		setCurrentPage(currentPage - 1);
		dispatch(actions.setSearchResults([]));
		dispatch(actions.setShowShimemrs(true));
		dispatch(actions.getSearchResults(inputVal, currentPage - 1));
	};

	const handleNextPage = () => {
		setCurrentPage(currentPage + 1);
		dispatch(actions.setSearchResults([]));
		dispatch(actions.setShowShimemrs(true));
		dispatch(actions.getSearchResults(inputVal, currentPage + 1));
	};

	const viewArticle = articleId => {
		const selectedArticle = articleList.find(article => article._id === articleId);
		dispatch(actions.setSelectedArticle(selectedArticle));
		dispatch(actions.setCurrentPage(currentPage));
		navigate(`/article?articleId=${articleId}`);
	};

	const reloadPage = () => {
		window.location.reload();
	};
	return (
		<>
			<div className="search-wrapper">
				<div className="sa-inline-block padding-10">
					<InputComponent
						value={inputVal}
						classValue="search-item-input search-input"
						handleInputChange={handleInputChange}
						triggerSearch={handleSearch}
					/>
				</div>
				<div className="sa-inline-block padding-10 float-btn">
					<ButtonComponent
						handleSearch={handleSearch}
						buttonText={"Search"}
						classValue="search-btn"
					/>
				</div>
			</div>
			<div className="results-wrapper">
				<div className="search-block res-block">
					{articleList.length > 0 && <><div className="sa-padding-top-50">
						<ArticleListComponent
							articleList={articleList}
							viewArticle={viewArticle}
						/>
					</div>
						<div className="sa-padding-top-50 pagination-wrapper sa-padding-bottom-50">
							<ButtonComponent
								handleSearch={handlePrevPage}
								buttonText={"Previous"}
								classValue="pagination-btn btn-margin"
								disabledValue={currentPage - 1}
								isPrev={true}
							/>
							<ButtonComponent
								handleSearch={handleNextPage}
								buttonText={"Next"}
								classValue="pagination-btn"
								disabledValue={articleList.length}
								isPrev={false}
							/>
						</div></>}
					{showShimmer && <ListShimmerComponent />}
					{(articleList.length === 0 && !showShimmer && !serviceUnavailable) &&
						<div className="no-record-wrapper">
							<div className="no-record"></div>
							<div>
								<span className="sa-fs-18">No Records found!</span>
							</div>
							<div className="sa-padding-top-20 sa-align-center">
								<span className="sa-fs-14">
									There was no record based on the search term you entered.
								</span>
							</div>
						</div>
					}

					{(articleList.length === 0 && serviceUnavailable) &&
						<div className="no-record-wrapper">
							<div className="no-record"></div>
							<div>
								<span className="sa-fs-18">Service Unavailable</span>
							</div>
							<div className="sa-padding-top-20 sa-align-center">
								<span className="sa-fs-14">
									Sorry, our services are down for a while. Please click on the button below.
								</span>
							</div>
							<div className="sa-padding-top-20 sa-align-center">
								<ButtonComponent
									handleSearch={reloadPage}
									buttonText={"Try Again"}
									classValue="search-btn"
								/>
							</div>
						</div>
					}
				</div>
			</div>
		</>
	);
};

const mapStateToProps = state => {
	const { SearchReducer } = state;
	return {
		articleList: SearchReducer.searchResults,
		currentPageNumber: SearchReducer.currentPage,
		showShimmer: SearchReducer.showShimmers,
		serviceUnavailable: SearchReducer.serviceUnavailable
	};
};

export default connect(mapStateToProps, {})(SearchContainer);

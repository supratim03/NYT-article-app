import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "../../styles/ArticleViewContainer.css";
import back from "../../assets/left-arrow.png";
import right from "../../assets/right.png";

const ArticleViewContainer = ({ article, searchKey }) => {
	const navigate = useNavigate();

	const handleArticleView = url => {
		window.open(url, "_blank");
	};

	const backToSearch = () => {
		navigate(`/search?query=${searchKey}`);
	};
	return (
		<div className="background-wrapper">
			<div className="article-view-wrapper">
				<div>
					<span 
						className="sa-link sa-cursor-pointer back" 
						onClick={backToSearch}
					>
						<span className="vertical-center">
							<img src={back} alt="back" style={{height: "12px"}}/>
						</span>&nbsp;
						Back to Search Result
					</span>
				</div>
				<div className="sa-padding-top-20">
					<span className="sa-fw-b sa-fs-18">{article?.abstract}</span>
				</div>
				<div className="sa-padding-top-20">
					<span>{moment(article.pub_date).format("DD MMM, YYYY")}</span>
				</div>
				<div className="article-desc">
					<p>
						{article.lead_paragraph}
					</p>
				</div>
				<div>
					<span 
						className="sa-link sa-cursor-pointer articleView" 
						onClick={() => handleArticleView(article.web_url)}
					>
						Read the full article
						<span className="vertical-center">
							<img src={right} alt="right" style={{height: "16px"}} />
						</span>
					</span>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	const { SearchReducer } = state;
	return {
		article: SearchReducer.selectedArticle,
		searchKey: SearchReducer.searchKey
	};
};

export default connect(mapStateToProps, {})(ArticleViewContainer);

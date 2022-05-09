import React from "react";
import "../../styles/ArticleListComponent.css";

const ArticleListComponent = ({ articleList, viewArticle }) => {

	const handleViewArticle = (articleId) => {
		viewArticle(articleId);
	};

	const prpeareArticleListView = articleList.map(article => {
		return (
			<div className="article-wrapper sa-padding-20" key={article._id}>
				<div>
					<span 
						className="sa-fw-b sa-fs-18 article-header"
						onClick={ () => handleViewArticle(article._id) }
					>
						{article.headline.main}
					</span>
				</div>
				<div className="sa-padding-top-20">
					<span className="article-body">{article.abstract}</span>
				</div>
			</div>
		);
	});
	return (
		<div className="grid-container">
			{prpeareArticleListView}
		</div>
	);
};

export default ArticleListComponent;

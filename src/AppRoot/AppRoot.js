import React, { Suspense } from "react";
import {
	Routes,
	Route
} from "react-router-dom";
const ArticleViewContainer = React.lazy(() => import("../container/ArticleViewContainer/ArticleViewContainer"));
const HomeContainer = React.lazy(() => import("../container/HomeContainer/HomeContainer"));
const SearchContainer = React.lazy(() => import("../container/SearchContainer/SearchContainer"));

const AppRoot = () => {
	return (
		<Suspense fallback={ <div>Loading... </div> }>
			<Routes>
				<Route exact path="/" element={ <HomeContainer /> } />
				<Route exact path="/search" element={ <SearchContainer /> } />
				<Route exact path="/article" element={ <ArticleViewContainer /> } />
			</Routes>
		</Suspense>
	);
};

export default AppRoot;

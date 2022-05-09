import * as actionTypes from "../actionTypes/actionTypes";
import * as searchActions from "../actions/searchAction";
import { takeEvery, put, call, all} from "@redux-saga/core/effects";
import * as api from "../../Api/ApiHelper";

export function* getSearchResults({searchKey, page}) {
	const url = `${process.env.REACT_APP_API_URL}/articlesearch.json?q=${searchKey}&
		api-key=${process.env.REACT_APP_API_KEY}&fl=headline&fl=web_url&fl=_id&fl=abstract&fl=lead_paragraph&
		fl=pub_date&page=${page}&fq=document_type:(article)`;
	const {success, payload} = yield call(api.getData, url);
	if(success) {
		yield all([
			put(searchActions.setSearchResults(payload.response.docs)),
			put(searchActions.setShowShimemrs(false))
		]);
	} else {
		yield all([
			put(searchActions.setSearchResults([])),
			put(searchActions.setShowShimemrs(false)),
			put(searchActions.setServiceUnavailable(true))
		]);
	}
}
function* searchSaga() {
	yield takeEvery(actionTypes.GET_SEARCH_RESULTS, getSearchResults);
}

export default searchSaga;

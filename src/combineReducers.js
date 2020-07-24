/*
 * @Author: Giphitie
 * @Date: 2020-07-24 22:19:39
 * @Last Modified by:   Giphitie
 * @Last Modified time: 2020-07-24 22:19:39
 */

import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
// import { persistReducer } from "redux-persist";

const allReducers = combineReducers({
	firebase: firebaseReducer,
	// firebase: persistReducer({ key: "firebaseState", storage: localStorage }, firebaseReducer),
	firestore: firestoreReducer,
});

export default allReducers;

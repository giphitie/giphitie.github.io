/*
 * @Author: Giphitie
 * @Date: 2020-07-24 22:17:06
 * @Last Modified by:   Giphitie
 * @Last Modified time: 2020-07-24 22:17:06
 */

import { createFirestoreInstance } from "redux-firestore";
import store from "../configureStore";
import app from "./services/firebase";

const Constants = {
	routes: {},
	app: {},
	messagesConfig: {
		PASSWORD: "secret",
		USER: "goldbergjaguar@gmail.com",
		SERVICE: "gmail",
	},
	store: {},
};

export default Constants;

/**
 * firebase configuration
 */
export const firebaseConfig = {
	apiKey: "AIzaSyCIyWZ3V0HMvqMW15sUHeFbFJ_NBdGqbMg",
	authDomain: "gifty-osei.firebaseapp.com",
	databaseURL: "https://gifty-osei.firebaseio.com",
	projectId: "gifty-osei",
	storageBucket: "gifty-osei.appspot.com",
	messagingSenderId: "419937562502",
	appId: "1:419937562502:web:be2b0b2ef901c9a77c4607",
	measurementId: "G-MHR8RG3HPD",
};

/**
 * react-redux-firebase config
 */
export const rrfConfig = {
	userProfile: "users",
	useFirestoreForProfile: true,
};

/**
 * ReactReduxFirebaseProvider props
 */
export const rrfProps = {
	firebase: app,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

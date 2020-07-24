/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2019-12-26 16:33:06
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-11 17:01:07
 */

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCIyWZ3V0HMvqMW15sUHeFbFJ_NBdGqbMg',
	authDomain: 'gifty-osei.firebaseapp.com',
	databaseURL: 'https://gifty-osei.firebaseio.com',
	projectId: 'gifty-osei',
	storageBucket: 'gifty-osei.appspot.com',
	messagingSenderId: '419937562502',
	appId: '1:419937562502:web:be2b0b2ef901c9a77c4607',
	measurementId: 'G-MHR8RG3HPD',
};

const app = firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
app.auth();

app.firestore();

app.storage();

// app.analytics();

export default app;

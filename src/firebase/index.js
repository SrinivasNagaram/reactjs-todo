

import Rebase from 're-base';
import firebase from 'firebase';

var app = firebase.initializeApp({ 
	apiKey: "AIzaSyAlfqBT9JAzpc_9Ir-VuXILvTWpYAc3vyE",
    authDomain: "todo-react-redux-254fc.firebaseapp.com",
    databaseURL: "https://todo-react-redux-254fc.firebaseio.com",
    projectId: "todo-react-redux-254fc",
    storageBucket: "todo-react-redux-254fc.appspot.com",
    messagingSenderId: "932238284407",
    appId: "1:932238284407:web:dff7ad78214e58e9111872",
    measurementId: "G-KJR5T2QVSS"
})

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;

import firebase from "firebase/compat/app";
import { setLogin, setLogout } from "../redux/actions/userActions";
import { createUser, queryUser } from "./crud/user";

export const signIn = async (user, dispatch) => {
	let currentUser = {
		name: user.displayName,
		email: user.email,
		phone: user.phoneNumber,
		profileImage: user.photoURL,
	};
	let loggedUser = await queryUser(user.email);
	if (!loggedUser) loggedUser = await createUser(currentUser);
	dispatch(setLogin(loggedUser));
};

export const signOut = async (dispatch) => {
	await firebase.auth().signOut();
	dispatch(setLogout());
};

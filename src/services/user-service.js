import { tokenKey } from "../config.js";
import apiFetch from "./api-fetch.js";

export default async function createUser(newUser = { email, password }) {
	const { token, ...user  } = await apiFetch("signup", { body: newUser})
	
	sessionStorage.setItem(tokenKey, token);

	return user;
}
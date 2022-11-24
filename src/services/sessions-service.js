// Crear el Login y el Logout
import apiFetch from "./api-fetch.js";
import { tokenKey } from "../config.js";

// Crear el Login y el Logout
export async function login(credentials = { email, password }) {
	const { token, ...user } = await apiFetch("login", { body: credentials });
	sessionStorage.setItem(tokenKey, token);
	console.log(token);

	return user;
}

export async function logout() {
	const data = await apiFetch("logout", { method: "DELETE" });
	sessionStorage.removeItem(tokenKey);

	return data;
}
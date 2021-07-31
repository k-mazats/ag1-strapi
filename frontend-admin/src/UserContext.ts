import { createContext, Dispatch, SetStateAction } from "react";
interface User {
	user: null | object;
	setUser?: Dispatch<SetStateAction<object | null >>
}
export const UserContext = createContext<User>({ user: null });

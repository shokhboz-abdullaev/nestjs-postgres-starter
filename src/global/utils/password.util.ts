import { hash, genSalt, compare } from 'bcryptjs';

export const useHashPassword = async (password: string, round: number) => {
	const salt = await genSalt(round);
	return await hash(password, salt);
};

export const useMatchPassword = async (incoming: string, original: string) => {
	return await compare(incoming, original);
};

import * as api from '../../api';
import {
	GET_GAMES,
	ADD_NEWSLETTER,
	CLEAR_NEWSLETTER,
	GET_GAME_BY_ID,
	CLEAR_GAME_BY_ID,
} from '../types';

// games
export const getGames = (homeGames, page, order, limit) => ({
	type: GET_GAMES,
	payload: api.getGames(homeGames, page, order, limit),
});

// users
export const addNewsletter = (data) => ({
	type: ADD_NEWSLETTER,
	payload: api.addNewsletter(data),
});

export const clearNewsletter = () => ({
	type: CLEAR_NEWSLETTER,
	payload: {
		newsletter: false,
		email: [],
	},
});

// gamesById
export const getGameById = (id) => ({
	type: GET_GAME_BY_ID,
	payload: api.getGameById(id),
});

export const clearGameById = () => ({
	type: CLEAR_GAME_BY_ID,
	payload: {},
});

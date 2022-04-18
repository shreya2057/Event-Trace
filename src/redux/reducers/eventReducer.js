import { ActionTypes } from "../constants/actionTypes";

const initialState = {
	events: [],
	createdEvents: [],
	registeredEvents: [],
	interestedEvents: [],
};

export const eventReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.EVENT.ALL_EVENTS:
			state.events = [...payload];
			return state;
		case ActionTypes.EVENT.CREATE_EVENT:
			state.events.push(payload);
			state.createdEvents.push(payload);
			return state;
		case ActionTypes.EVENT.UPDATE_EVENT:
			state.events = state.events.filter((event) => event.id !== payload.id);
			state.events.unshift(payload);
			return state;
		default:
			return state;
	}
};

export const getAllEvents = (state) => state.events;

import { reducer } from './reducers';
import Storage from '../utils/storage';
import { PersistenceKey } from '../utils/storage';

export let emptyState = {
	screen: 'SIGNIN',
	post: [],
};

export let appState = Storage.get({key:  PersistenceKey.STATE, defaultValue: emptyState})

let observers: any = [];

const persisStore = (state: any) => {
	Storage.set({key: PersistenceKey.STATE, value: state, session: false})
}
const notifyObservers = () => observers.forEach((o: any) => o.render());

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;

	persisStore(newState)
	notifyObservers()
	observers.forEach((o: any) => o.render());
};

export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};

import { reducer } from './reducers';
import Storage from '../utils/storage';
import { PersistenceKey } from '../utils/storage';

export let emptyState = {
	screen: 'SIGNIN',
};

export let appState = Storage.get({key:  PersistenceKey.POST, defaultValue: emptyState})

let observers: any = [];

const persisStore = (state: any) => {
	Storage.set({key: PersistenceKey.POST, value: state, session: false})
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

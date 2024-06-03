import { changeScreen } from '../../store/actions';
import { addObserver } from '../../store/store';
import { dispatch } from '../../store/store';
import Inputpost from '../../components/inputPost/inputPost';

import styles from './Login.css';

class Login extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		addObserver(this);

		const signUpButton = this.shadowRoot?.querySelector('#signUpButton');
		signUpButton?.addEventListener('click', () => {
			dispatch(changeScreen('SIGNIN'));
		});

		const logInButton = this.shadowRoot?.querySelector('#logInButton');
		logInButton?.addEventListener('click', () => {
			dispatch(changeScreen('DASHBOARD'));
		});
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			const css = this.ownerDocument.createElement('style');
			css.innerHTML = styles;
			this.shadowRoot?.appendChild(css);

			const main = document.createElement('main')
			this.shadowRoot.appendChild(main)

			const section = document.createElement('section')
			section.className = "form-container"
			main.appendChild(section)

			const vanguardTitle = document.createElement('h1')
			vanguardTitle.className = 'vanguardTitle'
			vanguardTitle.innerText = 'Vanguard'
			section.appendChild(vanguardTitle)

			const slogan = document.createElement('p')
			slogan.className = 'slogan'
			slogan.innerText = 'Create and connect'
			section.appendChild(slogan)

			const form = document.createElement('form')
			section.appendChild(form)

			const username = document.createElement ('input-info')
			form.appendChild(username)

			const password = document.createElement ('input-info')
			form.appendChild(password)

			const loginButton = document.createElement('button');
			loginButton.id = 'logInButton'
			loginButton.innerText = 'Login'
			form.appendChild(loginButton)

			const signInButton = document.createElement('button');
			signInButton.id = 'signUpButton'
			signInButton.innerText = 'Create new account'
			form.appendChild(signInButton)
		}
	}
}

customElements.define('app-login', Login);
export default Login;

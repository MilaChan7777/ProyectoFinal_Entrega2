import { changeScreen } from '../../store/actions';
import { addObserver } from '../../store/store';
import { dispatch } from '../../store/store';

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

			this.shadowRoot!.innerHTML += `
      <main style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
        <div class="form-container">
        <h1 class="vanguardTitle">Vanguard</h1>
        <p class="slogan"> Create and connect </p>
          <form>
            <h4>Username</h4>
            <input type="email" placeholder="Email"/>
            <h4>Password</h4>
            <input type="password" placeholder="Password" />
            <button id="logInButton">LogIn</button>
						<button id="signUpButton">Create new account</button>
          </form>
        </div>
      </main>
      `;
		}
	}
}

customElements.define('app-login', Login);
export default Login;

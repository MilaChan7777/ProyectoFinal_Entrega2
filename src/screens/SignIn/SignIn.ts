import { changeScreen } from '../../store/actions';
import { addObserver } from '../../store/store';
import { dispatch } from '../../store/store';
import styles from './SignIn.css';

class SignIn extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();

		const signInButton = this.shadowRoot?.querySelector('#signinButton');
		signInButton?.addEventListener('click', () => {
			dispatch(changeScreen('LOGIN'));
		});

		const logInButton = this.shadowRoot?.querySelector('#loginButton');
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

			this.shadowRoot.innerHTML += `
                <main style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
                    <h3 class="vanguardTitle">Vanguard</h3>
                    <p>Create and connect</p>
                    <div class="form-container">
                        <form>
                            <h1>Username</h1>
                            <input type="text" placeholder="Create an username" />
                            <h1>Birthday</h1>
                            <input type="date" placeholder="dd/mm/aa"/>
                            <h1>E-mail</h1>
                            <input type="email" placeholder="" />
                            <h1>Password</h1>
                            <input type="password" placeholder="Password" />
                            <button id="signinButton">Sign in</button> <!-- Corregido aquí -->
                        </form>
                        <button id="loginButton">Already have an account?</button>
                    </div>
                </main>
            `;
		}
	}
}

customElements.define('app-signin', SignIn);
export default SignIn;

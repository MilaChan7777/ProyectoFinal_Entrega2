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
			dispatch(changeScreen('DASHBOARD'));
		});

		const logInButton = this.shadowRoot?.querySelector('#loginButton');
		logInButton?.addEventListener('click', () => {
			dispatch(changeScreen('LOGIN'));
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
                    <div class="form-container">
                        <form>
												<h1 class="vanguardTitle">Vanguard</h1>
												<p class="slogan">Create and connect</p>
                            <h4>Username</h4>
                            <input type="text" placeholder="" />
                            <h4>Birthday</h4>
                            <input type="date" placeholder=""/>
                            <h4>E-mail</h4>
                            <input type="email" placeholder="" />
                            <h4>Password</h4>
                            <input type="password" placeholder="" />
                        </form>
												<button id="signinButton">Sign in</button>

                        <button id="loginButton">Already have an account?</button>
                    </div>
                </main>
            `;
		}
	}
}

customElements.define('app-signin', SignIn);
export default SignIn;

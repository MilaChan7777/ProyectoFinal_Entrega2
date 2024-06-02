
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: 'AIzaSyCJ3zQIujLQ1qj-nF0ADd8xP8oV4O2s4bA',
	authDomain: 'posts-d5116.firebaseapp.com',
	projectId: 'posts-d5116',
	storageBucket: 'posts-d5116.appspot.com',
	messagingSenderId: '381209847571',
	appId: '1:381209847571:web:a2e7c0e5ebf331afa65ce6',
	measurementId: 'G-TYKJ3QSXKJ',
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'vanguardUsersPosts'));
    const arrayPosts: Array<any>= [];

    querySnapshot.forEach((doc) => {
    const data = doc.data() as any;
    arrayPosts.push({id: doc.id, ...data})
    });
    return arrayPosts
}

export const createUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
        const user = userCredential
        console.log(user);
        
    })
    .catch((error: any)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage)
    })
}


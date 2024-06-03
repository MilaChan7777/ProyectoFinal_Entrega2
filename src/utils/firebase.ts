
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDblKMSaGR3l3VUP8Gcylpskcio8hM7cdQ",
    authDomain: "vanguard-35d26.firebaseapp.com",
    projectId: "vanguard-35d26",
    storageBucket: "vanguard-35d26.appspot.com",
    messagingSenderId: "187651490470",
    appId: "1:187651490470:web:f995465153247e0d556a67",
    measurementId: "G-Q75K0PGBWK"
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
        const user = userCredential.user
        console.log(user);
        
    })
    .catch((error: any)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage)
    })
}


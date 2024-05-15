// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore,  collection, addDoc  } from "firebase/firestore"; 

class Nube{
    constructor(){
        /*
            Esta información llega de: Configuración de proyecto / app web js / npm
        */
        this.config = {
            apiKey: "AIzaSyBPIqo2cTmP59rIbD9Z4-YNe1a-bmCA1t8",
            authDomain: "xacaloginregistro.firebaseapp.com",
            databaseURL: "https://xacaloginregistro-default-rtdb.firebaseio.com",
            projectId: "xacaloginregistro",
            storageBucket: "xacaloginregistro.appspot.com",
            messagingSenderId: "572053895570",
            appId: "1:572053895570:web:d7e199fc01bdbf1208294b"
        }
        this.app = initializeApp(this.config);
        this.auth = getAuth(this.app);
        this.db = getFirestore(this.app);

    }

    async login(email, password){
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            this.user = userCredential.user;
            return userCredential;
        } catch (error) {
            return error;
        }
    }

    async nuevoUsuario(){
        return await addDoc(collection(this.db, "users"), {
            uid: this.user.uid,
            nombre: "Mario",
            email: "mario@z.com",
            celular: "31212217459"
        });
    }

}

export default Nube;
/*
  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, "a@a.com", "123456")
    .then((userCredential) => {
    // Signed in 
        console.log(userCredential);
        //const user = userCredential.user;
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
*/


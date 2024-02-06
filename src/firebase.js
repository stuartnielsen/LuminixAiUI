import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getAuth, connectAuthEmulator } from "firebase/auth"

// This info is safe to publish
const firebaseConfig = {
    apiKey: "AIzaSyAzHWReikwYAS81Jbp5YYkaWPVUPpw83j4",
    authDomain: "luminixai-caae8.firebaseapp.com",
    projectId: "luminixai-caae8",
    storageBucket: "luminixai-caae8.appspot.com",
    messagingSenderId: "525435396748",
    appId: "1:525435396748:web:9be1a51ec85baf184591a9",
    measurementId: "G-NLVF03B45B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const cloudFunctions = getFunctions(app);
const auth = getAuth(app);

// Uncomment these lines during local development to connect to local running emulators
// connectFunctionsEmulator(cloudFunctions, "127.0.0.1", 5001);
// connectAuthEmulator(auth, "http://127.0.0.1:9099");

export default {
    app,
    analytics,
    auth,
    cloudFunctions,
}
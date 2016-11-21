(function validate(){
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyAP2g2-g4V6UQGe4oxONfoSU7IPGfXcCOA",
		authDomain: "marketplace-20baf.firebaseapp.com",
		databaseURL: "https://marketplace-20baf.firebaseio.com",
		storageBucket: "",
		messagingSenderId: "300860711073"
	};
	firebase.initializeApp(config);
	
	// Get elements
	const txtMail = document.getElementById("txtMail");
	const txtPass = document.getElementById("txtPass");
	const btnLogin = document.getElementById("btnLogin");
	const btnRegister = document.getElementById("btnRegister");
	
	// Login event
	btnLogin.addEventListener("click", e => {
		// Get email and pass
		const email = txtMail.value;
		const pass = txtPass.value;
		const auth = firebase.auth();
		
		// Sign in
		const promise = auth.signInWithEmailAndPassword(email, pass);
		// Catch errors
		promise.catch(e => console.log(e.message));
	});
	
	// Register event
	btnRegister.addEventListener("click", e => {
		// Get email and pass
		const email = txtMail.value;
		const pass = txtPass.value;
		const auth = firebase.auth();
		
		// Create user
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		// Catch errors
		promise.catch(e => console.log(e.message));
	
	});
	
	// Realtime listener to listen for login/logout
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if(firebaseUser){
			console.log(firebaseUser);
			// Go to profile site
			window.location = "profile.html";
		}
		else{
			console.log("Not logged in");
		}
	});
		
}());
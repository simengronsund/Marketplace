(function invalidate(){
	
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
	const btnLogout = document.getElementById("btnLogout");
	const ulList = document.getElementById("list");
	
	// Logout event
	btnLogout.addEventListener("click", e => {
		firebase.auth().signOut();
	});

	
	// Realtime listener to listen for login/logout
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if(firebaseUser){
			// Log user
			console.log(firebaseUser);
			
			// Get products created by user
			var productRef = firebase.database().ref("Products/");
			productRef.orderByChild("Seller").equalTo(firebaseUser.email).on("child_added", function(data) {
				const li = document.createElement("li");
				li.innerText = data.val().Produktnavn;
				ulList.appendChild(li);
			});
		}
		else{
			console.log("Not logged in");
			window.location = "index.html";
		}
	});
	
}());
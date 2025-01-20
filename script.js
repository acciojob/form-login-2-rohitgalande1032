//your JS code here. If required.
document.getElementById("btn").addEventListener('click', ()=> {
	let firstName = document.getElementById("first_name").value;
	let lastName = document.getElementById("last_name").value;
	let phoneNumber = document.getElementById("phone_number").value;
	let email = document.getElementById("email").value;

	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`)
})

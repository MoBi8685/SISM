const loggedIn = !!localStorage.getItem('loggedin')

const users = [
	{ name: 'Mobi', password: 'King', type: 'admin' },
	{ name: 'Abdulrahman', password: 'Abdulrahman', type: 'admin' },
	{ name: 'SaTu', password: '2262017', type: 'admin' },
	{ name: 'MiMO', password: 'mm151115', type: 'admin' },
	{ name: 'Mobi', password: 'King', type: 'admin' },
	{ name: 'Mobi', password: 'King', type: 'admin' },
	{ name: 'Mobi', password: 'King', type: 'admin' },
	{ name: 'Mobi', password: 'King', type: 'admin' },

	{ name: 'Hedari', password: 'pass', type: 'user' },
	{ name: 'user', password: 'pass', type: 'user' },
	{ name: 'Hedari', password: 'pass', type: 'user' },
	{ name: 'Hedari', password: 'pass', type: 'user' },
	{ name: 'Hedari', password: 'pass', type: 'user' },
	{ name: 'Hedari', password: 'pass', type: 'user' },
	{ name: 'Hedari', password: 'pass', type: 'user' },
	{ name: 'Hedari', password: 'pass', type: 'user' },
	{ name: 'Hedari', password: 'pass', type: 'user' },

]
// document.body.onloadend = () => {
// 	console.log('hello')
// 	const elm = document.getElementById('login-container')
// 	console.log(elm)
// 	if (loggedIn) {
// 		elm.style.display = 'none'
// 	}
// }

function login() {
	const username = document.getElementById('username').value
	const password = document.getElementById('password').value
	for (const user of users) {
		if (user.name == username && user.password == password) {
			localStorage.setItem('loggedin', user.type)
			HideLogIn()
			if (localStorage.getItem('loggedin')=='admin'){
				window.location.href= './dashboard.html'
			}else{
				window.location.href= './user.html'
			}
			return 
		}
	}
}
function HideLogIn() {
	document.getElementById('login-container').classList.toggle('hidden');
  }
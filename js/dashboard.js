function Search(e){
	console.log(e)
	for(const school of schools){
		if (school.name.startsWith(e.value)) {
			school.show = true
		} else {
			school.show = false
		}
	}
	Render()
}

function Render1School(e){
	const school = schools[e]
	const app = document.getElementById('app')
	app.innerHTML = e

}

function Render(){
	const app = document.getElementById('app')
	app.innerHTML =''
	for (const schoolIndex in schools) {
		const school = schools[schoolIndex]
		const scl = document.createElement('div')
		scl.classList.add('school','col')
		scl.innerHTML = '<h2>' + school.name + '</h2>'
		let studentsAmount = 0
		for (const student of school.students){
			studentsAmount ++
		}
		scl.innerHTML += 'عدد الطلاب: ' + studentsAmount
		scl.innerHTML += '<br />'
		let booksAmount = 0
		for (const book of school.books) {
			booksAmount += book.amount
		}
		scl.innerHTML += 'عدد الكتب: ' + booksAmount
		let teachersAmount = 0 
		for (const teacher of school.teachers){
			teachersAmount ++
		}
		scl.innerHTML+='<br />'
		scl.innerHTML += 'عدد المدرسين: ' + teachersAmount
		if (school.show) {
			scl.onclick = () => Render1School(schoolIndex)
			app.append(scl)
		}
	}
}

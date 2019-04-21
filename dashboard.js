function Search(e){
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
	app.innerHTML = ''
	const inf = document.createElement('div')
	inf.classList.add('Aschool')
	inf.innerHTML = '<br /><h3>' + school.name + "</h3><br />"
	const studentsPerGrade = []
	for (const student of school.students) {
		const s = studentsPerGrade.filter(x => x.grade == student.grade)[0]
		if (s === undefined) {
			studentsPerGrade.push({grade: student.grade, amount: 1})
		} else {
			s.amount++
		}
	}
	const content1 = document.createElement('div')
	content1.classList.add('scl-cntnt')
	content1.innerHTML += '<br /><h4>الطلاب:</h4>'
	for (const g of studentsPerGrade) {
		content1.innerHTML += `عدد طلاب المرحلة ${g.grade}: ${g.amount} <br />`		
	}


	const content2 = document.createElement('div')
	content2.classList.add('scl-cntnt')
	content2.innerHTML += '<br /><h4>المدرسين:</h4>'

	const teachersPerSubject = []
	for (const teacher of school.teachers) {
		const s = teachersPerSubject.filter(x => x.prof == teacher.prof)[0]
		if (s === undefined) {
			teachersPerSubject.push({prof: teacher.prof, amount: 1})
		} else {
			s.amount++
		}
	}

	for (const g of teachersPerSubject) {
		content2.innerHTML += `عدد مدرسين مادة ال${g.prof}: ${g.amount} <br />`
	}

	const content3 = document.createElement('div')
	content3.classList.add('scl-cntnt')
	content3.innerHTML += '<br /><h4>الكتب:</h4>'
	for (const book of school.books) {
		content3.innerHTML += `عدد كتب المرحلة ${book.grade}: ${book.amount} <br />`
	}
	inf.append(content1,content2,content3)
	app.append(inf)
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
		scl.innerHTML += '<br />'
		const More = document.createElement('button')
		More.classList.add('More')
		More.innerText = 'عرض المزيد'
		More.onclick = () => Render1School(schoolIndex)
		const centor = document.createElement('center')
		centor.append(More)
		scl.append(centor)
		if (school.show) {
			app.append(scl)
		}
	}
}

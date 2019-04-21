function renderEverything(schoolOD) {
    const app = document.getElementById('app')
    const school = schools[schoolOD]
    app.innerHTML = ''
    app.innerHTML += '<h3>الكتب:</h3>'
    for (const booksec of school.books) {
        const b = document.createElement('div')
        b.classList.add('user')
        const o = document.createElement('input')
        b.innerHTML = `تغيير عدد كتب المرحلة ${booksec.grade}`
        o.value = booksec.amount
        o.onkeydown = () => booksec.amount = o.value
        b.append(o)
        app.append(b)

        const te = document.getElementById('te')
        te.onclick =() => renderTeachers(school)

        const be = document.getElementById('be')
        be.onclick =() => renderEverything(schoolOD)
    }
}

function renderTeachers(school) {
    const app = document.getElementById('app')
    app.innerHTML = ''

    const divMaster = document.createElement('div')
    divMaster.id = 'div-master'
    const tableChan = document.createElement('table')
    const tableHeader = document.createElement('tr')
    tableHeader.innerHTML = '<th>اسم المدرس</th> <th>الاختصاص</th> <th>حذف المدرس</th>'
    tableChan.append(tableHeader)
    for (const teacher of school.teachers) {
        const t = document.createElement('tr')
        t.classList.add('teacher-tr')
        t.innerHTML += `<td> ${teacher.name} </td> <td> ${teacher.prof} </td>`
        const bd = document.createElement('button')
        bd.classList.add('td')
        bd.innerText = 'حذف'
        bd.onclick = () => {
            for(const teac in school.teachers) {
                if (school.teachers[teac].name == teacher.name) {   
                    school.teachers.splice(teac, 1)
                }
            }
            renderTeachers(school)
        }
        t.append(bd)
        tableChan.append(t)
    }

    const addTeacher = document.createElement('div')
    addTeacher.classList.add('add-teacher-div')
    addTeacher.innerHTML = '<br ><h3>اضافة مدرس:</h3><br /><input placeholder="اسم المدرس" id="name"></input> <input placeholder="الاختصاص" id="prof"></input><br />'
    const ba = document.createElement('button')
    ba.onclick = () => {
        school.teachers.push({ name: document.getElementById('name').value, prof: document.getElementById('prof').value })
        renderTeachers(school)
    }
    ba.innerText = 'اضافة المدرس الجديد'
    addTeacher.append(ba)
    divMaster.append(tableChan)
    app.append(divMaster)
    app.append(addTeacher)
}

renderEverything(2)

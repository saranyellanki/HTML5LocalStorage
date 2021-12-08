window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
})

const createInnerHtml = () => {
    const headerHtml = "<th>Profile</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
    <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}"></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img name="${empPayrollData._id}" onclick="remove()" alt="delete" src="../assets/icons/delete-black-18dp.svg" alt="delete">
            <img name="${empPayrollData._id}" alt="edit" onclick="update()" src="../assets/icons/create-black-18dp.svg" alt="edit">
        </td>
    </tr>
    `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Saran Yellanki',
            _gender: 'Male',
            _department: [
                'Engineer',
                'Finance'
            ],
            _salary: '450000',
            _startDate: '30 Sep 2021',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Santhan',
            _gender: 'Male',
            _department: [
                'Engineer',
                'HR'
            ],
            _salary: '500000',
            _startDate: '6 Jun 2021',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -3.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`;
    }
    return deptHtml;
}
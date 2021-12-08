window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
})

const createInnerHtml = () => {
    const innerHtml = `
    <tr>
        <th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td><img class="profile" src="../assets/profile-images/Ellipse -2.png"></td>
        <td>Saran Yellanki</td>
        <td>Male</td>
        <td><div class="dept-label">HR</div>
            <div class="dept-label">Engineer</div></td>
        <td>400000</td>
        <td>30 Sep 2021</td>
        <td>
            <img id="1" onclick="remove()" alt="delete" src="../assets/icons/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update()" src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
}
class EmployeePayrollData {

    get name() { 
        return this.name; 
    }
    set name(name){ 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)) 
            this.name = name;
        else throw "Name is Incorrect";
    }

    get profilePic() {
        return this.profilePic;
    }
    set profilePic(profilePic){
        this.profilePic = profilePic;
    }

    get id() {
        return this.id;
    }
    set id(id){
        if(id>0) this.id = id;
        else throw "ID is not valid"
    }

    get salary() {
        return this.salary;
    }
    set salary(salary){
        this.salary = salary;
    }

    get department() {
        return this.department;
    }
    set department(department){
        this.department = department;
    }

    get note() {
        return this.note;
    }
    set note(note){
        this.note = note;
    }

    get gender() {
        return this.gender;
    }
    set gender(gender){
        this.gender = gender;
    }

    get startDate() {
        return this.startDate;
    }
    set startDate(startDate){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = startDate == undefined ? 'undefined' :
                        startDate.toLocaleDateString('en-US', options);
        let previous = new Date();
        previous.setDate(previous.getDate() - 30);
        if((new Date(empDate)<=new Date()) && new Date(empDate)>=previous)
            this.startDate = empDate;
        else throw "Invalid Date"
    }

    toString(){
        return "id : "+this.id+", name : "+this.name+", salary : "+this.salary+", gender : "+this.gender+
        ", date : "+this.startDate+", profilepic : "+this.profilePic+", department : "+this.department+", note : "+this.note;
    }
}


class user{
    constructor(username,email,password)
    {
        this.username=username 
        this.email=email
        this.password=password
    }
    encryptpassword()
    {
        return `${this.password}abc`

    }
}
const chai=new user("tanish","job.com","1234")
console.log(chai);
console.log(chai.encryptpassword());

//behind the scene


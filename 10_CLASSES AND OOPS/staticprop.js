class user{
    constructor(username)
    {
        this.username=username
    }
    logMe() {
        console.log(`Username:${this.username}`); 
    }
    static createID()//you make the fucntion static so the object is not able toa cces it outside the class
    {
        return `123`
    }
}
class teacher extends user{
    constructor(username,email)
    {
        super(username)
        this.email=email 
    }
}
const iphone=new teacher("tanish","i@phone.com")
//console.log(iphone.createID()); //not accesible


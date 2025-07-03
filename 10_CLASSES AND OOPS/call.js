function setusername(username) {
    this.username=username
}
function createuser(username,email,password)
{
    setusername.call(this,username)//this is not being called if do no use .call function
    // we use this to send the context of the function
    this.email=email
    this.password=password
}

const tanish=new createuser("tanish","job.cm","123")
console.log(tanish);


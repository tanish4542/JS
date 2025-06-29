//generate a random colour 
const random_colour=function()
{
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let id
const start_change_colour=function(){
    if(id==null)
    {
        id=setInterval(changebg,1000)
    }
    function changebg(){
        document.body.style.backgroundColor=random_colour();
    }
}
const stop_change_colour=function(){
    clearInterval(id)
    id=null
}

document.getElementById('start').addEventListener('click',start_change_colour)
document.getElementById('stop').addEventListener('click',stop_change_colour)
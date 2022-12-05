
let minput = document.querySelector('#msginput')
let cio = document.querySelector('.chat-input-other')
const socket = io(window.location.origin)

minput.addEventListener('keypress',(e)=>{
    let valueofinput = minput.value
    let belement = `<div class="ballon"><p>${valueofinput}</p></div>`
    
    socket.emit('typing..');

    if(e.keyCode == 13){
        if(valueofinput == ""){
            return
        } else {
            document.querySelector('.chat-input').innerHTML += belement
            socket.emit('message', {
                message: minput.value,
            });
        }
        minput.value = ""
    }


})

socket.on('message', (data)=>{
    cio.innerHTML ='';
    cio.innerHTML += `<div class="ballon"><p>${data.message}</p></div>`
  })

  socket.on('typing', function(data){
    cio.innerHTML += `<p>typing...</p>`
});
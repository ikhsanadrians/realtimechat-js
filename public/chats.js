

let minput = document.querySelector('#msginput')
let cio = document.querySelector('.chat-input-other')
const socket = io(window.location.origin)

minput.addEventListener('keypress',(e)=>{
    valueofinput = minput.value
    let belement = `<div class="ballon"><p>${valueofinput}</p></div>`
    
    // socket.emit('typing');

    if(e.keyCode == 13){
        if(valueofinput == ""){
            return
        } else {
            socket.emit('message', {
                name : localStorage.getItem("name"),
                message: minput.value,
            });
            // if(cio.querySelector('.ballon')){
            //     cio.insertAdjacentHTML("afterend",belement)
            // } else {
            //     document.querySelector('.chat-input').innerHTML += belement
            // }
            document.querySelector('.chat-input').innerHTML += belement
            minput.value ='';
        }
        minput.value = ""
    }


})








socket.on('message', (data)=>{
    if(data.name != localStorage.getItem("name")){
        // cio.innerHTML = "";
        cio.innerHTML += `<div class="ballon"><strong>${data.name}</strong><p>${data.message}</p></div>`
    }
  })

//   socket.on('typing', function(data){
//     cio.innerHTML = `<p>typing...</p>`
// });
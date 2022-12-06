let modal = document.getElementById("myModal");
window.addEventListener('load',function(){
    modal.style.display = "block"
})

let name = document.getElementById('names')
name.addEventListener('keypress',function(e){
    if(e.keyCode == 13){
        if(name == ""){
            return
        }else {
            localStorage.setItem('name', name.value);     
            modal.style.display = "none"
        }
      
    }
})

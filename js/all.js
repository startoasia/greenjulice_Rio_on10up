function  scrollShow(scrollID){
    const show = document.querySelector(scrollID)
    const open = document.querySelector(`${scrollID}-open`)
    const close = document.querySelector(`${scrollID}-close`)
    show.classList.toggle("show")
    open.classList.toggle("btnShow")
    close.classList.toggle("btnShow")
  
  }
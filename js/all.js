function scrollShow(scrollID) {
  const show = document.querySelector(scrollID)
  const open = document.querySelector(`${scrollID}-open`)
  const close = document.querySelector(`${scrollID}-close`)
  show.classList.toggle("show")
  open.classList.toggle("btnShow")
  close.classList.toggle("btnShow")

}
// SP導覽列
const SP_btn = document.querySelector('.nav_SP_btn')
const navList = document.querySelector('.nav_SP_container')
SP_btn.addEventListener('click', () => {
  SP_btn.classList.toggle("nav_SP_btn--active")
  navList.classList.toggle("nav_SP_navListShow--active")
})
const navLink = document.querySelectorAll('.nav_SP_container .navLink')
navLink.forEach(item => {
  item.addEventListener('click', () => {
    SP_btn.classList.toggle("nav_SP_btn--active")
    navList.classList.toggle("nav_SP_navListShow--active")
  })
})

const bg2 = document.querySelector('.bg2')
window.addEventListener('scroll', () => {
  if (window.scrollY >= bg2.offsetTop / 2) {
    SP_btn.classList.remove('nav_SP_btn--FVmove')
  } else {
    SP_btn.classList.add('nav_SP_btn--FVmove')
  }
})
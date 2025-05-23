window.addEventListener('DOMContentLoaded',()=>{
  const markers=document.querySelectorAll('.marker')
  const units=[document.getElementById('unit1'),document.getElementById('unit2'),document.getElementById('unit3')]
  const navHome=document.getElementById('nav-home')
  const navWork=document.getElementById('nav-work')
  const content=document.getElementById('content')

  const hideAll=()=>units.forEach(u=>u.style.display='none')

  markers.forEach((m,i)=>m.addEventListener('click',()=>{
    document.body.classList.add('content-visible')
    hideAll()
    units[i].style.display='block'
    window.scrollTo({top:content.offsetTop,behavior:'smooth'})
    markers.forEach(x=>x.querySelector('.marker-inner').style.animation='none')
  }))

  navHome.addEventListener('click',e=>{
    e.preventDefault()
    document.body.classList.remove('content-visible')
    hideAll()
    window.scrollTo(0,0)
  })

  navWork.addEventListener('click',e=>{
    e.preventDefault()
    document.getElementById('work-cited').scrollIntoView({behavior:'smooth'})
  })

  hideAll()
})
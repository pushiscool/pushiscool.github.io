window.addEventListener('DOMContentLoaded', () => {
  const markers = document.querySelectorAll('.marker')
  const units   = Array.from(document.querySelectorAll('.unit'))
  const navHome = document.getElementById('nav-home')
  const navWork = document.getElementById('nav-work')
  const content = document.getElementById('content')

  const hideAll = () => units.forEach(u => u.style.display = 'none')

  markers.forEach((m, i) =>
    m.addEventListener('click', () => {
      document.body.classList.add('content-visible')
      hideAll()
      if (units[i]) units[i].style.display = 'block'
      window.scrollTo({ top: content.offsetTop, behavior: 'smooth' })
      m.querySelector('.marker-inner').style.animation = 'none'
    })
  )

  navHome.addEventListener('click', e => {
    e.preventDefault()
    document.body.classList.remove('content-visible')
    hideAll()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  navWork.addEventListener('click', e => {
    e.preventDefault()
    document.getElementById('work-cited').scrollIntoView({ behavior: 'smooth' })
  })

  hideAll()
})
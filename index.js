(function() {
  'use strict'
  
  const thumbnail = [...document.querySelectorAll('.js-thumbnail')]
  const fullsize = [...document.querySelectorAll('.js-fullsize')]

  const visibleFullsize = e => e.nextElementSibling.classList.add('is-visible')
  const hiddenFullsize = e => e.target.classList.remove('is-visible')

  thumbnail.forEach(e => e.addEventListener('click', () => visibleFullsize(e)))
  fullsize.forEach(e => e.addEventListener('click', hiddenFullsize))

})()

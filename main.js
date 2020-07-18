(function() {
  'use strict'

  const el = {
    thumbnail: [...document.querySelectorAll('.js-thumbnail')],
    fullsize: [...document.querySelectorAll('.js-fullsize')]
  }

  const visibleFullsize = e => e.nextElementSibling.classList.add('is-visible')
  const hiddenFullsize = e => e.target.classList.remove('is-visible')

  el.thumbnail.forEach(e => e.addEventListener('click', () => visibleFullsize(e)))
  el.fullsize.forEach(e => e.addEventListener('click', hiddenFullsize))

})()

// 即時関数
(function() {
  // strictモード
  'use strict'

  // 要素の取得。複数になるものは予めスプレッド構文を使用して配列を生成
  const thumbnails = [...document.querySelectorAll('.js-thumbnail')]

  // クリックした要素（thumbnail）の兄弟関係にあたる要素（fullsize）に対してのDOM操作
  const visibleFullsize = e => {
    const target = e.nextElementSibling
    target.classList.add('is-visible')
    target.classList.remove('is-hidden')
  }

  // fullsizeに対してのDOM操作
  const hiddenFullsize = e => {
    const target = e.target
    if(!e.target.className.indexOf('is-visible')) return
    target.classList.add('is-hidden')
    target.classList.remove('is-visible')
  }

  // 取得した要素それぞれにイベントを追加
  thumbnails.forEach(e => e.addEventListener('click', () => visibleFullsize(e)))
  window.addEventListener('click', hiddenFullsize)

})()

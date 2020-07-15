// 即時関数
(function() {
  // strictモード（お作法的に）
  'use strict'

  // 要素の取得
  // 複数になるもの前提は予めスプレッド構文を使用して配列を生成
  const el = {
    thumbnail: [...document.querySelectorAll('.js-thumbnail')],
    fullsize: [...document.querySelectorAll('.js-fullsize')]
  }

  // クリックした要素（thumbnail）の兄弟関係にあたる要素（fullsize）に対してのDOM操作
  const visibleFullsize = e => {
    const target = e.nextElementSibling
    target.classList.add('is-visible')
    target.classList.remove('is-hidden')
  }

  // fullsizeに対してのDOM操作
  const hiddenFullsize = e => {
    const target = e
    target.classList.add('is-hidden')
    target.classList.remove('is-visible')
  }

  // 取得した要素それぞれにイベントを追加
  el.thumbnail.forEach(e => e.addEventListener('click', () => visibleFullsize(e)))
  el.fullsize.forEach(e => e.addEventListener('click', () => hiddenFullsize(e)))

})()

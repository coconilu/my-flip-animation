function test(element) {
  var d1 = document.querySelector('#div1')
  d1.style.display = 'none'
}

window.addEventListener('load', () => {
  setTimeout(() => {
    flip(document.querySelector('#div2'), test, 1, 'ease')
  }, 1000)
})

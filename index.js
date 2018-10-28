// UMD
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory());
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.flip = factory().flip;
  }
}(this, function () {
  //use b in some fashion.
  function flip(element, handler, duration = 0.3, timingFn = 'ease') {
    let first, last, invert_top, invert_left
    first = element.getBoundingClientRect()
    handler.call(null, element)
    last = element.getBoundingClientRect()
    invert_top = first.top - last.top
    invert_left = first.left - last.left
    console.log(invert_top, invert_left)
    element.style.transform = `translate(${invert_left}px, ${invert_top}px)`
    console.log(element.style.transform)
    element.addEventListener('transitionend', () => {
      element.style.transition = ""
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        element.style.transition = `all ${duration}s ${timingFn}`
        element.style.transform = ""
      })
    })
  }
  return { flip };
}));


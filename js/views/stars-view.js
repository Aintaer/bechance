define(['zepto', 'underscore', 'backbone'],
  function($, _, Backbone) {
    var amount = 200
    var isDown = false
    var startX = null, startY = null
    var current = null

    return Backbone.View.extend({
      el: '.map',
      
      events: {
        'mousedown': function () { isDown = true },
        'mouseup': function () { isDown = false; startX = null; startY = null },
        'mousemove': function () { if (isDown) this.move.apply(this, arguments) }
      },
      
      render: function () {
        var i, rendered = '', rand, top, left
    
        for (i = 0; i < amount; i++) {
          rand = Math.floor(Math.random() * 5)
          top = Math.floor(Math.random() * -200) + 100 + '%'
          left = Math.floor(Math.random() * -200) + 100 + '%'
          rendered += '<span class="star" style="' + 
            '-webkit-animation-delay: ' + rand + 's; ' +
            'top: ' + top + '; ' +
            'left: ' + left + ';' +
            ';"></span>'
        }
        
        this.el.querySelector('.starfield').innerHTML = rendered
      },
      
      move: function (event) {
        var distX, distY, field
        
        field = this.el.querySelector('.starfield')
        
        if (startX === null && startY === null) {
          startX = event.screenX;
          startY = event.screenY;
          current = field.style.webkitTransform.match(/[-]?([0-9]+)?\.?[0-9]+px?/g)
        }
        
        // Calculate distance, then clamp.
        distX = (event.screenX - startX) * -1 / 10
        distY = (event.screenY - startY) * -1 / 10
        
        // Resistance.
        distX = distX - ((distX / -20) * -2)
        distY = distY - ((distY / -20) * -2)
        
        // Style.
        if (current) {
          distX = Math.floor(parseInt(current[0], 10)) + distX
          distY = Math.floor(parseInt(current[1], 10)) + distY
        }
        
        field.style.webkitTransform = 'translate(' + distX + 'px, ' + distY + 'px)'
      }
    })
  }
)
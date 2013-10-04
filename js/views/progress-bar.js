define(['zepto', 'underscore', 'backbone'],
  function($, _, Backbone) {
    return Backbone.View.extend({
      el: '.progress',

      start: function () {
        this.el.classList.add('go')
      
        this.$el.one('webkitTransitionEnd', function () {
          console.log('done start')
        })
      },
    
      finish: function () {
        var that = this;
        this.el.classList.add('done')
      
        this.$el.one('webkitTransitionEnd', function () {
          setTimeout(function () {
            that.reset()
          }, 200)
          
          console.log('done finsih')
        })
      },
    
      reset: function () {
        var that = this
        this.el.classList.add('reset')
        
        this.$el.one('webkitTransitionEnd', function () {
          console.log('finish reset')
          
          that.el.classList.remove('done')
          that.el.classList.remove('go')
          
          setTimeout(function () { that.el.classList.remove('reset') }, 0)
        })
      }
    })
  }
)
define(['zepto', 'underscore', 'backbone'],
  function($, _, Backbone) {
    return Backbone.View.extend({
      el: '.progress',

      start: function () {
        var that = this
        this.el.classList.add('go')
      
        this.$el.one('webkitTransitionEnd', function () {
          that.trigger('waiting')
        })
      },
    
      finish: function () {
        var that = this;
        this.el.classList.add('done')
      
        this.$el.one('webkitTransitionEnd', function () {
          that.trigger('finished')
          
          setTimeout(function () {
            that.reset()
          }, 200)
        })
      },
    
      reset: function () {
        var that = this
        this.el.classList.add('reset')
        
        this.$el.one('webkitTransitionEnd', function () {
          that.trigger('reset')
          that.el.classList.remove('done')
          that.el.classList.remove('go')
          
          setTimeout(function () { that.el.classList.remove('reset') }, 0)
        })
      }
    })
  }
)
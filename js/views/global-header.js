define(['zepto', 'underscore', 'backbone'],
  function($, _, Backbone) {
    var View = Backbone.View.extend({
      el: '.global-header',
      
      events: {
        'keydown .search': 'submitSearch',
        'click .back': 'toggleSearchMode'
      },
      
      initialize: function () {
        // Event listeners.
        this.on('submitted', this.toggleSearchMode);
        return this
      },
      
      submitSearch: function (event) {
        if (event.which !== 13 || event.target.value === '') return this
        
        value = event.target.value
        event.target.value = ''
        event.target.blur()

        this.trigger('submitted', value);
        
        return this
      },
      
      toggleSearchMode: function () {
        this.el.classList.toggle('searching')
      }
    });
    
    return View;
  }
);
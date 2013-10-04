define(['zepto', 'underscore', 'backbone'],
  function($, _, Backbone) {
    var View = Backbone.View.extend({
      el: '.global-header',
      
      events: {
        'keydown .search': 'submitSearch',
        'click .back-button': 'toggleSearchMode',
        'click .recco': function (event) {
          event.preventDefault()
          event.stopPropagation()
          this.performSearch(event.target.textContent)
        }
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
        
        this.performSearch(value)
        
        return this
      },
      
      performSearch: function (query) {
        if (query === '') return this
        
        this.trigger('submitted', query);
        this.el.querySelector('.term').textContent = query
        return this
      },
      
      toggleSearchMode: function () {
        this.el.classList.toggle('searching')
      }
    });
    
    return View;
  }
);
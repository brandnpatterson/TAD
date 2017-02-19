(function activeClass() {

  var activeClass = {
    // Invoke to use this object
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },

    // cacheDOM
    cacheDOM: function() {
      this.$navbarLink = $('#navbar a');
    },

    // Events bind(this)
    bindEvents: function() {
      this.$navbarLink.click(this.addActiveClass);
    },

    // Remove active class and give to parent
    addActiveClass: function(e) {
      $('.nav').find('.active').removeClass('active');
      $(e.target).parent().addClass('active');
    }
  };

  // Invoke init function from activeClass
  activeClass.init();
}());

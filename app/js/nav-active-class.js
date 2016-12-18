(function activeClass() {

  var activeClass = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },

    cacheDOM: function() {
      this.$navbarLink = $('#navbar a');
    },

    bindEvents: function() {
      this.$navbarLink.click(this.addActiveClass);
    },

    addActiveClass: function() {
      $('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    }
  };
  activeClass.init();
})();

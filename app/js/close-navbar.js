/**
 * Closes the Navbar when a selection is made
 */

(function navBar() {

  var closeNavbar = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },

    cacheDOM: function() {
      this.$dropDownMenu = $('.dropdown-menu');
      this.$navbarToggle = $('.navbar-toggle');
      this.$navRoot = $('.nav-root');
    },

    bindEvents: function() {
      this.$navRoot.click(this.whenDropHidden.bind(this));
      this.$dropDownMenu.click(this.whenDropVisible.bind(this));
    },

    whenDropHidden: function() {
      console.log('hi');
      if (this.$navbarToggle.is(':visible') && this.$dropDownMenu.is(':hidden')) {
        this.$navbarToggle.trigger('click');
      }
    },

    whenDropVisible: function() {
      if (this.$dropDownMenu.is(':visible')) {
        this.$navbarToggle.trigger('click');
      }
    }
  };

  closeNavbar.init();
})();

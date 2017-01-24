/**
 * Closes the Navbar when a selection is made
 */

(function navClose() {

  var navClose = {
    // Invoke to use this object
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },

    // cacheDOM
    cacheDOM: function() {
      this.$dropDownMenu = $('.dropdown-menu');
      this.$navbarToggle = $('.navbar-toggle');
      this.$navRoot = $('.nav-root');
    },

    // Events bind(this)
    bindEvents: function() {
      this.$navRoot.click(this.whenDropHidden.bind(this));
      this.$dropDownMenu.click(this.whenDropVisible.bind(this));
    },

    // close dropDown when secondary dropDown is hidden
    whenDropHidden: function() {
      if (this.$navbarToggle.is(':visible') && this.$dropDownMenu.is(':hidden')) {
        this.$navbarToggle.trigger('click');
      }
    },

    // close dropDown when secondary dropDown is visible
    whenDropVisible: function() {
      if (this.$dropDownMenu.is(':visible')) {
        this.$navbarToggle.trigger('click');
      }
    }
  };
  // Invoke init function from navClose
  navClose.init();
}());

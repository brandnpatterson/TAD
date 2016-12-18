/**
 * Closes the Navbar when a selection is made
 */

(function navClose() {

  var navClose = {
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
  navClose.init();
}());

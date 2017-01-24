/**
 * When the footer nav is selected, move the view to the top of the page
 */

(function navFooter() {

  var navFooter = {
    // Invoke to use this object
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },

    // cacheDOM
    cacheDOM: function() {
      this.$footer = $('footer');
    },

    bindEvents: function() {
      this.$footer.click(this.footerClicked.bind(this));
    },

    footerClicked: function() {
      window.scrollTo(0, 0);
    }
  };
  // Invoke init function from navFooter
  navFooter.init();
}());

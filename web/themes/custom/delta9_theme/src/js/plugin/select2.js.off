(function($){'use strict';Drupal.behaviors.gd_plugin_select2={attach:function(context,settings){

  // if(gd.processed(this)) return;
  var selects = $('select:not(.select2-hidden-accessible)');

  var allowClear = false;

  selects.select2({
    minimumResultsForSearch: -1, // desactivate inline search
    allowClear: allowClear,
    dropdownAutoWidth : true, // adaptive dropdown width
    width: 'style', // use the <select> css width or nothing if there's none
  });

  /*
  To set a placeholder :

  1/ add data-placeholder="Mon placeholder"

  2/ the first option with no value : <option value="">Mon placeholder</option>
  */

  /*
  selects.on("select2:open", function (e)
  {
  });
  selects.on("select2:close", function (e)
  {
  });
  */

}}})(jQuery);
